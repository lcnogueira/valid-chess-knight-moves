import { render, screen, userEvent } from 'tests/utils'

import StepsWizard from '.'

const step1 = () => <div data-testid="step">Step 1</div>
const step2 = () => <div data-testid="step">Step 2</div>

const DefaultStepsWizard = ({ showSteps = false }) => (
  <StepsWizard steps={[step1, step2]} showSteps={showSteps} />
)

describe('<StepsWizard />', () => {
  it('renders correctly with props', () => {
    const { container } = render(<DefaultStepsWizard />)

    expect(container).toMatchSnapshot()
  })

  it('changes the current step when clicking the buttons', () => {
    render(<DefaultStepsWizard />)

    const next = screen.getByRole('button', { name: /next/i })
    const previous = screen.getByRole('button', { name: /previous/i })

    expect(next).toBeEnabled()
    expect(previous).toBeDisabled()
    expect(screen.getAllByTestId('step')).toHaveLength(1)
    expect(screen.getByTestId('step')).toHaveTextContent('Step 1')

    userEvent.click(next)

    expect(next).toBeDisabled()
    expect(previous).toBeEnabled()
    expect(screen.getAllByTestId('step')).toHaveLength(1)
    expect(screen.getByTestId('step')).toHaveTextContent('Step 2')

    userEvent.click(previous)

    expect(next).toBeEnabled()
    expect(previous).toBeDisabled()
    expect(screen.getAllByTestId('step')).toHaveLength(1)
    expect(screen.getByTestId('step')).toHaveTextContent('Step 1')
  })

  it('shows the steps in case showSteps is true', () => {
    render(<DefaultStepsWizard showSteps={true} />)

    expect(screen.getByText(/step 1 \/ 2/i)).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: /next/i }))

    expect(screen.getByText(/step 2 \/ 2/i)).toBeInTheDocument()
  })
})
