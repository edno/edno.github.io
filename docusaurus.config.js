module.exports = {
  title: '@edno',
  tagline: 'A bit of everything learnt from everywhere...',
  favicon: 'img/favicon.ico',
  url: 'https://edno.github.io', // Your website URL
  baseUrl: '/',
  projectName: 'edno.github.io',
  organizationName: 'edno',
  onBrokenLinks: 'warn',
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      style: 'dark',
      title: '@edno',
      logo: {
        alt: '@edno',
        src: 'img/favicon-32x32.png',
      },
      items: [
        {
          to: 'projects',
          activeBasePath: 'projects',
          label: 'Coding',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        { to: 'photos', activeBasePath: 'photos', label: 'Photos', position: 'left' },
        { to: 'me', label: 'About', position: 'left' },
        {
          href: 'https://twitter.com/gregoryheitz',
          label: 'twitter',
          position: 'right',
          className: 'icon-link'
        },
        {
          href: 'https://github.com/edno',
          label: 'github',
          position: 'right',
          className: 'icon-link'
        },
        {
          href: 'https://www.npmjs.com/~edno',
          label: 'npm',
          position: 'right',
          className: 'icon-link'
        },
        {
          href: 'https://packagist.org/packages/edno/',
          label: 'packagist',
          position: 'right',
          className: 'icon-link'
        },
        {
          href: 'https://www.flickr.com/photos/edno81',
          label: 'flickr',
          position: 'right',
          className: 'icon-link'
        },
        {
          href: 'http://instagram.com/edno_gh',
          label: 'instagram',
          position: 'right',
          className: 'icon-link'
        },
        {
          href: 'https://www.strava.com/athletes/30049977',
          label: 'strava',
          position: 'right',
          className: 'icon-link'
        },
        {
          href: 'https://www.linkedin.com/in/gheitz/',
          label: 'linkedin',
          position: 'right',
          className: 'icon-link'
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Gregory Heitz, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./website/projects/sidebars.js'),
          routeBasePath: "/",
          path: 'website/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "/blog/",
          path: 'website/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
