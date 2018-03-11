import {getRandomInt} from './get-random-int';

describe('helpers', () => {
  test('getRandomInt', () => {
    const int = getRandomInt({length: 10, offset: 10})();
    expect(int).toBeGreaterThanOrEqual(10);
    expect(int).toBeLessThanOrEqual(20);
  });
});
