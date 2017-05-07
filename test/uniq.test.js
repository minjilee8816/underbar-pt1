const _ = require('../underbar');


describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const arr = [ 2, 4, 2, 4, 2, 4 ];
    expect(_.uniq(arr)).toEqual([ 2, 4 ]);
  });

  it('de-dups a list of string', () => {
    const obj = {
      name : 'minji',
      firstName : 'minji',
      lastName : 'lee',
      student : 'minji',
      age : 29
    };
    expect(_.uniq(obj)).toEqual(['minji', 'lee', 29]);
  });
});