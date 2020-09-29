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

    expect(screen.getAllByTestId('step')).toHaveLength(1)
    expect(screen.getByTestId('step')).toHaveTextContent('Step 1')

    userEvent.click(screen.getByRole('button', { name: /next/i }))

    expect(screen.getAllByTestId('step')).toHaveLength(1)
    expect(screen.getByTestId('step')).toHaveTextContent('Step 2')

    userEvent.click(screen.getByRole('button', { name: /previous/i }))

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
