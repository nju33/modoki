import {yubenbango} from '.';

describe('yubenbango', () => {
  test('fn', () => {
    expect(yubenbango()).toEqual(expect.stringMatching(/\d{3}-\d{4}/));
  });
});
