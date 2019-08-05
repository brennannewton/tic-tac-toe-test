const { nextPlayer } = require('../lib/play');

describe('nextPlayer', () => {
  it(`should return 'X' if passed any letter but 'X'`, () => {
    let result = nextPlayer('A');
    expect(result).toBe('X');

    result = nextPlayer('O');
    expect(result).toBe('X');
  });

  it(`should return 'X' if passed a non-letter`, () => {
    let result = nextPlayer(1);
    expect(result).toBe('X');

    result = nextPlayer();
    expect(result).toBe('X');
  });

  it(`should return 'X' if passed a string`, () => {
    const result = nextPlayer('Cat');
    expect(result).toBe('X');
  });

  it(`should return 'O' if passed 'X'`, () => {
    const result = nextPlayer('O');
    expect(result).toBe('X');
  });
});
