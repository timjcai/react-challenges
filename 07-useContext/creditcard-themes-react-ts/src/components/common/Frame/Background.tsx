import React from 'react'
import { StyledBackground, BackgroundWrapper } from './Background.style'

function Background() {
  return (
    <BackgroundWrapper>
      <StyledBackground
        $colorOne={'#000000'}
        $colorTwo={'#000000'}
        $height={30}
        $radius={55}
        $zindex={-1} />
      <StyledBackground
        $colorOne={'#FFFFFF'}
        $colorTwo={'#000000'}
        $height={30}
        $overlap={-30}
        $zindex={0} />
      <StyledBackground
        $colorOne={'#FFFFFF'}
        $colorTwo={'#FFFFFF'}
        $height={25}
        $overlap={-18}
        $radius={55}
        $zindex={-3} />
    </BackgroundWrapper>
  )
}

export default Background
