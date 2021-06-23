import { Fireball } from '../components/Fireball/Fireball.js';


const checkHit = (fireball, data) => {
    
  const indexHitAster = data.asteros.findIndex((aster) => {
    return (fireball.x <= (aster.x + aster.width) && fireball.x >= aster.x) &&
           (fireball.y <= (aster.y + aster.height) && fireball.y >= aster.y)
  });
  if (indexHitAster !== -1) {
    const indexFireball = data.fireballs.findIndex((el) => el.id === fireball.id );
    const aster = data.asteros[indexHitAster];
    aster.speedY -= 0.2;
    aster.speedRotate = aster.speedRotate > 0 ?
     aster.speedRotate - 0.2 : aster.speedRotate + 0.2;
    const isrRestHelth = aster.reduceHelth(data.fireballs[indexFireball]);
    if (isrRestHelth) {
      data.score +=  aster.height;
      data.asteros.splice(indexHitAster, 1);
    }
    data.fireballs.splice(indexFireball, 1);
  }
}


const changesFireball = (data, imgs, screen) => {
    

  const {height, width} = screen;
  const lastShot = data.timeLastShot ? data.timeLastShot - new Date().getTime() - 2 : true;

  if (screen.isClick && data.ship.ammo > 0) {
    const fireBall = new Fireball(imgs, data.ship.x + (data.ship.width / 2.2), data.ship.y);
    data.ship.ammo -= 1;
    
    data.fireballs.push(fireBall);
    
    fireBall.render(screen);
    screen.isClick = false;
  }
  screen.isClick = false;

  if(data.ship) {
    screen.print(40, screen.height - 40, `ammo ${data.ship.ammo}`);
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