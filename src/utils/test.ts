import { isValidNumber, isValidLetter, isAlgebraicNotation } from './helper'

describe('helper methods', () => {
  test('isValidNumber returns true if is a valid number or false otherwise', () => {
    expect(isValidNumber('5')).toBeTruthy()
    expect(isValidNumber('9')).toBeFalsy()
    expect(isValidNumber('0')).toBeFalsy()
  })

  test('isValidLetter returns true if is a valid letter or false otherwise', () => {
    expect(isValidLetter('a')).toBeTruthy()
    expect(isValidLetter('A')).toBeTruthy()
    expect(isValidLetter('I')).toBeFalsy()
  })

  test(`isAlgebraicNotation returns true if it's a valid notation or false otherwise`, () => {
    expect(isAlgebraicNotation('A1')).toBeTruthy()
    expect(isAlgebraicNotation('a1')).toBeTruthy()
    expect(isAlgebraicNotation('1A')).toBeFalsy()
    expect(isAlgebraicNotation('A11')).toBeFalsy()
    expect(isAlgebraicNotation('I1')).toBeFalsy()
  })
})
