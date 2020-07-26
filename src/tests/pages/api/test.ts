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
        message: `You should provide a valid algebraic notation`,
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
        positions: []
      })
    )
  })
})
