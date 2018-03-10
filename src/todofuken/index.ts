import {Generator} from '../generator';
import {list} from './list';

class TodofukenGenerator implements Generator {
  generate() {
    return list[Math.floor(Math.random() * list.length - 1)];
  }
}

const todofukenGenerator = new TodofukenGenerator();

export const todofuken = () => todofukenGenerator.generate();
