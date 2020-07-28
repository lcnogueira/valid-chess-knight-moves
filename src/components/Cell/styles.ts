import styled, { css } from 'styled-components'

type Props = {
  bgColor: string
}

export const Cell = styled.button<Props>`
  ${({ bgColor }) => css`
    background-color: ${bgColor};
    height: 0;
    padding-top: 100%;
    border: none;

    :hover {
      opacity: 0.8;
    }
  `}
`
