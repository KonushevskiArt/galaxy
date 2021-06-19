class Screen {
  constructor() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas = this.createCanvas(this.width, this.height);
      this.context = this.canvas.getContext('2d');
      
  }

  createCanvas(width, height) {
    const canvas = document.querySelector('.game');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  drawImg(image, x, y, width, height) {
    this.context.drawImage(image, x, y, width, height);
  }
  
  // print(x, y, text) {
  //   this.context.fillStyle = '#ffffff';
  //   this.context.font = '22px Georgia';
  //   this.context.fillText(text, x, y);
  // }
}
export {Screen};