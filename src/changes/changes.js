import { changesAstero } from "./changes-astero";
import {renderSpace} from '../components/space/render-space';


const changes = (data, imgs, screen) => {
    

  renderSpace(screen, imgs);

  changesAstero(data, imgs, screen);
  
}

export {changes};