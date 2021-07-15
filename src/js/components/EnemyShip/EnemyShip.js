import {classShip} from '../classShip/classShip.js';

class EnemyShip extends classShip{
  constructor(imgs, screen){
    super(imgs);
    this.x = screen.width / 2;
    this.y = screen.height * 0.8;
    this.speed = 10;
    this.height = this.width = 50;
    this.helth = 100;
    this.img = imgs.enemy;
    this.imgFire = imgs.fireMin;
    this.imgShot = imgs.shot;
    this.isFire = true;
    this.isRotate = false;
    this.power = this.height / 5;
    this.ammo = 100;
    this.flightRestrictions = 0.01
    this.flightSpace = 0.5
    this.isRepeir = false;
    this.isChangedCourse = false;
  }

}
export {EnemyShip}