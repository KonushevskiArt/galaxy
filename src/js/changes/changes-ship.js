import { Ship } from '../components/Ship/Ship.js';
import { BigShip } from '../components/Big-ship/BigShip.js';


const changesShip = (data, imgs, screen) => {
  const {height, width} = screen;

  if (data.ship === null) {
    const ship = new Ship(imgs, screen);
    const bigShip = new BigShip(imgs, screen);
    data.ship = ship;
    data.bigShip = bigShip;
    
    data.ship.moveShip(screen.mouseX, screen.mouseY);
    ship.render(screen);
    bigShip.render(screen);
  } else {
    if (data.bigShip.isAutopilot === false) {
      data.bigShip.autopilot(screen);
    }
    data.bigShip.moveShip(data.bigShip.targetX, data.bigShip.targetY);
    data.ship.moveShip(screen.mouseX, screen.mouseY);
    data.ship.checkHit(data.asteros, data);
    data.ship.checkRepeir(data);
    data.bigShip.checkHit(data.asteros, data);
    screen.print(20, 55, `helth Ship  ${data.ship.helth}`);
    screen.print(20, 30, `helth Main Ship  ${data.bigShip.helth}`);
    data.bigShip.render(screen);
    data.ship.render(screen);
  } 

}
  export {changesShip};