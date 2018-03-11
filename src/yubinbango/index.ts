import {Generator} from '../generator';
import {getArrayBy, getRandomInt} from '../helpers';

class YubinbangoGenerator implements Generator {
  generate() {
    const arr = getArrayBy(getRandomInt({length: 9}), 7);
    (arr as (string | number)[]).splice(3, 0, '-');

    return arr.join('');
  }
}

const yubinbangoGenerator = new YubinbangoGenerator();

export const yubinbango = () => yubinbangoGenerator.generate();
