export const siteConfig = {
  author: 'Frank Niu',
  title: 'Frank Niu',
  subtitle: 'Personal Website.',
  description: 'Frank Niu\'s personal website.',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  socialLinks: [
    {
      text: 'Scholar',
      href: 'https://scholar.google.com/citations?user=XQuH0EEAAAAJ&hl=en',
      icon: 'i-academicons-google-scholar', // or 'i-simple-icons-googlescholar'
      header: 'i-academicons-google-scholar', // or 'i-simple-icons-googlescholar'
    },
    {
      text: 'GitHub',
      href: 'https://github.com/frankniujc',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Twitter',
      href: 'https://x.com/frankniujc',
      icon: 'i-simple-icons-twitter',
      header: 'i-ri-twitter-x-line',
    },
    {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/jingcheng-niu-983b9bb4/',
      icon: 'i-simple-icons-linkedin',
    },
  ],
  header: {
    logo: {
      src: '/favicon.ico',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Publications',
        href: '/publications',
      },
      {
        text: 'Teaching',
        href: '/teaching',
      },
      {
        text: 'Misc',
        href: '/misc',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
    ],
  },
  footer: {},
}

export default siteConfig
