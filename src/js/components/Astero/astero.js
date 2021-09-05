import {classSpaceElem} from '../classSpaceElem/classSpaceElem.js';


let id = 0;
class Astero extends classSpaceElem {
  constructor(width, imgs){
    super(width);
    this.id = id += 1;
    this.x = Math.floor(Math.random() * width);
    this.y = Math.floor(Math.random()* -500) + (-100);
    this._sign = (Math.random()) > 0.5 ? '+': '-';
    this.speedX = +(this._sign + (Math.floor(Math.random() * 3)));
    this.speedY = Math.floor(Math.random() * 3) + 1;
    this.height = this.width = Math.floor(Math.random() * 60) + 10;
    this.helth = this.width;
    this.imgs = Object.entries(imgs).filter(([key]) => {
      return key === 'astero' ||
             key === 'astero2'||
             key === 'astero3'||
             key === 'astero4'||
             key === 'astero5'||
             key === 'astero6'||
             key === 'satelite' ||
             key === 'satelite2' ||
             key === 'astero8'
    }).map(value => value[1]);

    this.img = this.imgs[Math.floor(Math.random() * 9)];
    this.imgExplode = imgs.explode;
    this.imgHit = imgs.hit;
    this.isRotate = true;   
    this.power =  Math.floor(this.speedY * this.height / 4);
    this.angle =   Math.floor(Math.random() * 100);
    this.speedRotate = this._sign === '+' ? Math.floor(Math.random() * 100) / 50 : -(Math.floor(Math.random() * 100) / 50);
  }
}
export {Astero}