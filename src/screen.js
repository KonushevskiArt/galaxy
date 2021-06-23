class Screen {
  constructor() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas = this.createCanvas();
      this.context = this.canvas.getContext('2d');
      this.mouseX = null;
      this.mouseY = null;
      this.isClick = false;
  }

  createCanvas = () => {
    const canvas = document.querySelector('.game');
    canvas.onmousemove = this.changeMousePosition;
    canvas.onclick = this.fixMouseClick;
    // canvas.oncontextmenu = (e) => e.preventDefault();
    canvas.width = this.width;
    canvas.height = this.height;
    return canvas;
  }
  
  fixMouseClick = () => {
    this.isClick = true;
    
  } 

  changeMousePosition = (e) => {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  drawImg(image, x, y, width, height) {
    this.context.drawImage(image, x, y, width, height);
  }
  
  print(x, y, text) {
    this.context.fillStyle = '#ffffff';
    this.context.font = '22px Georgia';
    this.context.fillText(text, x, y);
  }
}
export {Screen};