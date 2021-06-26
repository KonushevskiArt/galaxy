const createSpriteMap = (width, height, countX, countY) => {
  const widthEl = Math.floor(width / countX);
  const heightEl = Math.floor(height / countY);
  const res = []

  for (let col = 0; col < height - countY; col += heightEl) {
    for (let row = 0; row < width - countY; row += widthEl) {
      const item = [row, col, widthEl, heightEl];
      res.push(item)
    }
  }

  return res;
}

export {createSpriteMap};
