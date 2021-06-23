// import {spaceElem} from '../spaceElem/spaceElem.js';
import {classShip} from '../classShip/classShip.js';


class BigShip extends classShip{
  constructor(imgs, screen){
    super(imgs);
    this.x = screen.width / 2 - 30;
    this.y = screen.height * 0.8;
    this.speed = 0.5;
    this.height = this.width = 150;
    this.helth = 1000;
    this.img = imgs.bigspaceship;
    this.rotate = false;
    this.isAutopilot = false;
    // this.power = this.height / 5;
    // this.ammo = 100;
  }
}
export {BigShip}