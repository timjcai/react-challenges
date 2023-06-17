import { FC } from "react";
import { PageData } from "../types";
import { StyledProfile } from "./Profile.styles";
import { ProfilePicture } from "./ProfilePicture";
import { Button } from "../common/Button/Button.styles";
import { Heading, Paragraph } from "../common/Text";

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
      {/* <FlexCont $d={'column '} $m={'1em;'} $jc={'center'} $ai={ 'center' }>
        <Paragraph $fontsize={ 0.5 }>description here</Paragraph>

        <Button>Download Resume Here</Button>
      </FlexCont> */}
    </StyledProfile>
  );
}
