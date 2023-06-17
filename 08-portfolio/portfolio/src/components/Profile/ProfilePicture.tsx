import React, {FC} from "react";
import { StyledProfilePicture } from "./Profile.styles";
import styled from 'styled-components'

type ProfilePictureProps = {
  profilePicture?: string,
  firstName?: string,
  lastName?: string,
  job?: string;
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

export const ProfilePicture: FC<ProfilePictureProps> = ({ profilePicture, firstName, lastName, job }) => {
  return (
    <StyledProfilePicture>
      <img id="profilepicture" src={profilePicture} alt="profilepicture"></img>
      <TextOverlay>
        <TextOverlayHeading>{firstName} {lastName}</TextOverlayHeading>
        <TextOverlayParagraph>{job}</TextOverlayParagraph>
      </TextOverlay>
    </StyledProfilePicture>
  )
}


// https://res.cloudinary.com/dhxonutdu/image/upload/v1686732984/profile/20230209_LeWagon_0023_bv3mzo.jpg
