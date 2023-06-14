import { FC } from "react";
import { SocialLink } from "../SocialLinks/SocialLink";
import { PageData } from "../types";
import { StyledProfile } from "./Profile.styles";
import { FlexRowCont, FlexColCont } from "../common/Container/Container.styles";
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
      <FlexRowCont>
        <h2>{firstName} {lastName} </h2>
      </FlexRowCont>
      <ProfilePicture profilePicture={profilePicture} />
      <p>Software Developer</p>
      <FlexRowCont>
        {socialLinks.map((socialLink) => {
          return <SocialLink socialLink={socialLink} key={socialLink.url} />;
        })}
      </FlexRowCont>
      <p>{handle}</p>
      <p>description here</p>

      <button>Download Resume Here</button>
    </StyledProfile>
  );
}
