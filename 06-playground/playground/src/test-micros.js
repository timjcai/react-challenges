import React from 'react'
import { StyledCard } from './components/Card/Card.styles'
import Progressbar from './components/Progressbar/Progressbar';

function Testmicros() {
  return (
    <StyledCard>
      <Progressbar title="Protein" percentageCompleted="30%"/>
      <Progressbar title="Fat" percentageCompleted="40%"/>
      <Progressbar title="Carbohydrates" percentageCompleted="60%"/>
    </StyledCard>
  )
}

export default Testmicros
