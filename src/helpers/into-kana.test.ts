import {intoKana} from './into-kana';

describe('helpers::intoKana', () => {
  test('will get アカサ by あかさ', () => {
    expect(intoKana('あかさ')).toBe('アカサ');
  });
});
