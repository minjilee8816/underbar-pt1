const _ = require('../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [ 1, 2, 3 ]; 
    expect(_.contains(nums, 2)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [ 1, 2, 3 ];
    expect(_.contains(nums, 6)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const fruits = {
      'fruit': 'apple',
      'fruit': 'banana',
      'fruit': 'kiwi',
      'fruit': 'melon'
    };
    expect(_.contains(fruits, 'melon')).toBe(true);
  });

  it('returns true if the target value is among the values of an object', () => {
    const fruits = {
      'fruit': 'apple',
      'fruit': 'banana',
      'fruit': 'kiwi',
      'fruit': 'melon'
    };
    expect(_.contains(fruits, 'orange')).toBe(false);
  });
});