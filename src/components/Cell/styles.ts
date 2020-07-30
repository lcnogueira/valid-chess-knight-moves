import styled, { css } from 'styled-components'

type Props = {
  bgColor: string
}

export const Cell = styled.button<Props>`
  ${({ bgColor, theme: { colors } }) => css`
    background-color: ${bgColor};
    color: ${colors.white};
    border: none;
    text-decoration: none;
    height: 0;
    padding: 50% 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    :hover {
      opacity: 0.8;
    }
  `}
`
