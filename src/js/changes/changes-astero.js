import { Astero } from '../components/Astero/Astero.js';

const changesAstero = (data, imgs, screen) => {
  const {height, width} = screen;

  if ((data.gameTime % data.timeAppearAsteros === 0 && data.asteros.length < data.currnetCountAsteros)) {
    const asteroOne = new Astero(screen.width, imgs);
    data.asteros.push(asteroOne); 
  } 

  if (data.asteros.length > 0) {
    data.asteros.forEach((aster) => {
      aster.x += aster.speedX;
      aster.y += aster.speedY;

      if (aster.isItemOnScreen(screen)) {
        aster.render(screen);
      } else {
        const index = data.asteros.findIndex((astero) => aster === astero);
        data.asteros.splice(index, 1);
      }

    })
    
  }

}

export {changesAstero};