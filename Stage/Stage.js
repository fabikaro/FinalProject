/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Colorful City", "./Stage/costumes/Colorful City.png", {
        x: 480,
        y: 360
      }),
      new Costume("Jurassic", "./Stage/costumes/Jurassic.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Farm", "./Stage/costumes/Farm.png", { x: 480, y: 360 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
    this.vars.scrollx = 0;
    this.vars.score = 0;
    this.vars.bestScore = 19;
    this.vars.speed = 0;
  }

  *whenGreenFlagClicked() {
    if (this.vars.score > this.vars.bestScore) {
      this.vars.bestScore = this.vars.score;
    }
  }
}
