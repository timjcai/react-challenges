import React, {FC} from "react";
import { StyledProfilePicture } from "./Profile.styles";
import styled from 'styled-components'
import { SocialLink } from "../types";
import { FlexCont } from "../common/Container/Container.styles";
import { SocialLinkButton } from "../SocialLinks/SocialLink";
import { TextOverlay, TextOverlayHeading, TextOverlayParagraph } from "../common/Text";

type ProfilePictureProps = {
  profilePicture?: string,
  firstName?: string,
  lastName?: string,
  job?: string;
  socialLinks: SocialLink[];
}

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
