import { apiGet } from './api'

type PositionsData = {
  positions: string[]
}

/**
 * Fetches the possible positions according to the provided position, piece and turns
 *
 * @param currentPosition The current position
 * @param piece The piece we are looking for the moves ('knight by default)
 * @param turns The number of turns the app should search (2 by default)
 */
export const getPossiblePositions = async (
  position: string,
  piece = 'knight',
  turns = 2
): Promise<string[]> => {
  const response = await apiGet<PositionsData>(
    `piece/${piece}/position/${position}`,
    { turns: turns.toString() }
  )

  if (!response.data) {
    throw new Error('An error ocurred')
  }

  if (response.status !== 200) {
    throw new Error(response.data.message)
  }

  return response.data.positions
}
