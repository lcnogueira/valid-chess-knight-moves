import { createMocks } from 'node-mocks-http'
import handlePosition from 'pages/api/movement/[position]'

describe('/api/movement/[position]', () => {
  test('Returns an error message if position is invalid', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        position: '1D'
      }
    })

    await handlePosition(req, res)

    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: `You should provide a valid position`,
        positions: []
      })
    )
  })

  test('Returns an array of possible positions if position is valid', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        position: 'A4'
      }
    })

    await handlePosition(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        positions: [
          'B6',
          'C5',
          'C3',
          'B2',
          'A8',
          'A4',
          'C8',
          'D7',
          'D5',
          'C4',
          'B7',
          'A6',
          'B3',
          'E6',
          'E4',
          'D3',
          'B5',
          'A2',
          'B1',
          'E2',
          'D1'
        ]
      })
    )
  })
})
