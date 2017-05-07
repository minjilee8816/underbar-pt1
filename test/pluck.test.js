const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just names, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'name'); 
    expect(result).toEqual(['Harriet', 'Lazarus', 'Bethany']);
  });

  it('returns an array of fruits quantity value, given an array of fruits object', () => {
    const fruits = [
      { name : 'apple', quantity : 10 },
      { name : 'kiwi', quantity : 8 },
      { name : 'peach', quantity : 2 },
      { name : 'mange', quantity : 5 },
      { name : 'watermelon', quantity : 1 }
    ];
    const result = _.pluck(fruits, 'quantity');
    expect(result).toEqual([10, 8, 2, 5, 1]); 
  });

  it('returns an array of name, given an array of country objects', () => {
    const country = [
      { name : 'USA', continent : 'North America'},
      { name : 'Canada', continent : 'North America'},
      { name : 'Mexico', continent : 'North America'},
    ];
    const name = _.pluck(country, 'name');
    expect(name).toEqual(['USA', 'Canada', 'Mexico']);
  });
});