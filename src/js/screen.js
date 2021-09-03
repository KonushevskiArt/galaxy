const checkKey = (e, pressedKeys, value) => {
  switch (e.keyCode) {
    case 38:
      pressedKeys.up = value;
      break;
    case 40:
      pressedKeys.down = value;
      break;
    case 39:
      pressedKeys.right = value;  
      break;
    case 37:
      pressedKeys.left = value;
      break;
    default:
      break;
  }
}
const checkDirectionTouchMotion = (e, pressedKeys, lastPosition) => {

  for (let el of e.changedTouches) {
    if (lastPosition !== null && el.identifier === lastPosition.id) {

      const x = el.clientX;
      const y = el.clientY;

      if (x === lastPosition.x) {
        pressedKeys.right = pressedKeys.left = false;
      } else if (x > lastPosition.x) {
        pressedKeys.right = true;
        pressedKeys.left = false;
        lastPosition.x = x;
      } else {
        pressedKeys.right = false;
        pressedKeys.left = true;
        lastPosition.x = x;
      }

      if (y === lastPosition.y) {
        pressedKeys.up = pressedKeys.down = false;
      } else if (y > lastPosition.y) {
        pressedKeys.down = true;
        pressedKeys.up = false;
        lastPosition.y = y;
      } else {
        pressedKeys.down = false;
        pressedKeys.up = true;
        lastPosition.y = y;
      }
    }
  }
}
const IsTouchDevice = () => {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

class Screen {
  constructor() {
      this.width = null;
      this.height = null;
      this.isTouchDevice = false;

      this.touchInterfacePositions = {

        shootBtnX: null, 
        shootBtnY: null, 
        shootBtnR: null,
        shootBtnBorders: {
          leftBorderShootBtn: null,
          rightBorderShootBtn: null,
          topBorderShootBtn: null,
          downBorderShootBtn: null,
        },

        joystickBorders: {
          leftBorderJoystick: null,
          rightBorderJoystick: null,
          topBorderJoystick: null,
          downBorderJoystick: null,
        },
        lastJoystickTouchEventPosition: null,
    
        joystickX: null, 
        joystickY: null, 
        joystickR: null,
      }

      this.canvas = this.createCanvas();
      this.context = this.canvas.getContext('2d');
      this.userAgent = null;
      this.pressedKeys = {
        'up': false,
        'down': false,
        'left': false,
        'right': false,
      };
      this.isFire = false;

     
  }

  canvasResize = () => {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createCanvas = () => {
    const canvas = document.querySelector('.game');

    if (IsTouchDevice()) {
      canvas.width = this.width = window.outerWidth;
      canvas.height = this.height = window.outerHeight;
      this.isTouchDevice = true;

      this.touchInterfacePositions.shootBtnX = Math.floor(this.width - this.width / 6); 
      this.touchInterfacePositions.shootBtnY = Math.floor(this.height - this.height / 5); 
      this.touchInterfacePositions.shootBtnR = Math.floor(this.width / 12);

      this.touchInterfacePositions.joystickX = Math.floor(this.width - this.width * 0.80); 
      this.touchInterfacePositions.joystickY = Math.floor(this.height - this.height / 5); 
      this.touchInterfacePositions.joystickR = Math.floor(this.width / 6);
      
      const {
        shootBtnBorders, shootBtnX, shootBtnR, shootBtnY, joystickBorders , joystickX, joystickY, joystickR
      } = this.touchInterfacePositions;

      joystickBorders.leftBorderJoystick = joystickX - joystickR;
      joystickBorders.rightBorderJoystick = joystickX + joystickR;
      joystickBorders.topBorderJoystick = joystickY - joystickR;
      joystickBorders.downBorderJoystick = joystickY + joystickR; 

      shootBtnBorders.leftBorderShootBtn = shootBtnX - shootBtnR;
      shootBtnBorders.rightBorderShootBtn = shootBtnX + shootBtnR;
      shootBtnBorders.topBorderShootBtn = shootBtnY - shootBtnR;
      shootBtnBorders.downBorderShootBtn = shootBtnY + shootBtnR;

      window.ontouchstart = this.fixTouchStart;
      window.ontouchmove = this.fixTouchMove;
      window.ontouchend = this.fixTouchEnd;
    } else {
      canvas.width = this.width = window.innerWidth;
      canvas.height = this.height = window.innerHeight;
    }
    window.onkeyup = this.fixUpKey;
    window.onkeydown = this.fixDownKey;
    // canvas.oncontextmenu = (e) => e.preventDefault();
    return canvas;
  }
  
  fixDownKey = (e) => {
    checkKey(e, this.pressedKeys, true)
    if (e.keyCode === 32) {
      this.isFire = true;
    }
  } 

  fixTouchStart = (e) => {
    const {
      leftBorderShootBtn, rightBorderShootBtn, topBorderShootBtn, downBorderShootBtn
    } = this.touchInterfacePositions.shootBtnBorders;

    const {
      leftBorderJoystick, rightBorderJoystick, topBorderJoystick, downBorderJoystick
    } = this.touchInterfacePositions.joystickBorders;

    for (let el of e.touches) {
      if ((el.clientX >= leftBorderShootBtn && el.clientX <= rightBorderShootBtn) 
        && (el.clientY >= topBorderShootBtn && el.clientY <= downBorderShootBtn)) {
        this.isFire = true;
        // window.navigator.vibrate(40);

      } else if ((el.clientX >= leftBorderJoystick && el.clientX <= rightBorderJoystick) 
      && (el.clientY >= topBorderJoystick && el.clientY <= downBorderJoystick)) {
        this.touchInterfacePositions.lastJoystickTouchEventPosition = {
          id: el.identifier,
          x: el.clientX,
          y: el.clientY
        }
      }
    }
  }
  fixTouchMove = (e) => {
    checkDirectionTouchMotion(e, this.pressedKeys, this.touchInterfacePositions.lastJoystickTouchEventPosition);
    // console.log(e)
  }
  fixTouchEnd = (e) => {
    let lastPosition = this.touchInterfacePositions.lastJoystickTouchEventPosition;

    for (let touch of e.changedTouches) {
      if (lastPosition !== null && touch.identifier === lastPosition.id) {
        this.touchInterfacePositions.lastJoystickTouchEventPosition = null;
      }
    }

  }

  fixUpKey = (e) => {
    checkKey(e, this.pressedKeys, false)
  } 

  drawImg(image, x, y, width, height) {
    this.context.drawImage(image, x, y, width, height);
  }
  
  print(x, y, text) {
    this.context.fillStyle = '#ffffff';
    this.context.font = '22px Georgia';
    this.context.fillText(text, x, y);
  }

  drawTouchInterface = () => {
    let {
      shootBtnX, shootBtnY, shootBtnR, joystickX, joystickY, joystickR,
    } = this.touchInterfacePositions;

    if (this.isFire) {
      this.context.globalAlpha=0.5;
      this.context.shadowBlur=15;
      shootBtnR += 5;
     } else {
      this.context.globalAlpha=0.2;
      this.context.shadowBlur=10;
    }
    

    this.context.shadowColor='thistle';
    this.context.shadowOffsetX=0;
    this.context.shadowOffsetY=0;
    this.context.fillStyle='red';
    this.context.beginPath();
    this.context.arc(shootBtnX, shootBtnY, shootBtnR, 0, Math.PI*2, false); // x / y / r ...
    this.context.fill();

    if (this.touchInterfacePositions.lastJoystickTouchEventPosition) {

      this.context.globalAlpha=0.5;
      this.context.shadowBlur=14;
    } else {
      this.context.globalAlpha=0.2;
      this.context.shadowBlur=10;  
    }
    this.context.beginPath();
    this.context.arc(joystickX, joystickY, joystickR, 0, Math.PI*2, false); // x / y / r ...
    this.context.fill();

    this.context.globalAlpha=1;
    this.context.shadowBlur=0;
  }

  
}
export {Screen};