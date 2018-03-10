import {Generator} from '../Generator';
import {sei} from './sei';
import {mei} from './mei';

class NamaeGenerator implements Generator {
  private readonly sei: string[] = sei;
  private readonly mei: [string[], string[]] = mei;

  private getSei(): string {
    return this.sei[Math.floor(Math.random() * this.sei.length - 1)];
  }

  private getMei(): string {
    const sex = Math.round(Math.random());
    const meiList = this.mei[sex];

    return meiList[Math.floor(Math.random() * meiList.length - 1)];
  }

  generate() {
    const acc: [string, string] = [
      this.getSei(),
      this.getMei(),
    ];

    return acc.join(' ');

  }
}

const namaeGenerator = new NamaeGenerator();

export const namae = () => namaeGenerator.generate();
