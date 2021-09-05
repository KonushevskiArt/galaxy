import { changesAstero } from "./changes-astero";
import { changesShip } from "./changes-ship";
import { changesSpace } from "./changes-space";
import { changesFireball } from "./changes-fireball";
import { changesStar } from "./changes-star";
import { changesPlanet } from "./changes-planet";
import {changesEnemyShip} from "./changes-enemy"; ///


const changes = (data, imgs, screen) => {
  
  changesSpace(data, imgs, screen);
  changesStar(data, imgs, screen);
  changesPlanet(data, imgs, screen);
  changesAstero(data, imgs, screen);
  //in development
  // changesEnemyShip(data, imgs, screen); в разработке
  changesShip(data, imgs, screen);
  if (screen.isTouchDevice) {
    screen.drawTouchInterface();
    screen.pressedKeys = {
      'up': false,
      'down': false,
      'left': false,
      'right': false,
    };
  }
  changesFireball(data, imgs, screen);

  screen.context.textAlign = 'right';
  screen.print(screen.width - 40, screen.height - 40, `Score: ${data.score}`);
  screen.context.textAlign = 'left';

}

export {changes};