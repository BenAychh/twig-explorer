import { curry } from "ramda";
import constants from "./constants";
import { ICircle, IDrawing, ILinearEquation, IPoint } from "./Interfaces/index";

function _drawCircle(c: HTMLCanvasElement, drawing: IDrawing, cir: ICircle): void {
  const context = c.getContext(constants.canvasContext) as CanvasRenderingContext2D;
  context.beginPath();
  context.arc(cir.center.x, cir.center.y, cir.radius - constants.lineWidth, 0, 2 * Math.PI);
  context.fillStyle = constants.baseColor;
  if (drawing) {
    context.fillStyle = drawing.color;
  }
  context.fill();
  context.lineWidth = constants.lineWidth;
  context.strokeStyle = constants.baseColor;
  context.stroke();
  context.font = "30px Arial";
  context.fillStyle = constants.fontColor;
  context.fillText(cir.name, cir.center.x, cir.center.y);

}

function _drawLine(c: HTMLCanvasElement, drawing: IDrawing, point1: IPoint, point2: IPoint ): void {
  const context = c.getContext(constants.canvasContext) as CanvasRenderingContext2D;
  context.beginPath();
  context.lineWidth = constants.lineWidth;
  context.moveTo(point1.x, point1.y);
  context.lineTo(point2.x, point2.y);
  context.strokeStyle = constants.baseColor;
  if (drawing) {
    context.strokeStyle = drawing.color;
  }
  context.stroke();
}

function _connectCircles(c: HTMLCanvasElement, circle1: ICircle, circle2: ICircle, drawing: IDrawing ): void {
  line(c, drawing, circle1.center, circle2.center);
}

const circle = curry(_drawCircle);
const line = curry(_drawLine);
const connectCircles = curry(_connectCircles);

export function clearCanvas(canvas: HTMLCanvasElement) {
  canvas.getContext("2d").clearRect(0, 0, constants.sideLength, constants.sideLength);
}

export {
  circle,
  connectCircles,
  line,
};
