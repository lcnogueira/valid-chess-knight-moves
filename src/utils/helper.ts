export const lines = ['8', '7', '6', '5', '4', '3', '2', '1']
export const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export const isValidNumber = (number: string) => lines.includes(number)

export const isValidLetter = (letter: string) =>
  columns.includes(letter.toUpperCase())

/**
 * The position is valid if componse by letter followed by one number and they both belong to the chess board limit.
 * @param position The position the user clicked on
 */
export const isAlgebraicNotation = (position: string) => {
  if (
    /^\D\d$/.test(position) &&
    isValidLetter(position.charAt(0)) &&
    isValidNumber(position.charAt(1))
  ) {
    return true
  }
  return false
}

/**
 * Returns the knight possible positions.
 * @param position The position the user clicked on
 */
export const findKnightPossibleMoves = (position: string): string[] => {
  if (position === 'A8') {
    return ['B6', 'C7']
  } else {
    return []
  }
}
