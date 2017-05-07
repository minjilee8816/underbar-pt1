const _ = require('../underbar');



describe('filter()', () => {
  it('filters an array to positive numbers', () => {
    const arr = [ 1, 3, -1, "hello", "tree"]; 
    expect(_.filter(arr, el => el > 0 )).toEqual([1,3]);
  });

  it('filters an object only string values', () => {
    const fruits = {
      name: 'apple',
      country: 'Brazil',
      quantity: 19,
      weight: 102,
    };
    expect(_.filter(fruits, (el) => typeof el === 'string')).toEqual(['apple', 'Brazil']);
  });
});