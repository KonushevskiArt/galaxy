import { EnemyShip } from '../components/EnemyShip/EnemyShip.js';
import { shotAnima } from "../animation/shot/shot.js";

const changesEnemyShip = (data, imgs, screen) => {
  const {height, width} = screen;

  if (data.enemyShip === null) {
    const enemyShip = new EnemyShip(imgs, screen);
    data.enemyShip = enemyShip;
    
    data.enemyShip.render(screen);
  } else {
    
    if (data.enemyShip.isChangedCourse === false) {
      data.enemyShip.autopilot(screen);
    }
    data.enemyShip.moveShip(data.enemyShip.targetX, data.enemyShip.targetY);

    data.enemyShip.checkHit(data.asteros, data, screen);
    data.enemyShip.checkHit(data.fireballs, data, screen);

    data.enemyShip.render(screen);

    shotAnima(data, screen);
  } 

}
  export {changesEnemyShip};