import React from 'react'
import { StyledTag } from './Tag.styles'


function Tag({ label }) {
  return (
    <StyledTag>
      { label }
    </StyledTag>
  )
}

export default Tag
