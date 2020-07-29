export const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
export const lines = ['8', '7', '6', '5', '4', '3', '2', '1']

// Knight possible moves
const columnMovements = [-1, -2, -2, -1, 1, 2, 2, 1]
const rowMovements = [-2, -1, 1, 2, -2, -1, 1, 2]

// The knight can move, at most, 8 positions
const possibleKnightMoves = 8

/**
 * It is a valid algebraic notation if composed by one letter followed by one number
 * @param position
 */
export const isAlgebraicNotation = (position: string) => /^\D\d$/.test(position)

/**
 * The position is valid if is an algebraic notation and both the digits belong to the chess board limit.
 * @param position The position the user clicked on
 */
export const isValidPosition = (position: string) => {
  if (
    isAlgebraicNotation(position) &&
    columns.includes(position.charAt(0).toUpperCase()) &&
    lines.includes(position.charAt(1).toUpperCase())
  ) {
    return true
  }
  return false
}

/**
 * Avoid accessing a value that is not in the chessboard limit
 * @param number
 */
export const isValidIndex = (index: number) => index >= 0 && index < 8

/**
 * Returns the possible positions according to the provided piece, current position and number of turns.
 * @param piece The piece the user is searching the positions for
 * @param position The position the user clicked on
 * @param turns The number of turns the app should search (2 by default)
 */
export const findPossiblePositions = (
  piece: string,
  position: string,
  turns = 2
): string[] => {
  let positions: string[] = []

  //At the moment, we only care about the knight moves. We can include other cases later
  switch (piece) {
    case 'knight':
      //First turn
      positions = getKnightPositions([position])

      //For each of the next turns
      for (let turn = 1; turn < turns; turn++) {
        positions = [...positions, ...getKnightPositions(positions)]
      }
      break
    default:
      return positions
  }

  return positions
}

/**
 * Returns the Knight possible positions for each of the provided positions
 * @param positions The possible positions the algorithm should consider
 */
export const getKnightPositions = (positions: string[]) => {
  const auxArray: string[] = []

  positions.forEach((position) => {
    //Get the index values of the current position
    const columnIndex = columns.indexOf(position.charAt(0))
    const rowIndex = lines.indexOf(position.charAt(1))

    //For each of the possible movements, get a new position
    for (let movement = 0; movement < possibleKnightMoves; movement++) {
      const letterIndex = columnIndex + columnMovements[movement]
      const numberIndex = rowIndex + rowMovements[movement]

      //Make sure you'll try to access a valid position
      if (isValidIndex(letterIndex) && isValidIndex(numberIndex)) {
        const newPosition = `${columns[letterIndex]}${lines[numberIndex]}`
        //Only include the new position if it's not in the array yet
        if (auxArray.indexOf(newPosition) === -1) {
          auxArray.push(newPosition)
        }
      }
    }
  })
  return auxArray
}
