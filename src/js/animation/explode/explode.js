import {createSpriteMap} from '../../utils/createSpriteMap.js';

let _currentPart = 0;
let _isAnima = true;

const partsImg = createSpriteMap(1920, 1440, 8, 6);

const explodeAnim = (data, screen) => {
  data.explodedAsters.forEach((el) => {
    if (el.timer > 0) {
      el.timer -= 10;
      if(el.timer <= 0) {
        const index = data.explodedAsters.findIndex((item) => item.id === el.id);
        data.explodedAsters.splice(index, 1);
      }
      screen.context.drawImage(el.imgExplode, ...partsImg[_currentPart], (el.x ), (el.y ), (el.width), (el.height));

      if(_isAnima) {
        _isAnima = false;
        setTimeout(() => {
          _currentPart = (_currentPart === partsImg.length -1 ? _currentPart = 0 : (_currentPart += 1)); 
          _isAnima = true;
        }, 50);
      }
    } else {
      el.timer = 2000;
    }
  })
    
}
export {explodeAnim};
