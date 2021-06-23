import { imageLoader } from './js/utils/image-loader';
import './scss/index.scss';

import {Game} from './js/game';

const game = new Game('.app');

imageLoader(game.data.images).then((data) => {
  game.loadedImgs = data;
  game.showMenu();
})
