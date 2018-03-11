import {Generator} from '../generator';
import {getArrayBy, getRandomInt} from '../helpers';

class DenwabangoGenerator implements Generator {
  private readonly generateHyphenIndex = getRandomInt({length: 2, offset: 3});
  private readonly generateDigitNumber = getRandomInt({length: 9});

  private generateBlockArray = () => {
    return getArrayBy(
      this.generateDigitNumber,
      this.generateHyphenIndex()
    );
  }

  generate() {
    return getArrayBy(this.generateBlockArray, 3)
      .map(block => block.join(''))
      .join('-');
  }
}

const denwabangoGenerator = new DenwabangoGenerator();

export const denwabango = () => denwabangoGenerator.generate();
