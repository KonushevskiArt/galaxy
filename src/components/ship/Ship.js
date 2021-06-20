import {spaceElem} from '../spaceElem/spaceElem.js';

class Ship extends spaceElem{
  constructor(imgs, screen){
    super(imgs);
    this.x = screen.width / 2;
    this.y = screen.height * 0.8;
    this.speed = 10;
    this.height = this.width = 50;
    this.img = imgs.spaceship;
    this.rotate = false;
  }
}
export {Ship}