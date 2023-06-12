import React, { useState } from 'react'
import { StyledPaymentButton, StyledWrapper } from './PaymentButton.styles'
import { Logo } from '../common/Logo/Logo'
import { PaymentBrands } from '../../types';

interface brandProps {
  brand: PaymentBrands,
}

function PaymentButton(props: brandProps) {
  const [logo, setLogo] = useState(props.brand);

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
