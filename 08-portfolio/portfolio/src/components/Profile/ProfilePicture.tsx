import React, {FC} from "react";
import { StyledProfilePicture } from "./Profile.styles";

type ProfilePictureProps = {
  profilePicture?: string
}

export const ProfilePicture: FC<ProfilePictureProps> = ({ profilePicture }) => {
  return (
    <StyledProfilePicture>
      <img id="profilepicture" src={ profilePicture } alt="profilepicture"></img>
    </StyledProfilePicture>
  )
}


// https://res.cloudinary.com/dhxonutdu/image/upload/v1686732984/profile/20230209_LeWagon_0023_bv3mzo.jpg
