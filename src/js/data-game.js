class DataGame{
  constructor() {
    
    this.asteros = [];
    this.stars = [];
    this.planets = [];
    this.fireballs = [];
    this.enemyShip = null;
    this.space = null;
    this.ship = null;
    this.bigShip = null;
    this.gameTime = 0;
    this.score = 0;
    this.explodedAster = null;
    this.explodedAsters = [];
    this.hitedAsters = [];
    this.fireballSize = 10;//?

    this.currnetCountAsteros = 3;

    this.audioHit;
    this.audioExplode;
    this.audioBlaster;
    this.audioShipSound;
  }
}

export {DataGame};