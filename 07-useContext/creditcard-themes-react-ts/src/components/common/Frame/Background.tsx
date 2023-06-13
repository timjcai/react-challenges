import React from 'react'
import { StyledBackground } from './Background.style'

function Background() {
  return (
    <div>
      <StyledBackground $colorOne={'#000000'} $colorTwo={'#000000'}></StyledBackground>
      <StyledBackground $colorOne={'#FFFFFF'} $colorTwo={'#000000'}></StyledBackground>
      <StyledBackground $colorOne={'#FFFFFF'} $colorTwo={'#FFFFFF'}></StyledBackground>
    </div>
  )
}

export default Background
