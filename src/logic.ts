import { merge, range } from "ramda";
import * as Draw from "./drawing";
import { getCartesianCoordinates, isOnCenter } from "./geometry";
import { ICircle, IConstants, ID3Node, IPolar, ITwiglet } from "./Interfaces/index";

export function getOuterCircles(constants: IConstants, twiglet: ITwiglet, source?: string): ICircle[] {
  const outerNodes = getOuterNodes(twiglet, source);
  const circleOfCircles =
    getCircleInACircle(outerNodes.length, constants.fenceRadius, constants.outerCircleRadius);
  return circleOfCircles
  .map((circle, index) => merge(circle, { name: outerNodes[index].name, id: outerNodes[index].id }))
  .map((circle) => merge(
    circle,
    {
      center: {
        x: circle.center.x + constants.center,
        y: circle.center.y + constants.center,
      },
    },
  ));
}

export function addEventListeners(
    constants: IConstants,
    canvas: HTMLCanvasElement,
    twiglet: ITwiglet,
    rootCircles: ICircle[],
    centerCircle?: ICircle) {
  const listener = canvas.addEventListener("click", function _handler(mouseEvent) {
    const clickedCircle = rootCircles.filter(isOnCenter(mouseEvent.x, mouseEvent.y))[0];
    if (clickedCircle) {
      handleOutsideCircleClick(constants, canvas, _handler, twiglet, clickedCircle);
    } else if (centerCircle && isOnCenter(mouseEvent.x, mouseEvent.y)(centerCircle)) {
      const linkId = twiglet.targetMap[centerCircle.id] ? twiglet.targetMap[centerCircle.id][0] : undefined;
      Draw.clearCanvas(canvas);
      canvas.removeEventListener("click", _handler);
      if (linkId) {
        goOneLevelUp(constants, canvas, twiglet, linkId);
      } else {
        const outerCircles = getOuterCircles(constants, twiglet);
        if (outerCircles.length === 1) {
          drawSetOfCircles(constants, canvas, twiglet, outerCircles[0]);
        } else {
          drawBaseLevel(constants, canvas, twiglet);
        }
      }
    }
  });
}

export function drawBaseLevel(constants: IConstants, canvas: HTMLCanvasElement, twiglet: ITwiglet) {
  const childCircles = getOuterCircles(constants, twiglet);
  childCircles.forEach(Draw.circle(canvas, { color: "#008800" }));
  addEventListeners(constants, canvas, twiglet, childCircles);
}

export function drawSetOfCircles(
    constants: IConstants,
    canvas: HTMLCanvasElement,
    twiglet: ITwiglet,
    centerCircle: ICircle) {
  const childCircles = getOuterCircles(constants, twiglet, centerCircle.id);
  if (childCircles.length > 0) {
    Draw.clearCanvas(canvas);
    childCircles.forEach(Draw.circle(canvas, { color: "#008800" }));
    const newCenter = merge(
      centerCircle,
      { center: { x: constants.center, y: constants.center }, radius: constants.middleCircleRadius },
    );
    Draw.circle(canvas, { color: "#004400" }, newCenter);
    childCircles.forEach(Draw.connectCircles(canvas, newCenter));
    addEventListeners(constants, canvas, twiglet, childCircles, newCenter);
    return true;
  }
  return false;
}

function getOuterNodes(twiglet: ITwiglet, source?: string): ID3Node[] {
  let outerNodes: ID3Node[];
  if (source) {
    if (twiglet.sourceMap[source]) {
      const linkIds = twiglet.sourceMap[source];
      outerNodes = linkIds.reduce((array, id) => {
        array.push(twiglet.links[id].target);
        return array;
      }, []);
    } else {
      return [];
    }
  } else {
    outerNodes = Reflect.ownKeys(twiglet.nodes)
                  .map((key) => twiglet.nodes[key])
                  .filter((cir) => cir.depth === 0);
  }
  return outerNodes;
}

function getCircleInACircle(numberOfCircles: number, radius: number, littleRadius: number): ICircle[] {
  const degreesBetweenCircle = 360 / numberOfCircles;
  const radiusFromCenter = radius - littleRadius;
  return range(0, numberOfCircles)
  .map((interval) => {
    const polar: IPolar = { r: radiusFromCenter, theta: interval * degreesBetweenCircle + degreesBetweenCircle / 2 };
    return {
      center: getCartesianCoordinates( polar ),
      radius: littleRadius,
    };
  });
}

function handleOutsideCircleClick(
    constants: IConstants,
    canvas: HTMLCanvasElement,
    handlerFn: (this: HTMLCanvasElement, mouseEvent: MouseEvent) => void,
    twiglet: ITwiglet,
    clickedCircle: ICircle) {
  const needToRemove = drawSetOfCircles(constants, canvas, twiglet, clickedCircle);
  if (needToRemove) {
    canvas.removeEventListener("click", handlerFn);
  }
}

function goOneLevelUp(constants: IConstants, canvas: HTMLCanvasElement, twiglet: ITwiglet, linkId: string) {
  const node = twiglet.links[linkId].source;
  const newCenter =
    merge(
      node,
      { center: { x: constants.center, y: constants.center }, radius: constants.middleCircleRadius },
    );
  const childCircles = getOuterCircles(constants, twiglet, newCenter.id);
  childCircles.forEach(Draw.circle(canvas, { color: "#008800" }));
  Draw.circle(canvas, { color: "#004400" }, newCenter);
  childCircles.forEach(Draw.connectCircles(canvas, newCenter));
  addEventListeners(constants, canvas, twiglet, childCircles, newCenter);
}
