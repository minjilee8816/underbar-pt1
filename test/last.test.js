const _ = require('../underbar');

describe('last()', () => {
  it('returns the last element of the array', () => {
    const arr = [ 1, 2, 3 ];
    expect(_.last(arr)).toBe(3); 
  });

  it('returns the last two elements of the array', () => {
    const arr1 = [ 1, 2, 3, 4 ];
    expect(_.last(arr1, 2)).toEqual([3, 4]); 
  });

  it('returns all numbers of the array', () => {
    const arr2 = [ 1, 2, 3, 4, 5];
    expect(_.last(arr2, 5)).toEqual([ 1, 2, 3, 4, 5]);
  })

});
