class DataGame{
  constructor() {
    this.aster = {
      x: 100,
      y: 100,
      speedX: 4,
      speedY: 2,
      reitX: 1.001,
      reitY: 1.001,
      height: 50,
      width: 50
    };

    this.images = {
      astero: '../img/asteroid1.svg',
      spaceship: '../img/spaceship.svg',
      ufo: '../img/ufo1.svg',
      space: '../bg/space.jpg'
    };
    
    this.asteros = [];

    this.gameTime = 0;

    this.currnetCountAsteros = 5;
    this.timeAppearAsteros = 3;
  }
}

export {DataGame};