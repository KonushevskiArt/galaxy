class DataGame{
  constructor() {
    
    this.images = {
      astero: '../img/asteroid1.png',
      astero2: '../img/asteroid2.png',
      astero3: '../img/asteroid3.png',
      astero4: '../img/asteroid4.png',
      astero5: '../img/asteroid5.png',
      astero6: '../img/asteroid6.png',
      satelite: '../img/satelite.png',
      spaceship: '../img/spaceship.png',
      bigspaceship: '../img/bigspaceship.png',
      fireball: '../img/fireball.svg',
      ufo: '../img/ufo1.svg',
      space: '../bg/space.jpg',
    };
    
    this.asteros = [];
    this.fireballs = [];
    this.space = null;
    this.ship = null;
    this.bigShip = null;
    this.gameTime = 0;
    this.timeLastShot = null;
    this.score = 0;

    this.currnetCountAsteros = 3;
    this.timeAppearAsteros = 3;
  }
}

export {DataGame};