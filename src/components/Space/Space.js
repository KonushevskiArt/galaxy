import {spaceElem} from '../spaceElem/spaceElem.js';

class Space extends spaceElem{
  constructor(imgs, width, height) {
    super(imgs, width, height);
    this.img = imgs.space;
    this.height = height;
    this.width = width;
    this.x = 0;
    this.y = 0
    this.rotate = false;
  }
  
  
}
export {Space};