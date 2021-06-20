import {spaceElem} from '../spaceElem/spaceElem.js';


let id = 0;
class Astero extends spaceElem {
  constructor(width, imgs){
    super(width);
    this.id = id += 1;
    this.x = Math.floor(Math.random()  * width);
    this.y = Math.floor(Math.random()* -500);
    this._sign = (Math.random()) > 0.5 ? '+': '-';
    this.speedX = +(this._sign + (Math.floor(Math.random() * 9) / 5 ));
    this.speedY = Math.floor(Math.random() * 35) / 10 + 1;
    this.reitX = 1.001;
    this.reitY = 1.001;
    this.height = this.width = Math.floor(Math.random() * 60) + 10;
    this.helth = this.power = Math.floor(this.height) / 10;
    this.imgs = Object.entries(imgs).filter(([key]) => {
      return key === 'astero' ||
             key === 'astero2'||
             key === 'astero3'||
             key === 'astero4'||
             key === 'astero5'||
             key === 'astero6';
    }).map(value => value[1]);

    this.img = this.imgs[Math.floor(Math.random() * 6)];
    this.rotate = true;      
  }
}
export {Astero}