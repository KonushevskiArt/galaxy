import menu from '../../sound/menu.mp3';
import game from '../../sound/game.mp3';
import gameover from '../../sound/gameover.mp3';
import blaster from '../../sound/blaster.mp3';
import hit from '../../sound/hit.mp3';
import explode from '../../sound/explode.mp3';
import shipSound from '../../sound/shipSound.mp3';

const images = {
  menu,
  game,
  gameover,
  blaster,
  hit,
  explode,
  shipSound
};

const audioLoader = async () => {
  const result = {};
  const promises = [];

  for (let name in images) {
    const promise = new Promise((resolve) => {
      const audio = document.createElement('audio');
      audio.src = images[name];
      result[name] = audio;
      resolve();
    })
    promises.push(promise);
  }

  await Promise.all(promises);
  
  return result;
}

export {audioLoader};