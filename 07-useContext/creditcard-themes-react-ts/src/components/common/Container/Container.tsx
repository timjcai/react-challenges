import React from 'react'
import { StyledContainer } from './Container.styles'

export const Container = (props: any) => {
  return (
    <StyledContainer $direction={ props.direction }>
      { props.children }
    </StyledContainer>
  )
}
