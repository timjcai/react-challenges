import React, { FC } from 'react'
import { StyledNavbar } from './Navbar.styles'
import { Links } from './Navlink/Links'
import { SectionType } from '../types';

type NavbarProps = {
  logo?: string;
  labels?: SectionType[];
}

export const Navbar: FC<NavbarProps> = ({ logo, labels }) => {
  return (
    <StyledNavbar>
      {labels && labels.map((label) => {
        return <Links label={label} />
      })}
    </StyledNavbar>
  )
}
