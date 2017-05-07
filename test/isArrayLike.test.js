const _ = require('../underbar');



describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike(["hello", "apple", "google"])).toBe(true); 
  });

  it('returns true for an array-like object', () => {
    const obj = {
      length : 1,
      apple : 3
    }
    expect(_.isArrayLike(obj)).toBe(true);
  });

  it('returns false if there is no length keys in the object', () => {
    const obj = {
      apple : 3,
      banana : 4
    }
    expect(_.isArrayLike(obj)).toBe(false);
  });
});