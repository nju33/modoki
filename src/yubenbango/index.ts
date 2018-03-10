import {Generator} from '../generator';

class YubenbangoGenerator implements Generator {
  generate() {
    const acc: (string | number)[] = [];
    for (let i = 0; i < 7; i++) {
      acc.push(Math.round((Math.random() * 9)));
    }

    acc.splice(3, 0, '-');

    return acc.join('');
  }
}

const yubenbangoGenerator = new YubenbangoGenerator();

export const yubenbango = () => yubenbangoGenerator.generate();
