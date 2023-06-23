import { DevIconType } from "./devicon";
import { SocialLink } from "./social";

export type User = {
  firstName: string;
  lastName: string;
  handle: string;
  profilePicture?: string;
  job?: string;
}

export type PageData = {
  user: User;
  socialLinks: SocialLink[]
}

export type PageDb = {
  [key: string]: PageData;
};

export type stackType = {
  heading: string;
  labels: DevIconType[];
}
