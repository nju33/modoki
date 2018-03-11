import {Generator} from '../generator';
import {namae} from '../namae';
import {denwabango} from '../denwabango';
import {yubinbango} from '../yubinbango';

class PersonaGenerator implements Generator {
  generate() {
    return {
      name: namae(),
      phoneNumber: denwabango(),
      zipcode: yubinbango(),
    }
  }
}

const personaGenerator = new PersonaGenerator()

export const persona = () => personaGenerator.generate();
