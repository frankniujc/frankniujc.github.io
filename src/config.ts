import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://frankniujc.github.io/", // replace this with your deployed domain
  author: "Jingcheng (Frank) Niu",
  desc: "Frank's Personal Website.",
  title: "Frank Niu",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 20,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Scholar",
    href: "https://scholar.google.ca/citations?user=XQuH0EEAAAAJ&hl=en",
    linkTitle: `${SITE.title} on Google Scholar`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/frankniujc",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jingcheng-niu-983b9bb4/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCY8cMinzpSB3pXrnRjw_u5Q",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/frankniujc",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
];
