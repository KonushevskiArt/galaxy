import {Screen} from './screen';
import {DataGame} from './data-game';
import {changes} from './changes/changes';
import {Menu} from './pages/Menu.js';
import {Canvas} from './pages/Canvas.js';
import {Loading} from './pages/Loading.js';
import {GameOver} from './pages/GameOver.js';

class Game {
  constructor(selector) {
    this.loadedImgs;
    this.container = document.querySelector(selector);
    this.data = null;
    this.screen = null;
    this.data = new DataGame();
  };
  gameLoop = () => {
    if (this.data.isGameOver) {
      this.gameOver();
    } else {
      changes(this.data, this.loadedImgs, this.screen);
      this.reqAnim = requestAnimationFrame(this.gameLoop);
   }
  }
  
  startGame = () => {
    this.container.innerHTML = '';
    this.container.appendChild(Canvas());
    this.screen = new Screen();
    
    this.gameTimeId = setInterval(() => {
      this.data.gameTime += 1;
      this.data.score += 50;
      this.data.currnetCountAsteros += 0.1;
      }, 1000)
    requestAnimationFrame(this.gameLoop);
  }
  showMenu = () => {
    this.container.innerHTML = '';
    this.container.appendChild(Menu(this.loading, this.loadedImgs.mainmenu));
  }
  loading = () => {
    this.container.innerHTML = '';
    this.container.appendChild(Loading(this.loadedImgs.loading));
    setTimeout(() => {
      this.startGame();
    }, 2000);
  }
  gameOver = () => {
    cancelAnimationFrame(this.reqAnim);
    clearInterval(this.gameTimeId);
    this.container.innerHTML = '';
    this.container.appendChild(GameOver(this.data, this.restartGame, this.loadedImgs.gameover));
  }
  restartGame = () => {
    this.showMenu();
  } 
  
}

export {Game};