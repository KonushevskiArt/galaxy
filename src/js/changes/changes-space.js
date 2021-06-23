import {Space} from '../components/space/Space.js';

const changesSpace = (data, imgs, screen) => {
  const {height, width} = screen;

  if (data.space === null) {
    
    const space = new Space(imgs, width, height);
    data.space = space;
    data.space.render(screen);

  } else {
    data.space.render(screen);
  }
    
}

export {changesSpace};