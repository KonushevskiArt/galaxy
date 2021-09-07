import { Ship } from '../components/Ship/Ship.js';
import { BigShip } from '../components/Big-ship/BigShip.js';
import { shotAnima } from "../animation/shot/shot.js";

const changesShip = (data, imgs, screen) => {
  const {height, width} = screen;

  if (data.ship === null) {
    const ship = new Ship(imgs, screen);
    const bigShip = new BigShip(imgs, screen);
    data.ship = ship;
    data.bigShip = bigShip;
    ship.render(screen);
    bigShip.render(screen);
  } else {
    
    if (data.bigShip.isChangedCourse === false) {
      data.bigShip.autopilot(screen);
    }
    data.bigShip.moveShip(data.bigShip.targetX, data.bigShip.targetY);
    data.ship.manageShip(screen.pressedKeys, screen.width, screen.height);

    const wasHitOnTheShip = data.ship.checkHit(data.asteros, data, screen);

    if (wasHitOnTheShip && window.navigator.vibrate) {
      window.navigator.vibrate([100, 50, 100, 50, 100, 50, 100]);
    }

    data.bigShip.checkHit(data.asteros, data, screen);
    data.ship.checkRepeir(data);

    screen.print(20, 55, `helth Ship  ${data.ship.helth}`);
    screen.print(20, 30, `helth Main Ship  ${data.bigShip.helth}`);
    data.bigShip.render(screen);
    data.ship.render(screen);

    data.audioShipSound.play();

    shotAnima(data, screen);
  } 

}
  export {changesShip};