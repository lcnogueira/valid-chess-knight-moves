import styled, { css } from 'styled-components'

interface CellData {
  bgColor: string
}

export const Cell = styled.button<CellData>`
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
