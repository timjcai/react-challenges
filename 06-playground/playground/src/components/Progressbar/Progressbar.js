import React from 'react'
import { StyledProgressbar, StyledPBLabel } from './Progressbar.styles'
import { useState, useEffect } from 'react'

function Progressbar(props) {
  const { title, percentageCompleted } = props
  const [completed, setCompleted] = useState("0%")
  const [label, setLabel] = useState("")
  const [color, setColor] = useState("")

  useEffect(() => {
    setCompleted(percentageCompleted)
    setLabel(`${title}`)
    setColor(associatedColors[`$${title.toLowerCase()}`])
  }, [])

  const colors = {
    $red: "#D00000",
    $yellow: "#FFBA08",
    $sage: "#9EC5AB",
    $offWhite: "#FEFFFE",
    $grey: "#32373B"
  }
  const associatedColors = {
    $protein: `${colors.$red}`,
    $fat: `${colors.$yellow}`,
    $carbohydrates: `${colors.$sage}`,
    $empty: `${colors.$grey}`,
    $default: `${colors.$offWhite}`,
  }

  return (
    <div>
      <StyledPBLabel>
        <p>{ label }</p>
        <p>{ completed }</p>
      </StyledPBLabel>
      <StyledProgressbar
        $backgroundColor={color}
        $percentageReached={completed}
      />
    </div>
  )
}

export default Progressbar
