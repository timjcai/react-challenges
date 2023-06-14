import { FC } from "react";
import { SocialLink } from "../SocialLinks/SocialLink";
import { PageData } from "../types";

type ProfileProps = {
  pageData: PageData
}

export const Profile: FC<ProfileProps> = ({ pageData }) => {
  const {
    user: { firstName, lastName },
    socialLinks,
  } = pageData;

  return (
    <div>
      <h1>{firstName} {lastName} </h1>
      {socialLinks.map((socialLink) => {
        return <SocialLink socialLink={socialLink} key={socialLink.url} />;
      })}
    </div>
  );
}
