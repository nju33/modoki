import {Generator} from '../Generator';
import {todofuken} from '../todofuken';
import {sei} from '../namae/sei';
import {getArrayBy, getRandomInt} from '../helpers';

class JusyoGenerator implements Generator {
  private readonly sei: string[] = sei;

  private getSei(): string {
    return this.sei[Math.floor(Math.random() * this.sei.length - 1)];
  }

  generate() {
    const prefecture = todofuken();
    const city = getArrayBy(
      this.getSei.bind(this),
      getRandomInt({length: 2, offset: 1})()
    )
      .map((chunk, idx) => {
        switch (idx) {
          case 0:
            return `${chunk}市`;
          case 1:
            return `${chunk}町`;
          case 2:
            return `${chunk}村`;
          default:
            throw new Error('err');
        }
      })
      .join('');
    const chome = getArrayBy(
      getRandomInt({length: 99}),
      getRandomInt({length: 3, offset: 1})()
    ).join('-');

    return `${prefecture}${city}${chome}`;
  }
}

const jusyoGenerator = new JusyoGenerator();

export const jusyo = () => jusyoGenerator.generate();
