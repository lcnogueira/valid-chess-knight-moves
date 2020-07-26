import styled, { css } from 'styled-components'

interface MenuLinksData {
  selected: boolean
}

export const Menu = styled.nav`
  margin: 0 auto;
  height: 6.5rem;
  width: 100%;
  max-width: 128rem;
  position: sticky;
  z-index: 10;
`

export const MenuLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const MenuLinksItem = styled.li<MenuLinksData>`
  ${({ selected }) => css`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    height: 100%;

    a {
      height: 100%;
      display: flex;
      align-items: center;
      font-weight: bold;
      padding: 0 3rem;
      color: ${selected ? 'var(--tomato)' : 'var(--white)'};

      :hover {
        color: var(--tomato);
        background-color: var(--white);
      }
    }
  `}
`
