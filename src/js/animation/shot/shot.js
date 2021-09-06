import {createSpriteMap} from '../../utils/createSpriteMap.js';

let _currentPart = 0;
let _timer = 0;

const partsImg = createSpriteMap(114, 114, 3, 2);

const shotAnima = (data, screen) => {
  
    const {ship} = data;

    if (screen.isFire && ship.ammo !== 0) {
      _timer = 180;
    }
    
    if (_timer > 0) {
      screen.context.drawImage(ship.imgShot, ...partsImg[_currentPart], (ship.x + (ship.width / 2) - 10), (ship.y - ship.height / 2), (ship.width / 2), (ship.height / 2));
      
      if (_timer % 30 === 0) {
        _currentPart = (_currentPart === partsImg.length -1 ? _currentPart - (partsImg.length - 1) : (_currentPart += 1)); 
      }
      _timer -= 10;
    }
      
}
export {shotAnima};

