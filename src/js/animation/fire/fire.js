import {createSpriteMap} from '../../utils/createSpriteMap.js';

let _isAnima = true;
let _currentPart = 0;
const partsImg = createSpriteMap(826, 605, 8, 5);

const fireAnima = (ship, screen) => {

  if(ship.isFire) {
    
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


