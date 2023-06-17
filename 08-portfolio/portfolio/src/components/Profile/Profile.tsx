import { FC } from "react";
import { SocialLinkButton } from "../SocialLinks/SocialLink";
import { PageData } from "../types";
import { StyledProfile } from "./Profile.styles";
import { FlexRowCont, FlexCont } from "../common/Container/Container.styles";
import { ProfilePicture } from "./ProfilePicture";
import { Button } from "../common/Button/Button.styles";
import { Heading, Paragraph } from "../common/Text";

type ProfileProps = {
  pageData: PageData
}

export const Profile: FC<ProfileProps> = ({ pageData }) => {
  const {
    user: { firstName, lastName, handle, profilePicture, job },
    socialLinks,
  } = pageData;

  return (
    <StyledProfile>
      <ProfilePicture profilePicture={profilePicture} firstName={firstName} lastName={lastName} job={job} socialLinks={ socialLinks } />
      {/* <FlexCont $d={'row'} $m={'20px 0px 0px 0px'} $jc={'center'} $g={ 16 }>
        {socialLinks.map((socialLink) => {
          return <SocialLink socialLink={socialLink} key={socialLink.url} />;
        })}
      </FlexCont> */}
      {/* <FlexCont $d={'column '} $m={'1em;'} $jc={'center'} $ai={ 'center' }>
        <Paragraph $fontsize={ 0.5 }>description here</Paragraph>

        <Button>Download Resume Here</Button>
      </FlexCont> */}
    </StyledProfile>
  );
}
