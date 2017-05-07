const _ = require('../underbar');

describe('identity()', () => {

  it('returns an array of given an array', () => {
    const array = ["Minji", "HR"];
    expect(_.identity(array)).toBe(array); 
  }); 

  it('returns the number of given a number', () =>{
    expect(_.identity(11)).toBe(11);
  });

  it('returns null of given null', () => {
    expect(_.identity(null)).toBe(null);
  }); 

  it('returns an object of given an object', () => {
    const obj = { firstName : "Minji", 
                  lastName : "Lee"}; 
    expect(_.identity(obj)).toBe(obj);
  });

  it('returns a string of given a string', () =>{
    expect(_.identity("min")).toBe("min");
  });

});  