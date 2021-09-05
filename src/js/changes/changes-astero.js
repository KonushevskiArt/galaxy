import { Astero } from '../components/Astero/Astero.js';
import { explodeAnim} from '../animation/explode/explode.js';
import { hitAnim } from '../animation/hit/hit.js';


const changesAstero = (data, imgs, screen) => {
  const {height, width} = screen;

  if (data.asteros.length < data.currnetCountAsteros) {
    const asteroOne = new Astero(screen.width, imgs);
    data.asteros.push(asteroOne); 
  } 

  if (data.asteros.length > 0) {
    data.asteros.forEach((aster) => {
      aster.x += aster.speedX;
      aster.y += aster.speedY;

      if (aster.isItemOnScreen(screen)) {
        aster.render(screen); 
        explodeAnim(data, screen);
        hitAnim(data, screen);
      } 
      else {
        const newArrAsteros = data.asteros.filter((astero) => aster !== astero);
        data.asteros = newArrAsteros; 
      }
    })
  }
}

export {changesAstero};