import {Generator} from '../generator';
import {namae} from '../namae';
import {yubenbango} from '../yubenbango';

class PersonaGenerator implements Generator {
  generate() {
    return {
      name: namae(),
      zipcode: yubenbango(),
    }
  }
}

const personaGenerator = new PersonaGenerator()

export const persona = () => personaGenerator.generate();
