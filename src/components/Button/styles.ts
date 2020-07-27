import styled, { css } from 'styled-components'

interface ButtonData {
  primary: boolean
}

export const StyledButton = styled.button<ButtonData>`
  ${({ theme: { colors, border }, primary }) => css`
    margin: 1rem;
    min-width: 15rem;
    padding: 1.5rem 2.5rem;
    border-radius: ${border.radius};
    font-size: 1.6rem;
    font-weight: bold;
    border: yellow;
    background-color: ${primary ? colors.primary : colors.secondary};
    color: ${colors.white};

    :hover {
      background-color: ${colors.white};
      color: ${primary ? colors.primary : colors.secondary};
    }
  `}
`
