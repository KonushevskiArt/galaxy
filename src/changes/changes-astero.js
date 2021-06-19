import {renderAstero} from '../components/astero/render-astero';
import {checkAsterPos} from '../components/astero/check-aster-pos';
import { Astero } from '../components/astero/astero';

const changesAstero = (data, imgs, screen) => {
  const {height, width} = screen;

  if ((data.gameTime % data.timeAppearAsteros === 0 && data.asteros.length < data.currnetCountAsteros)) {
    const asteroOne = new Astero(screen.width);
    data.asteros.push(asteroOne);
      
  } 

  if (data.asteros.length > 0) {
    data.asteros.forEach((aster) => {
      aster.x += aster.speedX;
      aster.y += aster.speedY;

      // if (aster.x >= width - aster.width || aster.x < 0) {
      //   aster.speedX = -aster.speedX;
      // }
      // if (aster.y >= height - aster.height || aster.y < 0) {
      //   aster.speedY = -aster.speedY;
      // }
      if (checkAsterPos(aster, width, height)) {
        renderAstero(screen, imgs.astero, aster);
      } else {
        const index = data.asteros.findIndex((astero) => aster === astero);
        data.asteros.splice(index, 1);
      }

    })
    
  }


  
}

export {changesAstero};