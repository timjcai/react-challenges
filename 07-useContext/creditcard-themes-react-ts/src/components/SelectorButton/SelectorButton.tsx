import React, { useState } from 'react'
import { StyledSelectorButton, StyledWrapper } from './SelectorButton.styles'
import { Logo } from '../common/Logo/Logo'
import { PaymentBrands, RadioSelectorGroups } from '../../types';

interface brandProps {
  brand: PaymentBrands,
  name: RadioSelectorGroups
}

function SelectorButton(props: brandProps) {
  const [logo, setLogo] = useState(props.brand);
  const [inputName, setInputName] = useState(props.name)

  return (
    <StyledSelectorButton>
      <StyledWrapper>
        <input type="radio" name={ inputName } />
        <p>{ logo }</p>
      </StyledWrapper>
      <Logo logo={ logo } />
    </StyledSelectorButton>
  )
}

export default SelectorButton
