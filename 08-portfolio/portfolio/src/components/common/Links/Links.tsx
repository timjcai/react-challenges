import React, { FC, useEffect } from 'react';
import { StyledLink } from './Links.styles';
import { Icon } from '../Icon/Icon';

import { NavLinkType } from '../../types/navbar';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip} from 'react-tooltip'

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
    <StyledLink data-tooltip-id={label} data-tooltip-content={ label } className="nav-link" to={url}>
      <Icon icon={icon} />
      <ReactTooltip id={label} place="left" />
    </StyledLink>
  );
}
