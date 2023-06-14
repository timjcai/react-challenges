import React, { FC } from 'react'
import { StyledNavbar } from './Navbar.styles'
import { Links } from '../common/Links/Links'

type NavbarProps = {
  logo?: string;
  labels?: Array<string>;
}

export const Navbar: FC<NavbarProps> = ({ logo, labels }) => {
  return (
    <StyledNavbar>
        <Links label={'Portfolio'} />
        <Links label={'Work Experience'} />
        <Links label={ 'Contact' } />
    </StyledNavbar>
  )
}
