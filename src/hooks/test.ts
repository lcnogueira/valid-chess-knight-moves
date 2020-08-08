import usePosition from './usePosition'
import { renderHook, act } from '@testing-library/react-hooks'
import fetchMock from 'fetch-mock'

describe('usePosition', () => {
  beforeAll(() => {
    global.fetch = window.fetch
  })
  afterAll(() => {
    fetchMock.restore()
  })

  it('Changes the possible positions according to changes of current position ', async () => {
    const position = 'A8'
    const possiblePositions = ['C7', 'B6']

    fetchMock.mock(`api/piece/knight/position/${position}?turns=2`, {
      status: 200,
      body: { positions: possiblePositions }
    })

    const { result } = renderHook(() => usePosition())

    //It starts with default values
    expect(result.current.currentPosition).toBe('')
    expect(result.current.possiblePositions).toEqual([])
    expect(result.current.error).toBe('')

    await act(async () => {
      result.current.toggleCurrentPosition(position)
    })

    //It changes the current position according to the toggleCurrentPosition
    expect(result.current.currentPosition).toBe(position)

    //The possible positions change accordingly to the change of currentPosition
    expect(result.current.possiblePositions).toEqual(possiblePositions)

    await act(async () => {
      result.current.toggleCurrentPosition(position)
    })

    //Unselects the position in case the user cliks on the same cell
    expect(result.current.currentPosition).toBe('')

    //Sets possible positions to an empty array if currentPosition is empty
    expect(result.current.possiblePositions).toEqual([])
  })

  it('Updates the error state with a message in case of an error', async () => {
    const wrongPosition = '1A'
    const message = 'You should provide a valid position'

    fetchMock.mock(`api/piece/knight/position/${wrongPosition}?turns=2`, {
      status: 400,
      body: { message, positions: [] }
    })

    const { result } = renderHook(() => usePosition())

    await act(async () => {
      result.current.toggleCurrentPosition(wrongPosition)
    })

    //If using a wrong position, the possible positions should be empty
    expect(result.current.possiblePositions).toEqual([])

    //It updates the error state with a message in case of an error
    expect(result.current.error).toBe(message)
  })
})
