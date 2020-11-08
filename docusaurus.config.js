module.exports = {
  title: '@edno',
  tagline: 'The tagline of my site',
  favicon: 'img/favicon.ico',
  url: 'https://edno.github.io', // Your website URL
  baseUrl: '/',
  projectName: 'edno.github.io',
  organizationName: 'edno',
  onBrokenLinks: 'warn',
  themeConfig: {
    navbar: {
      title: '@edno',
      logo: {
        alt: '@edno Logo',
        src: 'img/favicon-32x32.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/edno',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/gheitz/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/gregoryheitz',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/edno',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gregory Heitz, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'website/docs',
          editUrl:
            'https://github.com/edno/edno.github.io/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          path: 'website/blog',
          editUrl:
            'https://github.com/edno/edno.github.io/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
