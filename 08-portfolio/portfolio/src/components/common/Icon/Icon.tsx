import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export const Icon: FC<{ icon: IconDefinition }> = ({ icon }) => {
  return <FontAwesomeIcon icon={icon} width={16} />;
};
