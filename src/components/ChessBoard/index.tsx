import { usePosition } from 'hooks'
import { lines, columns } from 'utils/helper'
import Cell from '../Cell'

import * as S from './styles'

const ChessBoard: React.FC = () => {
  const {
    error,
    currentPosition,
    toggleCurrentPosition,
    possiblePositions
  } = usePosition()

  const handleClick = (e: React.MouseEvent, cellPosition: string) => {
    e.preventDefault()
    toggleCurrentPosition(cellPosition)
  }

  return (
    <>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      <S.BoardGrid>
        {lines.map((line, lineIndex) =>
          columns.map((column, columnIndex) => {
            const cellPosition = `${column}${line}`
            return (
              <Cell
                key={cellPosition}
                isOdd={(lineIndex + columnIndex) % 2 !== 0}
                onClick={(e) => handleClick(e, cellPosition)}
                isSelected={cellPosition === currentPosition}
                isPossiblePosition={possiblePositions.includes(cellPosition)}
              >
                {cellPosition}
              </Cell>
            )
          })
        )}
      </S.BoardGrid>
    </>
  )
}

export default ChessBoard
