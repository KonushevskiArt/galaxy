import { changesAstero } from "./changes-astero";
import { changesShip } from "./changes-ship";
import { changesSpace } from "./changes-space";
import { changesFireball } from "./changes-fireball";


const changes = (data, imgs, screen) => {
  changesSpace(data, imgs, screen);
  changesFireball(data, imgs, screen);
  changesAstero(data, imgs, screen);
  changesShip(data, imgs, screen);
  screen.print(screen.width - 150, 50, `Score: ${data.score}`);
}

export {changes};