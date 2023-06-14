import { FC } from "react";
import { SocialLink } from "../SocialLinks/SocialLink";
import { PageData } from "../types";
import { StyledProfile } from "./Profile.styles";
import { FlexRowCont } from "../common/Container/Container.styles";
import { ProfilePicture } from "./ProfilePicture";

type ProfileProps = {
  pageData: PageData
}

export const Profile: FC<ProfileProps> = ({ pageData }) => {
  const {
    user: { firstName, lastName, handle, profilePicture },
    socialLinks,
  } = pageData;

  return (
    <StyledProfile>
      <h2>{firstName} {lastName} </h2>
      <ProfilePicture profilePicture={ profilePicture } />
      <p>{ handle }</p>
      <FlexRowCont>
        {socialLinks.map((socialLink) => {
          return <SocialLink socialLink={socialLink} key={socialLink.url} />;
        })}
      </FlexRowCont>
    </StyledProfile>
  );
}
