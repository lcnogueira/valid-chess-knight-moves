import * as S from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Game', href: '/game' }
]

const Header: React.FC = () => {
  const { pathname } = useRouter()
  return (
    <S.Header>
      <S.MenuLinks>
        {links.map(({ href, label }) => (
          <S.MenuLinksItem key={href} selected={pathname === href}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinks>
    </S.Header>
  )
}

export default Header
