import { fireAnima } from "../../animation/fire/fire";


const TO_RADIANS = Math.PI/180;

const drawRotatedImage = (object, screen) => { 
  const {img, x, y, angle} = object;
  screen.context.save(); 
  screen.context.translate(Math.floor(x) + Math.floor(object.width / 2), Math.floor(y)+ Math.floor(object.height / 2));
  screen.context.rotate(angle * TO_RADIANS);
  screen.context.drawImage(img, -(Math.floor(object.width / 2)), -(Math.floor(object.height / 2)), Math.floor(object.width), Math.floor(object.width));
  screen.context.restore(); 
}

class classSpaceElem {


  render = (screen) => {
        
    if (this.isRotate) {
      this.angle += Math.PI / 180 + this.speedRotate;
 
      drawRotatedImage(this, screen);
    } else {
      screen.drawImg(this.img, this.x, this.y, this.width, this.height);
    }
    fireAnima(this, screen);
 
  }

  isItemOnScreen = (screen) => {
    const {height, width} = screen;

    if (!(this.x >= width + this.width || this.x < -this.width) && 
    !(this.y >= height + this.height || this.y < -height)) {
      return true;
    } else {
      return false;
    }
  }
  
  reduceHelth = (pest) => {
    this.helth = this.helth - pest.power;
    return this.helth > 0 ? false : true;
  }
 
}  

export {classSpaceElem};