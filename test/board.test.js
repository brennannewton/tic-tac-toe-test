const { prettifyRow, prettifyBoard } = require('../lib/board');

describe('prettifyRow', () => {
  it('should put spacing & a pipe between each element of an array', () => {
    let input = ['A', 'B', 'C'];
    let result = prettifyRow(input);
    expect(result).toBe(' A | B | C ');

    input = ['AB', 'C'];
    result = prettifyRow(input);
    expect(result).toBe(' AB | C ');
  });

  it('should throw an error if given a string', () => {
    const input = 'ABC';
    expect.assertions(1);
    try {
      prettifyRow(input);
    } catch (err) {
      expect(err).toBeInstanceOf(TypeError);
    }
  });
});

describe('prettifyBoard', () => {
  it('should return a user-friendly tic-tac-toe board', () => {
    const board = [['S', 'P', ' '], ['O', 'O', ' '], ['K', 'Y', ' ']];
    const result = prettifyBoard(board);
    const expectedResult = ` S | P |   \n---|---|---\n O | O |   \n---|---|---\n K | Y |   `;
    expect(result).toBe(expectedResult);
  });
});
