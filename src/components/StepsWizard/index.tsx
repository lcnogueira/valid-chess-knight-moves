import { useState } from 'react'
import Button from 'components/Button'

import * as S from './styles'

type Props = {
  steps: Array<React.FC>
  showSteps?: boolean
}

const StepsWizard: React.FC<Props> = ({ steps, showSteps = false }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const Step = steps[currentStep]

  const onPrev = () => setCurrentStep((prev) => prev - 1)

  const onNext = () => setCurrentStep((prev) => prev + 1)

  return (
    <S.Container>
      <S.ButtonsContainer>
        <Button onClick={onPrev} disabled={currentStep === 0} primary>
          Previous
        </Button>
        <Button onClick={onNext} disabled={currentStep === steps.length - 1}>
          Next
        </Button>
      </S.ButtonsContainer>
      {showSteps && (
        <S.Steps>{`Step ${currentStep + 1} / ${steps.length}`}</S.Steps>
      )}
      <Step />
    </S.Container>
  )
}

export default StepsWizard
