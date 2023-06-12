import React, { useState } from 'react'
import { StyledPaymentButton, StyledWrapper } from './PaymentButton.styles'
import { Logo } from '../common/Logo/Logo'
import { PaymentBrands, RadioSelectorGroups } from '../../types';

interface brandProps {
  brand: PaymentBrands,
  name: RadioSelectorGroups
}

function PaymentButton(props: brandProps) {
  const [logo, setLogo] = useState(props.brand);
  const [inputName, setInputName] = useState(props.name)

  return (
    <StyledPaymentButton>
      <StyledWrapper>
        <input type="radio" name="paymentbrand"/>
        <p>{ logo }</p>
      </StyledWrapper>
      <Logo logo={logo} />
    </StyledPaymentButton>
  )
}

export default PaymentButton
