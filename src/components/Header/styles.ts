import styled, { css } from 'styled-components'

interface MenuLinksData {
  selected: boolean
}

export const Header = styled.nav`
  margin: 0 auto;
  max-width: 128rem;
  position: sticky;
  z-index: 10;
`

export const MenuLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.5rem;
  width: 100%;
`

export const MenuLinksItem = styled.li<MenuLinksData>`
  ${({ selected }) => css`
    font-size: 1.5rem;
    display: flex;

    a {
      display: flex;
      align-items: center;
      font-weight: bold;
      padding: 0 5rem;
      color: ${selected ? 'var(--orange)' : 'var(--white)'};

      :hover {
        color: var(--orange);
      }
    }
  `}
`
