import {classSpaceElem} from '../classSpaceElem/classSpaceElem.js';

let id = 0;
class Fireball extends classSpaceElem{
  constructor(imgs, x, y) {
    super(imgs, x, y);
    this.id = id += 1;
    this.img = imgs.fireball;
    this.height = this.width = this.power = 10;
    this.speedY = 20;
    this.x = x;
    this.y = y;
    this.isRotate = false;
  }
  
  
}
export {Fireball};