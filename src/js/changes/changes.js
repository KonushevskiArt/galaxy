import { changesAstero } from "./changes-astero";
import { changesShip } from "./changes-ship";
import { changesSpace } from "./changes-space";
import { changesFireball } from "./changes-fireball";
import { changesStar } from "./changes-star";
import { changesPlanet } from "./changes-planet";
import {changesEnemyShip} from "./changes-enemy"; 


const changes = (data, imgs, screen) => {
  
  changesSpace(data, imgs, screen);
  changesStar(data, imgs, screen);
  changesPlanet(data, imgs, screen);
  changesAstero(data, imgs, screen);
  //in development
  // changesEnemyShip(data, imgs, screen); в разработке
  changesShip(data, imgs, screen);

  changesFireball(data, imgs, screen);
  screen.print(screen.width - 150, 50, `Score: ${data.score}`);
}

export {changes};