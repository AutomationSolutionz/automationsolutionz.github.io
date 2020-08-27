module.exports = {
  title: 'Automation Solutionz',
  tagline: 'Zeuz Server & Zeuz Node',
  url: 'https://automationsolutionz.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'AutomationSolutionz', // Usually your GitHub org/user name.
  projectName: 'automationsolutionz.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Automation Solutionz',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
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
          href: 'https://github.com/AutomationSolutionz',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://automationsolutionz.com',
          label: 'Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Zeuz Node',
              to: 'docs/zeuz-node/',
            },
            {
              label: 'Zeuz Server',
              to: 'docs/zeuz-server/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/3581947',
            },
            {
              label: 'Contact Us',
              href: 'mailto:info@automationsolutionz.com',
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
              href: 'https://github.com/AutomationSolutionz',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Automation Solutionz, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'welcome',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
