import React, { FC } from 'react';
import { StyledLink } from './Links.styles';
import { Icon } from '../Icon/Icon';

import { NavLinkType } from '../../types/navbar';

import {
  IconDefinition,
  faAddressBook,
  faBriefcase,
  faUser,
  faGraduationCap,
  faBookOpenReader
} from "@fortawesome/free-solid-svg-icons";

type LinkProps = {
  label: NavLinkType;
}

const NavIconMapping: { [key in NavLinkType]: IconDefinition } = {
  Portfolio: faBookOpenReader,
  Contact: faAddressBook,
  About: faUser,
  "Work Experience": faBriefcase,
  Education: faGraduationCap,
}

export const Links: FC<LinkProps> = ({ label }) => {
  // const url: string = `/${label}`
  const icon = NavIconMapping[label]
  const url:string = '#'
  return (
    <StyledLink className="nav-link" to={url}>
      <Icon icon={ icon } />
      {label}
    </StyledLink>
  );
}
