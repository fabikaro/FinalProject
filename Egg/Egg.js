/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Egg extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("egg-a", "./Egg/costumes/egg-a.svg", { x: 18, y: 26 }),
      new Costume("egg-b", "./Egg/costumes/egg-b.svg", { x: 23, y: 27 }),
      new Costume("egg-c", "./Egg/costumes/egg-c.svg", { x: 28, y: 27 }),
      new Costume("egg-d", "./Egg/costumes/egg-d.svg", { x: 19, y: 27 }),
      new Costume("egg-e", "./Egg/costumes/egg-e.svg", { x: 20, y: 26 }),
      new Costume("egg-f", "./Egg/costumes/egg-f.svg", { x: 31, y: 26 })
    ];

    this.sounds = [
      new Sound("pop", "./Egg/sounds/pop.wav"),
      new Sound("Squawk", "./Egg/sounds/Squawk.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      )
    ];
  }

  *whenIReceiveStartGame() {
    this.visible = true;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 182;
    while (true) {
      this.y += -7;
      if (this.y == -180) {
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.y = 180;
      }
      if (this.touching(this.sprites["Hen"].andClones())) {
        yield* this.playSoundUntilDone("Squawk");
        this.stage.vars.score += 1;
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.y = 185;
      }
      if (this.touching(Color.rgb(255, 0, 0))) {
        this.broadcast("new new one");
        this.visible = false;
        /* TODO: Implement stop other scripts in sprite */ null;
      }
      yield;
    }
  }
}
