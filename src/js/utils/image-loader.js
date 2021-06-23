import gameover from '../../bg/gameover-min.jpg';
import loading from '../../bg/loading-min.jpg';
import mainmenu from '../../bg/mainmenu-min.jpg';
import space from '../../bg/space.jpg';
import astero from '../../img/asteroid1.png';
import astero2 from '../../img/asteroid2.png';
import astero3 from '../../img/asteroid3.png';
import astero4 from '../../img/asteroid4.png';
import astero5 from '../../img/asteroid5.png';
import astero6 from '../../img/asteroid6.png';
import spaceship from '../../img/spaceship.png';
import bigspaceship from '../../img/bigspaceship.png';
import satelite from '../../img/satelite.png';
import satelite2 from '../../img/satelite2.png';
import fireball from '../../img/fireball.svg';

const images = {
  astero,
  astero2,
  astero3,
  astero4,
  astero5,
  astero6,
  satelite,
  satelite2,
  spaceship,
  bigspaceship,
  fireball,
  space,
  mainmenu,
  loading,
  gameover
};

const imageLoader = async () => {
  const result = {};
  const promises = [];

  for (let name in images) {
    const promise = new Promise((resolve) => {
      const img = document.createElement('img');
      img.src = images[name];
      result[name] = img;
      resolve();
    })
    promises.push(promise);
  }

  await Promise.all(promises);
  
  return result;
}

export {imageLoader};