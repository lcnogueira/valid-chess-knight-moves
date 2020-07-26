import fetchMock from 'fetch-mock'
import { apiFetch, baseUrl } from './api'

describe('apiFetch', () => {
  afterEach(() => {
    fetchMock.restore()
    fetchMock.reset()
  })

  it('should be able to make all HTTP requests', async () => {
    const testEndpoint = `${baseUrl}/test`

    const testReturnData = {
      testData: 1,
      testData2: 2
    }

    fetchMock.mock(testEndpoint, {
      status: 200,
      body: testReturnData
    })

    let response = await apiFetch('test', 'GET')
    expect(response.data).toEqual(testReturnData)

    response = await apiFetch('test', 'POST')
    expect(response.data).toEqual(testReturnData)

    response = await apiFetch('test', 'PUT')
    expect(response.data).toEqual(testReturnData)

    response = await apiFetch('test', 'DELETE')
    expect(response.data).toEqual(testReturnData)
  })
})
