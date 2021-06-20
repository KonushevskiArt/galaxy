import { Ship } from '../components/Ship/Ship.js';

const moveShip = (ship, screen) => {
  const move = (ship, axis, sign) => {
    sign === '+' ? ship[axis] += ship.speed : ship[axis] -= ship.speed;
  } 
    // (- 5, + 5) to remove bounce of ship
  if (ship.x < screen.mouseX - (ship.width / 2) - 5) {
    move(ship, 'x', '+');
  } else if (ship.x  > screen.mouseX - (ship.width / 2) + 5) {
    move(ship, 'x', '-');
  }

  if (ship.y  < screen.mouseY - (ship.width / 2) - 5) {
    move(ship, 'y', '+');
  } else if (ship.y  > screen.mouseY - (ship.width / 2) + 5) {
    move(ship, 'y', '-');
  }
}

const changesShip = (data, imgs, screen) => {
  const {height, width} = screen;

  if (data.ship === null) {
    const ship = new Ship(imgs, screen);
    data.ship = ship;
    moveShip(data.ship, screen);
    ship.render(screen);
  } else {
    moveShip(data.ship, screen);
    data.ship.render(screen);
  } 

}
  export {changesShip};