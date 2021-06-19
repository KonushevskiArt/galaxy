
const renderSpace = (screen, imgs) => {
  const {space} = imgs,
        {height, width} = screen;
        
  screen.drawImg(space, 0, 0, width, height)
}
export {renderSpace};