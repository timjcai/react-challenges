import { FC } from "react";
import { PageData } from "../types";
import { StyledProfile } from "./Profile.styles";
import { ProfilePicture } from "./ProfilePicture";

type ProfileProps = {
  pageData: PageData
}

export const Profile: FC<ProfileProps> = ({ pageData }) => {
  const {
    user: { firstName, lastName, profilePicture, job },
    socialLinks,
  } = pageData;

  return (
    <StyledProfile>
      <ProfilePicture profilePicture={profilePicture} firstName={firstName} lastName={lastName} job={job} socialLinks={ socialLinks } />
    </StyledProfile>
  );
}
