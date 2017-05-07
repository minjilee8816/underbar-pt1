const _ = require('../underbar');

describe('reject()', () => {
  it('rejects positive numbers in the array', () => {
    const arr = [ 'hello', 3, 6, 10, -10 ];
    expect(_.reject(arr, el => el > 0)).toEqual(['hello', -10]);
  });

  it('rejects string type of values in the object', () => {
    const obj = {
      name : "minji",
      age : 27,
      hobbies : "hiking", 
      drink : null
    }
    expect(_.reject(obj, (el) => typeof el === "string")).toEqual([27, null]);
  });
});