import {intoKana} from './into-kana';

describe('helpers::intoKana', () => {
  test('will get ア by あ', () => {
    expect(intoKana('あ')).toBe('ア');
  });
});
