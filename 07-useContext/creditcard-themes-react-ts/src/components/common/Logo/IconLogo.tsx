import React, { FC } from 'react'
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PaymentBrands } from '../../../types';
import { StyledIconLogo } from './IconLogo.styles'
import {
  faPaypal,
  faApplePay,
  faGooglePay,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCreditCard
} from "@fortawesome/free-solid-svg-icons";

const PaymentMapping: { [key in PaymentBrands]: IconDefinition } = {
  Paypal: faPaypal,
  Applepay: faApplePay,
  Googlepay: faGooglePay,
  "Credit Card": faCreditCard
};

type LogoProps = {
  logo: PaymentBrands
}

export const IconLogo: FC<LogoProps> = ({ logo }) => {
  const icon = PaymentMapping[logo];
  return (
    <StyledIconLogo>
      <FontAwesomeIcon icon={icon} width={32} />
    </StyledIconLogo>
  )
}
