import * as S from 'styles/Common'
import StepsWizard from 'components/StepsWizard'
import Link from 'next/link'

const Step1 = () => (
  <>
    <S.H3>What is a Chess?</S.H3>
    <S.Paragraph>
      Chess is a two-player strategy board game played on a chessboard, a
      checkered game board with 64 squares/cells arranged in an 8x8 grid.
      Algebraic notation in chess is a method to map cells using A to H as
      columns (left to right) and 1 to 8 as rows (bottom to top).
    </S.Paragraph>
    <S.Img
      src="/img/chessboard.png"
      alt="A colored Chessboard"
      width="500"
      height="500"
    />
  </>
)

const Step2 = () => (
  <>
    <S.H3>Knight Moves Only</S.H3>
    <S.Paragraph>
      This chess game only considers the moves of the Knight piece. This piece
      can move either 2 squares horizontally and 1 square vertically OR 2
      squares vertically and 1 square horizontally.
    </S.Paragraph>
    <S.Paragraph>
      Every time you click/tap a button the app will highlight all cells where
      the Knight can move in exactly 2 turns!{' '}
      <Link href={'/game'}>
        <a>{"Let's play!"}</a>
      </Link>
    </S.Paragraph>
  </>
)

const HomePage = () => (
  <S.Wrapper>
    <S.H1>Valid Chess Knight Moves</S.H1>
    <S.H2>Welcome to valid chess Knight Moves!</S.H2>
    <StepsWizard steps={[Step1, Step2]} showSteps={false} />
  </S.Wrapper>
)

export default HomePage
