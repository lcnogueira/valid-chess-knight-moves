export const baseUrl = process.env.API_URL || '/api'

interface PayloadData {
  message: string
}

interface ResponseData<T> extends Response {
  data: undefined | (T & PayloadData)
  json<T>(): Promise<T>
}

declare function fetch<T>(...args: any): Promise<ResponseData<T>>

/**
 * fetch method
 *
 * @typedef {('GET')} HTTPMethod
 */

/**
 * Makes a requeset to the specified endpoint.
 *
 * @param endpoint The API endpoint to make the request to.
 * @param method The HTTP method.
 * @param options The data object to send along with the request
 */
export const apiFetch = async <T>(
  endpoint: string,
  method = 'GET',
  options = {}
) => {
  const response = await fetch<T>(`${baseUrl}/${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    cache: 'no-cache',
    ...options
  })

  const contentType = response.headers.get('content-type')
  if (contentType && contentType.indexOf('application/json') !== -1) {
    response.data = await response.json()
  }

  return response
}

/**
 * Performs a GET Request to the specified endpoint.
 *
 * @param endpoint The API endpoint to make the request to.
 * @param data Optional data object to append to the fetch request as query params.
 * @param options The data object to send along with the request
 */
export const apiGet = <T>(
  endpoint: string,
  data: { [key: string]: string } = {},
  options = {}
) => {
  let getEndpoint = endpoint
  const queryParams: string[] = []

  Object.keys(data).forEach((key) => {
    if (typeof data[key] !== 'undefined' && typeof data[key] !== 'boolean') {
      queryParams.push(`${key}=${encodeURIComponent(data[key])}`)
    } else if (data[key]) {
      queryParams.push(key)
    }
  })

  if (queryParams.length > 0) {
    getEndpoint = `${getEndpoint}?${queryParams.join('&')}`
  }

  return apiFetch<T>(getEndpoint, 'GET', options)
}

//Here we could add another methods to make it more flexible like: apiPost, apiPut, apiDelete
