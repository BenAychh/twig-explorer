import constants from "./constants";

import * as data from "./Emails.json";
import * as Twiglet from "./handleTwiglet";
import { ITwigletFromWeb } from "./Interfaces/index";
import { drawBaseLevel, drawSetOfCircles, getOuterCircles } from "./logic";

function main() {
  const canvas = document.getElementById("c") as HTMLCanvasElement;

  const twiglet = Twiglet.getTransformedTwiglet(data as ITwigletFromWeb);
  const outerCircles = getOuterCircles(constants, twiglet);
  if (outerCircles.length === 1) {
    drawSetOfCircles(constants, canvas, twiglet, outerCircles[0]);
  } else {
    drawBaseLevel(constants, canvas, twiglet);
  }
}

main();
