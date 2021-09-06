import {classSpaceElem} from '../classSpaceElem/classSpaceElem.js';


let id = 0;
class Planet extends classSpaceElem {
  constructor(screen, imgs){
    super(screen.width);
    this.id = id += 1;
    this.x = Math.floor(Math.random()  * screen.width);
    this.y = Math.floor(Math.random() * (-screen.height / 4) );
    this._sign = (Math.random()) > 0.5 ? '+': '-';
    this.speedY = Math.ceil(Math.random() * 3) * 0.25;
    this.height = this.width = Math.floor(Math.random() * 50) + 40;
    this.helth = this.width;
    this.imgs = Object.entries(imgs).filter(([key]) => {
      return key === 'planet1' ||
             key === 'planet2' ||
             key === 'planet3' ||
             key === 'planet4' ||
             key === 'planet5'
    }).map(value => value[1]);

    this.img = this.imgs[Math.floor(Math.random() * 5)];
    // this.isRotate = true;   
    this.angle =   Math.floor(Math.random() * 100);
    // this.speedRotate = this._sign === '+' ? Math.floor(Math.random() * 100) / 50 : -(Math.floor(Math.random() * 100) / 50);
  }
}
export {Planet}