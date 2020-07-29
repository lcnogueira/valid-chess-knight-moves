import { NextApiRequest, NextApiResponse } from 'next'
import { isValidPosition, findPossiblePositions } from 'utils/helper'

interface RequestDataQuery {
  piece: string
  position: string
  turns: string
}

interface RequestData extends NextApiRequest {
  query: NextApiRequest['query'] & RequestDataQuery
}

type ResponseData = {
  positions: string[]
  message?: string
}

export default function movementHandler(
  request: RequestData,
  response: NextApiResponse<ResponseData>
) {
  const {
    query: { piece, position, turns = '2' },
    method
  } = request

  switch (method) {
    case 'GET': {
      let positions: string[] = []

      if (!isValidPosition(position)) {
        return response.status(400).json({
          message: 'You should provide a valid position',
          positions
        })
      }

      positions = findPossiblePositions(piece, position, Number(turns))
      response.status(200).json({ positions })
      break
    }

    default:
      response.setHeader('Allow', ['GET'])
      response.status(405).end(`Method ${method} Not Allowed`)
  }
}
