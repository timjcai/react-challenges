import React from 'react'
import { StyledPaymentButton } from './PaymentButton.styles'
import { Logo } from '../common/Logo/Logo'

function PaymentButton() {
  return (
    <StyledPaymentButton>
      <input type="radio" />
      <p>Paypal</p>
      <Logo logo={'Paypal'} />
    </StyledPaymentButton>
  )
}

export default PaymentButton
