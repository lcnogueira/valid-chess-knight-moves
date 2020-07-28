import { apiGet } from './api'

type PositionsData = {
  positions: string[]
}

/**
 * Fetches the possible positions according to the provided position
 *
 * @param currentPosition The current position
 */
export const getPossiblePositions = async (
  position: string
): Promise<string[]> => {
  const response = await apiGet<PositionsData>(`movement/${position}`)

  if (!response.data) {
    throw new Error('An error ocurred')
  }

  if (response.status !== 200) {
    throw new Error(response.data.message)
  }

  return response.data.positions
}
