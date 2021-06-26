let _isAnima = false;
let _currentPart = 0;

const partsImg = [
  [0, 0, 150, 225],
  [150, 0, 150, 225],
  [300, 0, 150, 225],
  [0, 225, 150, 225],
  [150, 225, 150, 225],
  [300, 225, 150, 225]
]

const shotAnima = (data, screen) => {
  
    const {ship} = data;
    if (screen.isClick && data.ship.ammo !== 0) {
      _isAnima = true;
    }
    
    if (_isAnima) {
      setTimeout(() => _isAnima = false, 100);
      
        screen.context.drawImage(ship.imgShot, ...partsImg[_currentPart], (ship.x + 16 ), (ship.y - ship.height / 2), (ship.width / 2), (ship.height / 2));
      setTimeout(() => {
        _currentPart = (_currentPart === partsImg.length -1 ? _currentPart - (partsImg.length - 1) : (_currentPart += 1)); 
      }, 50);
    }
      
}
export {shotAnima};

