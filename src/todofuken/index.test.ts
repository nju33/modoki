import {todofuken} from '.';
import {list} from './list';

describe('todofuken', () => {
  test('fn', () => {
    const result = todofuken();
    expect(result).toEqual(expect.any(String));
    expect(list).toEqual(expect.arrayContaining([result]));
  });
});
