const _ = require('../underbar'); 


describe('first()', () => {
  it('returns the first number of the array', () => {
    const arr = [1, 2, 3];
    expect(_.first(arr, 1)).toBe(1);
  });

  it('returns the first string element of the array', () => {
    const arr1= ['coding', 'is', 'fun']; 
    expect(_.first(arr1,1)).toBe('coding');
  });

  it('returns the first second element of the array', () => {
    const arr2 = [2, 'hi', 33, '123']; 
    expect(_.first(arr2, 2)).toEqual([2,'hi']);
  });

  it('returns whole elements of the array', () => {
    const arr3 =[ 1, 2, 3, 4, 5 ];
    expect(_.first(arr3, 5)).toEqual([1,2,3,4,5]);
  });

});