import React from 'react'
import { StyledSection } from './Section.styles'

function Section({ items }) {
  return (
    <StyledSection>
      { items }
    </StyledSection>
  )
}

export default Section
