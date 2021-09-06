import {createSpriteMap} from '../../utils/createSpriteMap.js';

// let _currentPart = 0;
// let _isAnima = true;

const partsImg = createSpriteMap(800, 600, 8, 6);

const explodeAnim = (data, screen) => {

  data.explodedAsters.forEach((el) => {
  
    if (el._explodeTimer > 0 && el._explodeCurrentPart !== undefined) {
      el._explodeTimer -= 10;
      if (el._explodeTimer <= 0) {
        const index = data.explodedAsters.findIndex((item) => item.id === el.id);
        data.explodedAsters.splice(index, 1);
      }
      screen.context.drawImage(el.imgExplode, ...partsImg[el._explodeCurrentPart], (el.x ), (el.y ), (el.width), (el.height));

      if(el._explodeTimer % 100 === 0) {
        el._explodeCurrentPart = (el._explodeCurrentPart === partsImg.length -1 ? el._explodeCurrentPart = 0 : (el._explodeCurrentPart += 1)); 
      }
    } else {
      el._explodeTimer = 4600;
      el._explodeCurrentPart = 0;
    }
  })
    
}
export {explodeAnim};
