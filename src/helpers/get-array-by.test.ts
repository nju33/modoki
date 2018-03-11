import {getArrayBy} from './get-array-by';

describe('helpers', () => {
  test('getArrayBy', () => {
    const arr = getArrayBy(() => 1, 5);
    expect(arr.length).toBe(5);
    expect(arr).toEqual(expect.arrayContaining([1]));
  });
});
