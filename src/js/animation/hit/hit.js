import {createSpriteMap} from '../../utils/createSpriteMap.js';

let _currentPart = 0;
let _isAnima = true;

const partsImg = createSpriteMap(854, 954, 3, 4).reverse();

const hitAnim = (data, screen) => {
  
  data.hitedAsters.forEach((el) => {
    if (el.timer > 0) {
      el.timer -= 10;
      if(el.timer <= 0) {
        const index = data.hitedAsters.findIndex((item) => item.id === el.id);
        data.hitedAsters.splice(index, 1);
      }
      screen.context.drawImage(el.imgHit, ...partsImg[_currentPart], (el.x + el.width / 7), (el.y + el.height /1.5), (el.width / 1.5), (el.height / 1.5));

      if(_isAnima) {
        _isAnima = false;
        setTimeout(() => {
          _currentPart = (_currentPart === partsImg.length -1 ? _currentPart = 0 : (_currentPart += 1)); 
          _isAnima = true;
        }, 70);
      }
    } else {
      el.timer = 800;
    }
  })
     
}
export {hitAnim};

