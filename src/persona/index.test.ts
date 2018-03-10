import {persona} from '.';

describe('persona', () => {
  test('fn', () => {
    expect(Object.keys(persona()))
      .toEqual(expect.arrayContaining([
        'name',
        'zipcode'
      ]));
  });
});
