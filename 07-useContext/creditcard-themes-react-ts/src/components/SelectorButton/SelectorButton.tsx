import React, { useState } from 'react'
import { StyledSelectorButton, StyledWrapper } from './SelectorButton.styles'
import { IconLogo } from '../common/Logo/IconLogo'
import { BankingBrands, PaymentBrands, RadioSelectorGroups } from '../../types';

interface brandProps {
  iconbrand?: PaymentBrands,
  name: RadioSelectorGroups,
  companylogo?: BankingBrands
}

function SelectorButton(props: brandProps) {
  const [logo, setLogo] = useState(props.iconbrand);
  const [inputName, setInputName] = useState(props.name)

  return (
    <StyledSelectorButton>
      <StyledWrapper>
        <input type="radio" name={ inputName } />
        <p>{ logo }</p>
      </StyledWrapper>
      { props.iconbrand && <IconLogo logo={logo!} />}
    </StyledSelectorButton>
  )
}

export default SelectorButton
