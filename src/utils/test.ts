import {
  isAlgebraicNotation,
  isValidPosition,
  isValidIndex,
  findKnightPossibleMoves
} from './helper'

describe('helper methods', () => {
  test(`isAlgebraicNotation returns true if it's a valid notation`, () => {
    expect(isAlgebraicNotation('A1')).toBeTruthy()
    expect(isAlgebraicNotation('a1')).toBeTruthy()
    expect(isAlgebraicNotation('I1')).toBeTruthy()
    expect(isAlgebraicNotation('1A')).toBeFalsy()
    expect(isAlgebraicNotation('A11')).toBeFalsy()
  })

  test(`isValidPosition returns true if it's a valid notation and is in the chess board limit`, () => {
    expect(isValidPosition('A1')).toBeTruthy()
    expect(isValidPosition('A8')).toBeTruthy()
    expect(isValidPosition('h1')).toBeTruthy()
    expect(isValidPosition('H8')).toBeTruthy()
    expect(isValidPosition('A9')).toBeFalsy()
    expect(isValidPosition('H9')).toBeFalsy()
  })

  test('isValidIndex returns true if the index is equal or less than the array size', () => {
    expect(isValidIndex(0)).toBeTruthy()
    expect(isValidIndex(7)).toBeTruthy()
    expect(isValidIndex(-1)).toBeFalsy()
    expect(isValidIndex(8)).toBeFalsy()
  })

  test('findKnightPossibleMoves returns the posible positions where the knight can move', () => {
    expect(findKnightPossibleMoves('A8').sort()).toEqual(
      [
        'A4',
        'A6',
        'A8',
        'B5',
        'B6',
        'C4',
        'C7',
        'C8',
        'D5',
        'D7',
        'E6',
        'E8'
      ].sort()
    )
  })
})
