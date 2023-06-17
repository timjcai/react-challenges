import React, {FC} from "react";
import { StyledProfilePicture } from "./Profile.styles";
import styled from 'styled-components'
import { SocialLink } from "../types";
import { FlexCont } from "../common/Container/Container.styles";
import { SocialLinkButton } from "../SocialLinks/SocialLink";

type ProfilePictureProps = {
  profilePicture?: string,
  firstName?: string,
  lastName?: string,
  job?: string;
  socialLinks: SocialLink[];
}

const TextOverlay = styled.div`
  display: flex;
  flex-direction: column;
  text-align:left;
  position: absolute;
  bottom: 3px;
  left: 30px;
  margin-bottom: 10px;
`;

const TextOverlayHeading = styled.h2`
  margin-bottom: -10px;
  font-size: 1em;
`;

const TextOverlayParagraph = styled.p`
  font-size: 0.6em;
`;

export const ProfilePicture: FC<ProfilePictureProps> = ({ profilePicture, firstName, lastName, job, socialLinks }) => {
  return (
    <StyledProfilePicture>
      <img id="profilepicture" src={profilePicture} alt="profilepicture"></img>
      <TextOverlay>
        <TextOverlayHeading>{firstName} {lastName}</TextOverlayHeading>
        <TextOverlayParagraph>{job}</TextOverlayParagraph>
        <FlexCont $d={'row'} $w={'18vw'} $m={ '1px 0px 10px 0px'} $jc={'space-between'}>
          {socialLinks.map((socialLink) => {
            return <SocialLinkButton socialLink={socialLink} key={socialLink.url} />;
          })}
        </FlexCont>
      </TextOverlay>
    </StyledProfilePicture>
  )
}


// https://res.cloudinary.com/dhxonutdu/image/upload/v1686732984/profile/20230209_LeWagon_0023_bv3mzo.jpg
