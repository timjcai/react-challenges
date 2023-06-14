import { FC } from "react";
import { SocialLink } from "../SocialLinks/SocialLink";
import { PageData } from "../types";
import { StyledProfile } from "./Profile.styles";
import { FlexRowCont, FlexColCont } from "../common/Container/Container.styles";
import { ProfilePicture } from "./ProfilePicture";
import { Button } from "../common/Button/Button.styles";
import { Heading, Paragraph } from "../common/Text";

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
        <Heading>{firstName} {lastName} </Heading>
      </FlexRowCont>
      <ProfilePicture profilePicture={profilePicture} />
      <Paragraph $fontsize={ 1 }>Software Developer</Paragraph>
      <FlexRowCont>
        {socialLinks.map((socialLink) => {
          return <SocialLink socialLink={socialLink} key={socialLink.url} />;
        })}
      </FlexRowCont>
      <Paragraph $fontsize={ 0.5 }>{handle}</Paragraph>
      <Paragraph $fontsize={ 0.5 }>description here</Paragraph>

      <Button>Download Resume Here</Button>
    </StyledProfile>
  );
}
