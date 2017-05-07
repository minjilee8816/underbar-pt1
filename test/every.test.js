const _ = require('../underbar');


describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('returns true if the elements in the array are intege numbers',() => {
      const nums = [ 1, 2, 3 ];
      expect(_.every(nums, el => parseInt(el) === el )).toBe(true);
    });

    it('returns false if it is not all positive numbers', () => {
      const nums = [ -1, 2, 3 ]; 
      expect(_.every(nums, el => el > 0 )).toBe(false);
    }); 

    it('will return true if no callback is supplied', () => {
      const nums = [ 1, 2, 3 ];
      expect(_.every(nums)).toBe(true);
    });
  });
});