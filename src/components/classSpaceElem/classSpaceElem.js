const TO_RADIANS = Math.PI/180;

class classSpaceElem {
  render = (screen) => {
    const drawRotatedImage = (image, x, y, angle) => { 
      screen.context.save(); 
      screen.context.translate(Math.floor(x) + Math.floor(this.width / 2), Math.floor(y)+ Math.floor(this.height / 2));
      screen.context.rotate(angle * TO_RADIANS);
      screen.context.drawImage(image, -(Math.floor(this.width / 2)), -(Math.floor(this.height / 2)), Math.floor(this.width), Math.floor(this.width));
      screen.context.restore(); 
    }
    
    if (this.rotate) {
      this.degree += Math.PI / 180 + this.speedRotate;
      drawRotatedImage(this.img, this.x, this.y, this.degree);
    } else {
      screen.drawImg(this.img, this.x, this.y, this.width, this.height);
    }
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