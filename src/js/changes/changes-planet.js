import { Planet } from '../components/Planet/Planet.js';
const currentCountPlanet = 1;

const changesPlanet = (data, imgs, screen) => {
  const {height, width} = screen;
  if (data.planets.length < currentCountPlanet) {
    const planetOne = new Planet(screen, imgs);
    data.planets.push(planetOne); 
  } 

  if (data.stars.length > 0) {
    data.planets.forEach((planet) => {
      planet.y += planet.speedY;

      if (planet.isItemOnScreen(screen)) {
        planet.render(screen);
      } else {
        const index = data.planets.findIndex((planetOne) => planet === planetOne);
        data.planets.splice(index, 1);
      }

    })
    
  }

}

export {changesPlanet};