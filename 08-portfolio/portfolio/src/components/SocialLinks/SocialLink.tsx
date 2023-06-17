import { FC } from "react";
import { IconDefinition, faEarthAmericas, faSquareRss } from "@fortawesome/free-solid-svg-icons";
import { faGithub,faLinkedin,faTwitter,faYoutube} from "@fortawesome/free-brands-svg-icons";

import { SocialType, SocialLink as SocialLinkType } from "../types/index";
import { Icon } from "../common/Icon/Icon";
import { StyledSocialLink } from "./SocialLink.styles";

const SocialIconMapping: { [key in SocialType]: IconDefinition } = {
  Github: faGithub,
  Twitter: faTwitter,
  Youtube: faYoutube,
  Website: faEarthAmericas,
  Blog: faSquareRss,
  Linkedin: faLinkedin
};

const ColorIconMapping: { [key in SocialType]: string } = {
  Github: '#000000',
  Twitter: '#1da1f2',
  Youtube: '#ff0000',
  Website: '#0abf53',
  Blog: '#fd7622',
  Linkedin: '#0a66c2'
}

type SocialLinkProps = {
  socialLink: SocialLinkType;
};

export const SocialLinkButton: FC<SocialLinkProps> = ({ socialLink }) => {
  const { socialType, url } = socialLink;
  const icon = SocialIconMapping[socialType];
  const color = ColorIconMapping[socialType];
  return (
    <StyledSocialLink href={url} color={ color }>
      <Icon icon={icon} color={ color } />
    </StyledSocialLink>
    // <a href={url}>
    //   <Icon icon={icon} />
    // </a>
  );
};
