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
          label: ' ',
          position: 'right',
          className: 'nav-icon github'
        },
        {
          href: 'https://twitter.com/expressive_tea',
          label: ' ',
          position: 'right',
          className: 'nav-icon twitter'
        },
        {
          href: 'https://www.facebook.com/expressivetea',
          label: ' ',
          position: 'right',
          className: 'nav-icon facebook'
        },
      ],
    },
    prism: {
      defaultLanguage: "typescript",
      theme: require("prism-react-renderer/themes/dracula")
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
              label: 'About This Project',
              to: 'docs/',
            },
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'http://stackoverflow.com/tags/expressive-tea',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/expressive_tea',
            },
            {
              label: 'Gitter',
              href: 'https://gitter.im/Zero-OneiT/expresive-tea',
            },
            {
              label: 'Mail List',
              href: 'https://groups.google.com/forum/#!forum/expressive-tea/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Our Team',
              to: 'community/team',
            },
            {
              label: 'Support Us',
              to: 'community/support',
            },
            {
              label: 'Blog',
              href: 'https://expressive-tea.io/blog/',
            },
            {
              label: 'Contribute',
              to: 'community/contributing',
            }
          ],
        },
        {
          title: 'Help Us',
          items: [
            {
              label: 'Report an Issue',
              href: 'https://github.com/Zero-OneiT/expresive-tea',
            },
            {
              label: 'Ask a Feature',
              href: 'https://github.com/Zero-OneiT/expresive-tea',
            },
            {
              label: 'Source Code',
              href: 'https://github.com/Zero-OneiT/expresive-tea',
            }
          ],
        },
      ],
      copyright: `Copyright © 2019 - ${new Date().getFullYear()} Expressive Tea - Built on Docusaurus`,
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
  ]
};
