import {sei} from './sei';
import {mei} from './mei';

class NamaeGenerator {
  private readonly sei: string[] = sei;
  private readonly mei: [string[], string[]] = mei;

  generate(): string {
    const sei = this.sei[Math.floor(Math.random() * this.sei.length - 1)];
    const sex = Math.round(Math.random());
    const meiList = this.mei[sex];
    const mei = meiList[Math.floor(Math.random() * meiList.length - 1)];

    return `${sei} ${mei}`;

  }
}

const namaeGenerator = new NamaeGenerator();

export const namae = () => {
  return namaeGenerator.generate();
}
