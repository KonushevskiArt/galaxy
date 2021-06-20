import { changesAstero } from "./changes-astero";
import { changesShip } from "./changes-ship";
import { changesSpace } from "./changes-space";
import { changesFireball } from "./changes-fireball";


const changes = (data, imgs, screen) => {
    
  changesSpace(data, imgs, screen);
  changesFireball(data, imgs, screen);
  changesAstero(data, imgs, screen);
  changesShip(data, imgs, screen);
  
}

export {changes};