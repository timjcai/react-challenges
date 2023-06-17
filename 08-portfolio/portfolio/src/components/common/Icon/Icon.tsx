import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type IconProps = {
  icon: IconDefinition,
  color?: string
}


export const Icon: FC<IconProps> = ({ icon, color }) => {
  return <FontAwesomeIcon icon={icon} width={20} color={ color } />;
};
