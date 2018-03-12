import {jusyo} from '.';

describe('jusyo', () => {
  test('fn', () => {
    expect(jusyo()).toEqual(expect.any(String));
  });
});
