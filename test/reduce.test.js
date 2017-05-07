const _ = require('../underbar');


describe('reduce()', () => {
  it('reduces an array of numbers to a multiplication with an explicit initial value for the accumulator', () => {
    const nums = [ 1, 2, 3 ]; 
    const result = _.reduce(nums, (acc, num) => acc * num, 1);
    expect(result).toEqual(6); 
  });

  it('reduces an array of numbers to a multiplication, without an explicit initial value for the accumulator', () => {
    const nums = [ 1, 2, 3 ];
    const result = _.reduce(nums, (a, b) => a * b);
    expect(result).toEqual(6);
  });
});