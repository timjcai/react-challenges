import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { DevIconType } from "../../types";
import styled from 'styled-components'

type IconProps = {
  icon: IconDefinition,
  color?: string
}

export const Icon: FC<IconProps> = ({ icon, color }) => {
  return <FontAwesomeIcon icon={icon} width={20} color={ color } />;
};


type StackIconProps = {
  icon: DevIconType
}

type DevIconProps = {
  $color?: string;
  $fontsize?: number;
}

const DevIcon = styled.i<DevIconProps>`
  color: ${props => props.$color};
  font-size: ${props => props.$fontsize }px;
  padding: 4px;
  border: 1px solid white;
  border-radius: 6px;
  margin-right: 12px;
  width: fit-content;
`;

export const StackIcon: FC<StackIconProps> = ({ icon }) => {
  const url = `devicon-${icon}-plain`
  return (<DevIcon className={url} $fontsize={ 16} />);
}
