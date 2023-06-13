import React, { useState } from 'react'
import { StyledSelectorButton, StyledWrapper } from './SelectorButton.styles'
import { IconLogo } from '../common/Logo/IconLogo'
import { CompanyLogo } from '../common/Logo/CompanyLogo'
import { BankingBrands, PaymentBrands, RadioSelectorGroups } from '../../types';
import { useTheme, useThemeUpdate } from '../common/ThemeContext';

interface brandProps {
  iconbrand?: PaymentBrands,
  group: RadioSelectorGroups,
  companylogo?: BankingBrands
}

function SelectorButton(props: brandProps) {
  const [iconlogo, setIconLogo] = useState(props.iconbrand);
  const [inputGroup, setInputGroup] = useState(props.group)
  const [brandlogo, setBrandLogo] = useState(props.companylogo);

  const brandTheme = useTheme()
  const toggleTheme = useThemeUpdate()



  function Hello() {
    console.log(brandlogo)
  }
  return (
    <StyledSelectorButton onClick={ Hello }>
      <StyledWrapper>
        <input type="radio" name={ inputGroup } />
        { props.iconbrand && <p> { iconlogo! } </p>}
        { props.companylogo && <p> { brandlogo! } </p>}
      </StyledWrapper>
      { props.iconbrand && <IconLogo logo={iconlogo!} />}
      { props.companylogo && <CompanyLogo brandname={brandlogo!} />}
    </StyledSelectorButton>
  )
}

export default SelectorButton
