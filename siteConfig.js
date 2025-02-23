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
      title: '',
      logo: {
        alt: 'Site Logo',
        src: 'img/zeuz-logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/course-info',
          label: 'Course',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/AutomationSolutionz',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://forum.automationsolutionz.com/',
          label: 'Forum',
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
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local'),
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/zeuz-logo.svg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.webmanifest',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/icons/apple-touch-icon-180x180.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/icons/apple-touch-icon-180x180.png',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/zeuz-logo.svg',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
};
