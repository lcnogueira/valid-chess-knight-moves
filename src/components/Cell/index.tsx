import * as S from './styles'

interface Props {
  isOdd: boolean
  onClick: (e: React.MouseEvent) => void
  isSelected: boolean
  isPossiblePosition: boolean
}

const Cell: React.FC<Props> = ({
  isOdd,
  onClick,
  isSelected,
  isPossiblePosition
}) => {
  let bgColor

  if (isSelected) {
    bgColor = 'red'
  } else if (isPossiblePosition) {
    bgColor = 'green'
  } else {
    bgColor = isOdd ? 'tomato' : 'orange'
  }

  return <S.Cell onClick={onClick} bgColor={bgColor} />
}

export default Cell
