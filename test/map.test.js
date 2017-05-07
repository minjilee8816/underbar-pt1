const _ = require('../underbar');


describe('map()', () => {
  it('maps every numbers in the array of numbers to thier square', () => {
    const arr = [ 1, 2, 3 ]; 
    const mapArr = _.map(arr, el => Math.pow(el,2)); 
    expect(mapArr).toEqual([1, 4, 9]);
  });

  it('maps every string numbers in the array to type of numbers', () => {
    const arr1 = [ '1', '2', '3' ];
    const mapArr1 = _.map(arr1, el => Number(el)); 
    expect(mapArr1).toEqual([ 1, 2, 3 ]);
  });

  it('maps the object in the array to null', () => {
    const arr2 = [ 1, 2, 3];
    const mapArr2 = _.map(arr2, el => null);
    expect(mapArr2).toEqual([null, null, null]);
  });

});
