import { Fireball } from '../components/Fireball/Fireball.js';

const checkHit = (fireball, data) => {
    
  const indexHitAster = data.asteros.findIndex((aster) => {
    return (fireball.x <= (aster.x + aster.width) && fireball.x >= aster.x) &&
           (fireball.y <= (aster.y + aster.height) && fireball.y >= aster.y)
  });
  if (indexHitAster !== -1) {
    const indexFireball = data.fireballs.findIndex((el) => el.id === fireball.id );
    const aster = data.asteros[indexHitAster];
    aster.speedY -= Math.abs(3 - (aster.height / 20));
    aster.speedRotate = aster.speedRotate > 0 ?
      aster.speedRotate - 0.2 : aster.speedRotate + 0.2;
    data.hitedAsters.push(aster);

    if (data.audioHit.paused) {
      data.audioHit.play();
    } else {
      data.audioHit.currentTime = 0;
    }    

    const isRestHelth = aster.reduceHelth(data.fireballs[indexFireball]);
    if (isRestHelth) {
      data.score +=  aster.height;

      if (data.audioExplode.paused) {
        data.audioExplode.play();
      } else {
        data.audioExplode.currentTime = 0;
      }

        data.explodedAsters.push(data.asteros[indexHitAster]);

      data.asteros.splice(indexHitAster, 1);
    }
    data.fireballs.splice(indexFireball, 1);
  }
}

const changesFireball = (data, imgs, screen) => {
  
  if (screen.isFire && data.ship.ammo > 0) {
    const fireBall = new Fireball(imgs, data.ship.x + (data.ship.width / 2.2), data.ship.y);
    data.ship.ammo -= 1;

    if (data.audioBlaster.paused) {
      data.audioBlaster.play();
    } else {
      data.audioBlaster.currentTime = 0;
    }
    
    data.fireballs.push(fireBall);
    
    fireBall.render(screen);
    screen.isFire = false;
  }
  screen.isClick = false;

  if(data.ship) {
    screen.print(40, screen.height - 40, `ammo ${data.ship.ammo}`);
  }
  
  if (data.fireballs.length > 0) {
    data.fireballs.forEach((fireball) => {
      fireball.y -= fireball.speedY;
      
      checkHit(fireball, data, screen);

      if (fireball.isItemOnScreen(screen)) {
        fireball.render(screen);
      } else {
        const index = data.fireballs.findIndex((el) => el === fireball);
        data.fireballs.splice(index, 1);
      }
    })
  }
  
}

export {changesFireball};