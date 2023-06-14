import { SocialLink } from "./social";

export type User = {
  firstName: string;
  lastName: string;
  handle: string;
}

export type PageData = {
  user: User;
  socialLinks: SocialLink[]
}

export type PageDb = {
  [key: string]: PageData;
};
