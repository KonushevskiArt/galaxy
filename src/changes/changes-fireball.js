import { Fireball } from '../components/Fireball/Fireball.js';
const reduceHelth = (elem, pest) => {
  elem.helth - pest.power;
}
const checkHit = (fireball, data) => {
    
  const indexHitAster = data.asteros.findIndex((aster) => {
    return (fireball.x <= (aster.x + aster.width) && fireball.x >= aster.x) &&
           (fireball.y <= (aster.y + aster.height) && fireball.y >= aster.y)
  });
  if (indexHitAster !== -1) {
    const indexFireball = data.fireballs.findIndex((el) => el.id === fireball.id );
    data.fireballs.splice(indexFireball, 1);
    data.asteros.splice(indexHitAster, 1);
  }
}


const changesFireball = (data, imgs, screen) => {
    

  const {height, width} = screen;
  const lastShot = data.timeLastShot ? data.timeLastShot - new Date().getTime() - 2 : true;

  if (screen.isClick && lastShot) {
    const fireBall = new Fireball(imgs, data.ship.x + (data.ship.width / 2.2), data.ship.y);

    data.fireballs.push(fireBall);
    
    fireBall.render(screen);
    screen.isClick = false;
  }
  
  if (data.fireballs.length > 0) {
    data.fireballs.forEach((fireball) => {
      fireball.y -= fireball.speedY;
      checkHit(fireball, data);

      if (fireball.isItemOnScreen(screen)) {
        fireball.render(screen)
      } else {
        const index = data.fireballs.findIndex((el) => el === fireball);
        data.fireballs.splice(index, 1);
      }
    })
  }
  
}

export {changesFireball};