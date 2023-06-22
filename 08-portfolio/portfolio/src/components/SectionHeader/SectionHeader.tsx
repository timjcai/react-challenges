import React, { FC } from 'react';
import { SectionType } from '../types';
import { NavIconMapping } from '../Navbar/Navlink/Links';
import { Icon } from '../common/Icon/Icon';
import { styled } from 'styled-components';

type SectionHeaderProps = {
  label: SectionType,
}

const StyledSectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ffffff;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  font-size: 12px;
  padding: 0.25em 1.5em;
  width: fit-content;
`;

const StyledHeaderText = styled.p`
  margin: 0px;
  padding: 0px;
`;

export const SectionHeader: FC<SectionHeaderProps> = ({ label }) => {
  const icon = NavIconMapping[label]
  return (
    <StyledSectionHeader>
      <Icon icon={icon} />
      <StyledHeaderText>{ label }</StyledHeaderText>
    </StyledSectionHeader>
  );
}
