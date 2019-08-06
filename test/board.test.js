const {
  prettifyRow,
  prettifyBoard,
  generateStartingBoard,
  updateBoard,
} = require('../lib/board');

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

  it('should throw an error when passed a regular array', () => {
    const board = ['X', 'Y', 'Z'];
    expect.assertions(1);
    try {
      prettifyBoard(board);
    } catch (err) {
      expect(err).toBeInstanceOf(TypeError);
    }
  });

  it('should throw an error if not given an array', () => {
    let input = 'YEET';
    expect.assertions(2);
    try {
      prettifyBoard(input);
    } catch (err) {
      expect(err).toBeInstanceOf(TypeError);
    }

    input = '';
    try {
      prettifyBoard(input);
    } catch (err) {
      expect(err).toBeInstanceOf(TypeError);
    }
  });
});

describe('generateStartingBoard', () => {
  it('should generate a n x n 2D array filled with spaces', () => {
    let result = generateStartingBoard();
    expect(result).toHaveLength(3);
    expect(result).toEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);

    result = generateStartingBoard(4);
    expect(result).toHaveLength(4);
    expect(result).toEqual([
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
    ]);
  });

  it('should throw an error given non-number input', () => {
    let result = generateStartingBoard('4');
    expect(result).toHaveLength(1);
    expect(result).toEqual([[' ']]);

    result = generateStartingBoard(true);
    expect(result).toHaveLength(1);
    expect(result).toEqual([[' ']]);
  });
});

describe('updateBoard', () => {
  it('should return a board with the updated tic', () => {
    const board = [[' ', 'B', ' '], ['C', ' ', ' '], [' ', 'B', ' ']];
    const player = 'C';
    const result = updateBoard(board, [1, 1], player);
    expect(result).toEqual([[' ', 'B', ' '], ['C', 'C', ' '], [' ', 'B', ' ']]);
  });

  it('should throw a TypeError if player is not a character', () => {
    const board = [[' ', 'B', ' '], ['C', ' ', ' '], [' ', 'B', ' ']];
    const player = 4;
    const result = updateBoard(board, [1, 1], player);
    // This highlights a flaw in the code's error handling
    expect(result).toEqual([[' ', 'B', ' '], ['C', 4, ' '], [' ', 'B', ' ']]);
  });
});
