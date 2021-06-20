import {spaceElem} from '../spaceElem/spaceElem.js';

let id = 0;
class Fireball extends spaceElem{
  constructor(imgs, x, y) {
    super(imgs);
    this.id = id += 1;
    this.img = imgs.fireball;
    this.height = this.width = 10;
    this.speedY = 5;
    this.x = x;
    this.y = y;
    this.dataCreated = new Date().getTime();
    this.rotate = false;
  }
  
  
}
export {Fireball};