import * as S from 'styles/Common'
import StepsWizard from 'components/StepsWizard'

const HomePage = () => (
  <S.Wrapper>
    <S.Title>Valid Chess Knight Moves</S.Title>
    <S.Description>
      Welcome to valid chess Knight Moves! A challenge for a position at AE
      Studio
    </S.Description>
    <StepsWizard steps={[]} />
  </S.Wrapper>
)

export default HomePage
