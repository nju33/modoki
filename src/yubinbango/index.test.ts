import {yubinbango} from '.';

describe('yubenbango', () => {
  test('fn', () => {
    expect(yubinbango()).toEqual(expect.stringMatching(/\d{3}-\d{4}/));
  });
});
