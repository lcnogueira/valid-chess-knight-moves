import * as S from './styles'
import { useColor } from 'hooks'

type Props = {
  isOdd: boolean
  onClick: (e: React.MouseEvent) => void
  isSelected: boolean
  isPossiblePosition: boolean
  children: string
}

const Cell: React.FC<Props> = ({
  isOdd,
  onClick,
  isSelected = false,
  isPossiblePosition = false,
  children
}) => {
  const { colors } = useColor()
  let bgColor

  if (isSelected) {
    bgColor = colors.red
  } else if (isPossiblePosition) {
    bgColor = colors.green
  } else {
    bgColor = isOdd ? colors.secondary : colors.primary
  }

  return (
    <S.Cell onClick={onClick} bgColor={bgColor}>
      {children}
    </S.Cell>
  )
}

export default Cell
