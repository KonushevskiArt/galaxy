import {createSpriteMap} from '../../utils/createSpriteMap.js';

let _isAnima = true;
let _currentPart = 0;

const fireAnima = (ship, screen) => {

  if(ship.isFire) {

    const partsImg = createSpriteMap(2052, 1804, 8, 6);
    
    screen.context.drawImage(ship.imgFire, ...partsImg[_currentPart], (ship.x), (ship.y + ship.height), (ship.width), (ship.height));

    if(_isAnima) {
      _isAnima = false;
      setTimeout(() => {
        _currentPart = (_currentPart === partsImg.length -1 ? _currentPart = 0 : (_currentPart += 1)); 
        _isAnima = true;
      }, 50);
    }
  }
}

export {fireAnima};


