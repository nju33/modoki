import {denwabango} from '.';

describe('denwabango', () => {
  test('fn', () => {
    const result = denwabango();
    expect(result.length).toBeGreaterThanOrEqual(11);
    expect(result).toEqual(expect.any(String));
  });
});
