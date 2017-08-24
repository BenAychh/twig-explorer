import { merge } from "ramda";
import { IConstants } from "./Interfaces/Constants";

const sideLength = 600;

const constants: IConstants = {
  baseColor: "#000000",
  canvasContext: "2d",
  center: sideLength / 2,
  fenceRadius: sideLength * 5 / 12,
  fontColor: "#888888",
  lineWidth: 5,
  middleCircleColor: "#005500",
  middleCircleRadius: sideLength / 6,
  outerCircleColor: "#009900",
  outerCircleRadius: sideLength / 10,
  sideLength,
};

export default Object.freeze(constants);
