class DataGame{
  constructor() {
    
    this.asteros = [];
    this.fireballs = [];
    this.space = null;
    this.ship = null;
    this.bigShip = null;
    this.gameTime = 0;
    this.timeLastShot = null;
    this.score = 0;
    this.explodedAster = null;
    this.explodedAsters = [];
    this.hitedAsters = [];

    this.currnetCountAsteros = 3;
    this.timeAppearAsteros = 3;

    this.audioHit;
    this.audioExplode;
    this.audioBlaster;
    this.audioShipSound;
  }
}

export {DataGame};