const _ = require('../underbar');

describe('some()', () => {
  it('returns if any number is postive number', () => {
    const arr = [ 1, -1, -2];
    expect(_.some(arr, el => el > 0)).toBe(true);
  });

  it('returns ture if any element type is string', () => {
    const arr = [ 'minji', 1, 3 ]; 
    expect(_.some(arr, el => typeof el === 'string')).toBe(true);
  });

});