import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Hen from "./Hen/Hen.js";
import Egg from "./Egg/Egg.js";
import Line from "./Line/Line.js";

const stage = new Stage({ costumeNumber: 4 });

const sprites = {
  Hen: new Hen({
    x: 22,
    y: -104,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true
  }),
  Egg: new Egg({
    x: -213,
    y: -191,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Line: new Line({
    x: 0,
    y: -179,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
