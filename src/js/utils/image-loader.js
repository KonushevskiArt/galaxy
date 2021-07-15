import gameover from '../../bg/gameover-min.jpg';
import loading from '../../bg/loading-min.jpg';
import mainmenu from '../../bg/mainmenu-min.jpg';
import space from '../../bg/black.svg';
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
import fireMin from '../../img/fire.png';
import shot from '../../img/shot.png';
import explode from '../../img/explode.png';
import astero8 from '../../img/astero8.png';
import hit from '../../img/hit.png';
import star1 from '../../img/star1.png';
import star2 from '../../img/star2.png';
import star3 from '../../img/star3.png';
import star4 from '../../img/star4.png';
import star5 from '../../img/star5.png';
import planet1 from '../../img/planet1.png';
import planet2 from '../../img/planet2.png';
import planet3 from '../../img/planet3.png';
import planet4 from '../../img/planet4.png';
import planet5 from '../../img/planet5.png';
import enemy from '../../img/enemy.png';

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
  gameover,
  fireMin,
  shot,
  explode,
  astero8,
  hit,
  star1,
  star2,
  star3,
  star4,
  star5,
  planet1,
  planet2,
  planet3,
  planet4,
  planet5,
  enemy,
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