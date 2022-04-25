/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Line extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("line", "./Line/costumes/line.svg", { x: 239, y: 7 })
    ];

    this.sounds = [new Sound("pop", "./Line/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, -179);
  }
}
