import {classSpaceElem} from '../classSpaceElem/classSpaceElem.js';


let id = 0;
class Star extends classSpaceElem {
  constructor(screen, imgs){
    super(screen.width);
    this.id = id += 1;
    this.x = Math.floor(Math.random()  * screen.width);
    this.y = Math.floor(Math.random()* -screen.height);
    this._sign = (Math.random()) > 0.5 ? '+': '-';
    this.speedY = Math.ceil(Math.random() * 3) * 0.25;
    this.height = this.width = Math.floor(Math.random() * 6) + 3;
    this.helth = this.width;
    this.imgs = Object.entries(imgs).filter(([key]) => {
      return key === 'star1' ||
             key === 'star2' ||
             key === 'star3' ||
             key === 'star4' ||
             key === 'star5'
    }).map(value => value[1]);

    this.img = this.imgs[Math.floor(Math.random() * 5)];
    this.isRotate = true;   
    this.angle =   Math.floor(Math.random() * 100);
    this.speedRotate = this._sign === '+' ? Math.floor(Math.random() * 100) / 50 : -(Math.floor(Math.random() * 100) / 50);
  }
}
export {Star}