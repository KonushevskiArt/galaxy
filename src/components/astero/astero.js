let id = 0;
class Astero{
  constructor(width){
    this.id = id += 1;
    this.x = Math.floor(Math.random()  * width);
    this.y = Math.floor(Math.random()* -500);
    this._sign = (Math.random()) > 0.5 ? '+': '-';
    this.speedX = +(this._sign + (Math.floor(Math.random() * 3) / 10  ));
    this.speedY = Math.floor(Math.random() * 35) / 10 + 1;
    this.reitX = 1.001;
    this.reitY = 1.001;
    this.height = this.width = Math.floor(Math.random() * 60) + 10;
  
  }
}
export {Astero}