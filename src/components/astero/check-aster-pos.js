const checkAsterPos = (aster, width, height) => {
  if (!(aster.x >= width + aster.width || aster.x < -aster.width) && 
  !(aster.y >= height + aster.height)) {
    return true;
  } else {
    return false;
  }
}

export {checkAsterPos};