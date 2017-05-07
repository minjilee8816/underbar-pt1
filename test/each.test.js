const _ = require('../underbar');


describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = ['cup', 'water', 'food']; 
    let count = 0; 
    _.each(arr, function (ele, i, arr) {
      expect(ele).toEqual(arr[i]); 
      count ++
    });
    expect(count).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const obj = {
      length : 4,
      name : 'minji',
      fruit : ['apple', 'banana', 'kiwi'],
      animal : ['dog', 'cat']
    }
    let count = 0;
    _.each(obj, function (ele, i, arr) {
      expect(ele).toEqual(arr[i]); 
      count ++; 
    });
    expect(count).toBe(4);
  });
  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      name : 'minji',
      fruit : ['apple', 'banana', 'kiwi'],
      animal : ['dog', 'cat']
    };
    let count = 0; 
    _.each(obj, function (value, key, obj) {
      expect(value).toEqual(obj[key]);
      count ++
    });
    expect(count).toBe(3);
  }); 

});


