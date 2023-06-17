import React, { FC, useEffect } from 'react';
import { StyledLink } from '../../common/Links/Links.styles';
import { Icon } from '../../common/Icon/Icon';

import { SectionType } from '../../types/navigation';
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
  label: SectionType;
}

const slugify = (text: SectionType) => {
  const slug: string[] = [];
  text.split(' ').forEach((word) => {
    slug.push(word.toLowerCase())
  })
  return `/${slug.join('-')}`
}

export const NavIconMapping: { [key in SectionType]: IconDefinition } = {
  Portfolio: faBookOpenReader,
  Contact: faAddressBook,
  About: faUser,
  "Work Experience": faBriefcase,
  Education: faGraduationCap,
}

export const Links: FC<LinkProps> = ({ label }) => {
  // const url: string = `/${label}`
  const icon = NavIconMapping[label]
  const url = slugify(label)
  return (
    <StyledLink data-tooltip-id={label} data-tooltip-content={ label } className="nav-link" to={url}>
      <Icon icon={icon} />
      <ReactTooltip id={label} place="left" />
    </StyledLink>
  );
}
