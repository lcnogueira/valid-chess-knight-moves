import { ReactNode } from 'react'
import * as S from './styles'

interface Props {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
  primary?: boolean
}

const Button = ({
  children,
  onClick,
  disabled = false,
  primary = false
}: Props) => (
  <S.StyledButton onClick={onClick} disabled={disabled} primary={primary}>
    {children}
  </S.StyledButton>
)

export default Button
