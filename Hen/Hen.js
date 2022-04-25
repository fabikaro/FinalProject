/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("hen-a", "./Hen/costumes/hen-a.svg", {
        x: 60.00029999999998,
        y: 53.000299999999996
      }),
      new Costume("hen-b", "./Hen/costumes/hen-b.svg", { x: 63, y: 50 }),
      new Costume("hen-c", "./Hen/costumes/hen-c.svg", { x: 56, y: 52.0933 }),
      new Costume("hen-d", "./Hen/costumes/hen-d.svg", { x: 51, y: 77 })
    ];

    this.sounds = [new Sound("bird", "./Hen/sounds/bird.wav")];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "new new one" },
        this.whenIReceiveNewNewOne
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenKeyLeftArrowPressed() {
    this.costume = "hen-a";
    this.direction = -90;
    this.move(this.stage.vars.speed);
  }

  *whenKeyRightArrowPressed() {
    this.costume = "hen-c";
    this.direction = 90;
    this.move(this.stage.vars.speed);
  }

  *whenIReceiveNewNewOne() {
    this.say(
      "You lost! Click the green flag try again and the space button to start the game"
    );
  }

  *whenKeySpacePressed() {
    yield* this.askAndWait("choose a speed for the hen");
    this.stage.vars.speed = this.answer;
    this.broadcast("start game");
  }

  *whenGreenFlagClicked() {
    this.costume = "hen-c";
    this.direction = 90;
    this.goto(22, -104);
    this.stage.vars.score = 0;
    this.stage.vars.speed = 0;
  }
}
