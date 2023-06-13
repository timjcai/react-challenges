import React from 'react'
import { StyledFrame } from './Frame.styles'
import Background from './Background'

function Frame() {
  return (
    <StyledFrame>
      <img id="iphoneFrame" src="https://res.cloudinary.com/dhxonutdu/image/upload/v1686641254/useContext-CreditCardThemes/iphoneFrame_n0rufq.png" alt="iPhone 14 Frame" />
      <Background />
    </StyledFrame>
  )
}

export default Frame
