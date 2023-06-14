import { FC } from "react";
import { IconDefinition, faEarthAmericas, faSquareRss } from "@fortawesome/free-solid-svg-icons";
import { faGithub,faLinkedin,faTwitter,faYoutube} from "@fortawesome/free-brands-svg-icons";

import { SocialType, SocialLink as SocialLinkType } from "../types/index";
import { Icon } from "../common/Icon/Icon";

const SocialIconMapping: { [key in SocialType]: IconDefinition } = {
  Github: faGithub,
  Twitter: faTwitter,
  Youtube: faYoutube,
  Website: faEarthAmericas,
  Blog: faSquareRss,
  Linkedin: faLinkedin
};

type SocialLinkProps = {
  socialLink: SocialLinkType;
};

export const SocialLink: FC<SocialLinkProps> = ({ socialLink }) => {
  const { socialType, url } = socialLink;
  const icon = SocialIconMapping[socialType];
  return (
    <a href={url}>
      <Icon icon={icon} />
    </a>
  );
};
