import {checkAsterPos} from './check-aster-pos';

const renderAstero = (screen, asterImg, aster) => {
  const {height, width} = screen;

  if (checkAsterPos(aster, width, height)) {
    screen.drawImg(asterImg, aster.x, aster.y, aster.height, aster.width);
  } else {
    
  }
}
export {renderAstero};