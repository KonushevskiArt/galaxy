import { imageLoader } from './js/utils/image-loader';
import { audioLoader } from './js/utils/audio-loader';
import './scss/index.scss';

import {Game} from './js/game';

window.addEventListener('load', async () => {
  try {
    if (navigator.serviceWorker) {
      await navigator.serviceWorker.register('./sw.js');
    }
  } catch (error) {
    console.log('Service worker register fail');
  }
});

const game = new Game('.app');

imageLoader()
.then((data) => {
  game.loadedImgs = data;
  return audioLoader();
})
.then((data) => {
  game.loadedAudio = data;
  game.showMenu();
})
