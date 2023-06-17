import React, { FC } from 'react'
import { StyledNavbar } from './Navbar.styles'
import { Links } from './Navlink/Links'
import { SectionType } from '../types';

type NavbarProps = {
  labels: SectionType[];
}

export const Navbar: FC<NavbarProps> = ({ labels }) => {
  return (
    <StyledNavbar>
      {labels && labels.map((label) => {
        return <Links label={label} />
      })}
    </StyledNavbar>
  )
}
