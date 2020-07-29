import { render, screen } from 'tests/utils'
import * as usePosition from 'hooks/usePosition'

import ChessBoard from '.'

describe('<ChessBoard />', () => {
  it('renders correctly', () => {
    const { container } = render(<ChessBoard />)

    expect(container).toMatchSnapshot()
  })

  it('shows a message error if it exists', () => {
    jest.spyOn(usePosition, 'default').mockReturnValue({
      error: 'An error ocurred',
      currentPosition: '',
      possiblePositions: [],
      toggleCurrentPosition: jest.fn()
    })

    render(<ChessBoard />)

    expect(screen.getByTestId('error')).toHaveTextContent('An error ocurred')
  })
})
