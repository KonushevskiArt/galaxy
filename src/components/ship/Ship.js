import {classShip} from '../classShip/classShip.js';

class Ship extends classShip{
  constructor(imgs, screen){
    super(imgs);
    this.x = screen.width / 2;
    this.y = screen.height * 0.8;
    this.speed = 10;
    this.height = this.width = 50;
    this.helth = 100;
    this.img = imgs.spaceship;
    this.rotate = false;
    this.power = this.height / 5;
    this.ammo = 100;
    this.isRepeir = false;
  }

  checkRepeir = (data) => {
    const obj =  data.bigShip;

    if ( ( (this.x <= (obj.x + obj.width) && this.x >= obj.x) ||
             (obj.x <= (this.x + this.width) && obj.x >= this.x) ) &&
             (this.y +10 <= (obj.y + obj.height) && this.y +10 >= obj.y) && this.isRepeir === false) {
        this.isRepeir = true;
        setTimeout(function() {
           if ( this.helth  < 100) {
            this.helth += 1;
          }
          if (this.ammo < 100) {
            this.ammo += 1;
          }
          this.isRepeir = false;
        }.bind(this), 400);
      }
  }
}
export {Ship}