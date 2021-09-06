import {createSpriteMap} from '../../utils/createSpriteMap.js';


const partsImg = createSpriteMap(254, 284, 3, 4).reverse();

const hitAnim = (data, screen) => {
  
  data.hitedAsters.forEach((el) => {

    if (el._hitTimer > 0 && el._hitCurrentPart !== undefined) {
      el._hitTimer -= 10;

      if (el._hitTimer <= 0) {
        const index = data.hitedAsters.findIndex((item) => item.id === el.id);
        data.hitedAsters.splice(index, 1);
      }
      screen.context.drawImage(el.imgHit, ...partsImg[el._hitCurrentPart], (el.x + el.width / 7), (el.y + el.height /1.5), (el.width / 1.5), (el.height / 1.5));
  
      if(el._hitTimer % 50 === 0) {
        el._hitCurrentPart = (el._hitCurrentPart === partsImg.length -1 ? el._hitCurrentPart = 0 : (el._hitCurrentPart += 1)); 
      }
    } else {
      el._hitTimer = 600;
      el._hitCurrentPart = 0;
    }
  })
     
}
export {hitAnim};

