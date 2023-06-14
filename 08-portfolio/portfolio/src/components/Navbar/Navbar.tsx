import React, { FC } from 'react'
import { StyledNavbar } from './Navbar.styles'
import { Links } from '../common/Links/Links'
import { FlexRowCont } from '../common/Container/Container.styles';

type NavbarProps = {
  logo?: string;
  labels?: Array<string>;
}

export const Navbar: FC<NavbarProps> = ({ logo, labels }) => {
  return (
    <StyledNavbar>
      <p>Hello</p>
      <FlexRowCont>
        <Links label={'Portfolio'} />
        <Links label={'Work Experience'} />
        <Links label={ 'Contact' } />
      </FlexRowCont>
    </StyledNavbar>
  )
}
