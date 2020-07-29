import styled, { css } from 'styled-components'

type Props = {
  primary: boolean
  disabled: boolean
}

export const StyledButton = styled.button<Props>`
  ${({ theme: { colors, border }, primary, disabled }) => css`
    margin: 1rem;
    min-width: 15rem;
    padding: 1.5rem 2.5rem;
    border-radius: ${border.radius};
    font-size: 1.6rem;
    font-weight: bold;
    border: yellow;
    background-color: ${primary ? colors.primary : colors.secondary};
    color: ${colors.white};

    ${disabled &&
    css`
      opacity: 0.3;
      cursor: default;
    `}

    ${!disabled &&
    css`
      :hover {
        background-color: ${colors.white};
        color: ${primary ? colors.primary : colors.secondary};
      }
    `}
  `}
`
