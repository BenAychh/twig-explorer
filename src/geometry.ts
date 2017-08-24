import { curry, merge, range } from "ramda";

import {
  ICircle,
  IDimensions,
  IPoint,
  IPolar,
} from "./Interfaces/index";

export function getSideLength(numberOfSides: number, radius: number ): number {
  const exteriorAngle = 360 / numberOfSides;
  const interiorAngle = 180 - exteriorAngle;
  const triangleBaseAngle = interiorAngle / 2;
  const angleInRadians = convertDegreesToRadians(triangleBaseAngle);
  const halfSide = radius / Math.tan(angleInRadians);
  return 2 * halfSide;
}

export function translateCirclePoints(dimensions: IDimensions, circles: ICircle[]): ICircle[] {
  const center = {
    x: dimensions.x / 2,
    y: dimensions.y / 2,
  };
  return circles.map((circle) =>
    merge(circle, { center: { x: circle.center.x + center.x, y: circle.center.y + center.y } }));
}

export function convertDegreesToRadians(angle: number): number {
  return angle * 2 * Math.PI / 360;
}

export function getCartesianCoordinates(polar: IPolar): IPoint {
  const radians = convertDegreesToRadians(polar.theta);
  const x = polar.r * Math.cos(radians);
  const y = polar.r * Math.sin(radians);
  return { x, y };
}

export function isOnCenter(x: number, y: number) {
  return (cir: ICircle) =>
    Math.pow(cir.center.x - x, 2) + Math.pow(cir.center.y - y, 2) < Math.pow(cir.radius, 2);
}
