const _ = require('../underbar');


describe('indexOf()', () => {
  it('returns the index of the last element at the array', () => {
    expect(_.indexOf([ 1, 2, 3 ], 3)).toBe(2);
  });

  it('returns the index of the first element at the array', () => {
    expect(_.indexOf([ 'coding', 'is', 'fun'], 'coding')).toBe(0);
  });

  it('returns -1 if there is no element in the array',() => {
    expect(_.indexOf([ 1, 2, 'minji', 'coding' ], 'apple')).toBe(-1);
  });

  it('starts searching at the given offset', () => {
    expect(_.indexOf(['hi', 'hello', 'cat', 'apple', 'cup', 'cup'], 'cup', 2)).toBe(4);
  });
});
