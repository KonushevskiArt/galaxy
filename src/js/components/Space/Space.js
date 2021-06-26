import {classSpaceElem} from '../classSpaceElem/classSpaceElem.js';

class Space extends classSpaceElem{
  constructor(imgs, width, height) {
    super(imgs, width, height);
    this.img = imgs.space;
    this.height = height;
    this.width = width;
    this.x = 0;
    this.y = 0
    this.isRotate = false;
  }
  
  
}
export {Space};