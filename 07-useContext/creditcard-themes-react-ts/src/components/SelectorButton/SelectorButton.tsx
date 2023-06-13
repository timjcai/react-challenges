import React, { useState } from 'react'
import { StyledSelectorButton, StyledWrapper } from './SelectorButton.styles'
import { IconLogo } from '../common/Logo/IconLogo'
import { CompanyLogo } from '../common/Logo/CompanyLogo'
import { BankingBrands, PaymentBrands, RadioSelectorGroups } from '../../types';

interface brandProps {
  iconbrand?: PaymentBrands,
  name: RadioSelectorGroups,
  companylogo?: BankingBrands
}

function SelectorButton(props: brandProps) {
  const [iconlogo, setIconLogo] = useState(props.iconbrand);
  const [inputName, setInputName] = useState(props.name)
  const [brandlogo, setBrandLogo] = useState(props.companylogo);

  return (
    <StyledSelectorButton>
      <StyledWrapper>
        <input type="radio" name={ inputName } />
        { props.iconbrand && <p> { iconlogo! } </p>}
        { props.companylogo && <p> { brandlogo! } </p>}
      </StyledWrapper>
      { props.iconbrand && <IconLogo logo={iconlogo!} />}
      { props.companylogo && <CompanyLogo brandname={brandlogo!} />}
    </StyledSelectorButton>
  )
}

export default SelectorButton