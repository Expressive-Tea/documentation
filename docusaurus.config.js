/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Expressive Tea',
  tagline: 'A simple, clean, flexible and modulable web framework',
  url: 'https://docs.expressive-tea.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Expressive-Tea', // Usually your GitHub org/user name.
  projectName: 'expresive-tea', // Usually your repo name.
  themeConfig: {
    defaultMode: 'light',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: true
    },
    navbar: {
      title: 'Expressive Tea',
      logo: {
        alt: 'Expressive Tea',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {href: 'https://expressive-tea.io/blog/', label: 'Blog', position: 'left'},
        {
          to: 'community/',
          activeBasePath: 'community',
          label: 'Community',
          position: 'left',
        },
        {
          href: 'https://github.com/Expressive-Tea/expresive-tea',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('./theme-prism')
    },
    footer: {
      logo: {
        alt: 'Made in Mexico',
        src: 'img/made-mexico.png'
      },
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © 2019 - ${new Date().getFullYear()} Expressive Tea.`,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: false,
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./static/scss/style.scss'),
        }
      },
    ],
  ], 
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        // ... other options
      },
    ],
  ],
  clientModules: [
    'bootstrap/dist/js/bootstrap.bundle.min.js'
  ]
};
