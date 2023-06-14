export type SocialType = "Github" | "Twitter" | "Youtube" | "Website" | "Blog" | "Linkedin";

export type SocialLink = {
  socialType: SocialType;
  url: string;
};
