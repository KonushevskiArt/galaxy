class DataGame{
  constructor() {
    
    this.images = {
      astero: '../img/asteroid1.svg',
      astero2: '../img/asteroid2.svg',
      astero3: '../img/asteroid3.svg',
      astero4: '../img/asteroid4.svg',
      astero5: '../img/asteroid5.svg',
      astero6: '../img/asteroid6.svg',
      spaceship: '../img/spaceship.svg',
      fireball: '../img/fireball.svg',
      ufo: '../img/ufo1.svg',
      space: '../bg/space.jpg',
    };
    
    this.asteros = [];
    this.fireballs = [];
    this.space = null;
    this.ship = null;
    this.gameTime = 0;
    this.timeLastShot = null;

    this.currnetCountAsteros = 5;
    this.timeAppearAsteros = 3;
  }
}

export {DataGame};