import { imageLoader } from './js/utils/image-loader';
import { audioLoader } from './js/utils/audio-loader';
console.log('asd')
import './scss/index.scss';

import {Game} from './js/game';

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
