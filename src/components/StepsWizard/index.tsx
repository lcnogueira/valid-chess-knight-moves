import { useState } from 'react'

import * as S from './styles'

interface Props {
  steps: Array<React.FC>
  showSteps?: boolean
}

const StepsWizard: React.FC<Props> = ({ steps, showSteps = true }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const onPrev = () => setCurrentStep((prev) => prev - 1)

  const onNext = () => setCurrentStep((prev) => prev + 1)

  return (
    <S.Container>
      <S.ButtonsContainer>
        <S.NavigationButton onClick={onPrev} disabled={currentStep === 0}>
          Previous
        </S.NavigationButton>
        <S.NavigationButton
          onClick={onNext}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </S.NavigationButton>
      </S.ButtonsContainer>
      {showSteps && (
        <S.Steps>{`Step ${currentStep + 1}/${steps.length}`}</S.Steps>
      )}
      {steps[currentStep]}
    </S.Container>
  )
}

export default StepsWizard
