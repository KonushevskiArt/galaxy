import {Screen} from './screen';
import {DataGame} from './data-game';
import {imageLoader} from './utils/image-loader';
import {changes} from './changes/changes';

class Game {
  constructor() {
    this.screen = new Screen();
    this.data = new DataGame();
    this.loadedImgs;
    this.gameLoop = this.gameLoop.bind(this);

  };
  gameLoop() {
    changes(this.data, this.loadedImgs, this.screen);
    requestAnimationFrame(this.gameLoop);
  }
  startGame() {
    imageLoader(this.data.images).then((data) => {
      this.loadedImgs = data;
      this.gameTime = setInterval(() => {
        this.data.gameTime += 1;
        // this.data.currnetCountAsteros += 0.1;
        }, 1000)
      requestAnimationFrame(this.gameLoop);
    })
  }
}

export {Game};