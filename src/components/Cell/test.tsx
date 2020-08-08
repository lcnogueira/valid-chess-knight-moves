import { render, screen, fireEvent } from 'tests/utils'

import Cell from '.'

const DefaultCell = ({
  isOdd = true,
  onClick = jest.fn(),
  isSelected = false,
  isPossiblePosition = false
}) => (
  <Cell
    isOdd={isOdd}
    onClick={onClick}
    isSelected={isSelected}
    isPossiblePosition={isPossiblePosition}
  >
    A8
  </Cell>
)

describe('<Cell />', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<DefaultCell />)

    expect(container).toMatchSnapshot()
  })

  it('calls onClick prop when clicked', () => {
    const onClick = jest.fn()
    render(<DefaultCell onClick={onClick} />)

    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
