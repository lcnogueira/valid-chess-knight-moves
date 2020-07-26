import { useState, useEffect } from 'react'
import { getPossiblePositions } from 'services'

const usePosition = (initialPosition = '') => {
  const [currentPosition, setCurrentPosition] = useState(initialPosition)
  const [possiblePositions, setPossiblePositions] = useState<string[]>([])
  const [error, setError] = useState<string>('')

  const toggleCurrentPosition = (newPosition: string) => {
    //reset the error in case there is one
    if (error) setError('')
    //Unselect the current cell in case it's already selected or set the new position
    setCurrentPosition(currentPosition === newPosition ? '' : newPosition)
  }

  useEffect(() => {
    if (currentPosition) {
      getPossiblePositions(currentPosition)
        .then((positions) => setPossiblePositions(positions))
        .catch((error) => {
          setError(error.message)
          setPossiblePositions([])
        })
    } else {
      setPossiblePositions([])
    }
  }, [currentPosition])

  return { error, currentPosition, toggleCurrentPosition, possiblePositions }
}

export default usePosition
