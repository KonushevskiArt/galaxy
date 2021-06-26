import {classSpaceElem} from '../classSpaceElem/classSpaceElem.js';

class classShip extends classSpaceElem{
  constructor() {
    super();
  }

  autopilot = (screen) => {
    this.isAutopilot = true;
    this.targetX = Math.floor(Math.random() * screen.width);
    this.targetY = screen.height * 0.75 + (Math.floor(Math.random() * screen.height * 0.2))
    setTimeout((function() {
      this.isAutopilot = false}).bind(this), 5000); 
  } 
  
  checkHit = (pests, data, screen) => {
     
    const indexHitPest = pests.findIndex((el) => {
      return ((this.x <= (el.x + el.width) && this.x >= el.x) ||
      (el.x <= (this.x + this.width) && el.x >= this.x)) &&
              ((this.y +10 <= (el.y + el.height) && this.y +10 >= el.y) ||
              (el.y +10 <= (this.y + this.height) && el.y +10 >= this.y));
    });
    if (indexHitPest !== -1) {
      const isRestHelth = this.reduceHelth(pests[indexHitPest]);
      data.explodedAsters.push(data.asteros[indexHitPest]);
 
      pests.splice(indexHitPest, 1);

      if (!isRestHelth) {
        this.y += 20;
      } else {
        data.isGameOver = true;
      }
    }
     
  }

  moveShip = (x, y) => {
    const move = (axis, sign) => {
      sign === '+' ? this[axis] += this.speed : this[axis] -= this.speed;
    } 
      // (- 5, + 5) to remove bounce of this
    if (this.x < x - (this.width / 2) - 5) {
      move('x', '+');
    } else if (this.x  > x - (this.width / 2) + 5) {
      move('x', '-');
    }
  
    if (this.y  < y - (this.width / 2) - 5) {
      move('y', '+');
    } else if (this.y  > y - (this.width / 2) + 5) {
      move('y', '-');
    }
  }
}
export {classShip}