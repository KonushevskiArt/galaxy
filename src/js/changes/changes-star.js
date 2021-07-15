import { Star } from '../components/Star/Star.js';
const currentCountStars = 50;

const changesStar = (data, imgs, screen) => {
  const {height, width} = screen;
  if (data.stars.length < currentCountStars) {
    const starOne = new Star(screen, imgs);
    data.stars.push(starOne); 
  } 

  if (data.stars.length > 0) {
    data.stars.forEach((star) => {
      star.y += star.speedY;

      if (star.isItemOnScreen(screen)) {
        star.render(screen);
      } else {
        const index = data.stars.findIndex((starOne) => star === starOne);
        data.stars.splice(index, 1);
      }

    })
    
  }

}

export {changesStar};