import { NextApiRequest, NextApiResponse } from 'next'
import { isAlgebraicNotation, findKnightPossibleMoves } from 'utils/helper'

interface RequestDataQuery {
  position: string
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
    query: { position },
    method
  } = request

  switch (method) {
    case 'GET': {
      let positions: string[] = []

      if (!isAlgebraicNotation(position)) {
        return response.status(400).json({
          message: 'You should provide a valid algebraic notation',
          positions
        })
      }

      positions = findKnightPossibleMoves(position)
      response.status(200).json({ positions })
      break
    }

    default:
      response.setHeader('Allow', ['GET'])
      response.status(405).end(`Method ${method} Not Allowed`)
  }
}
