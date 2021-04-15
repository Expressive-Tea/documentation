/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Expressive Tea',
  tagline: 'A simple, clean, flexible and modulable web framework',
  url: 'https://docs.expressive-tea.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Zero-OneIT', // Usually your GitHub org/user name.
  projectName: 'expresive-tea', // Usually your repo name.
  themeConfig: {
    defaultMode: 'light',
    disableSwitch: true,
    navbar: {
      title: 'Expressive Tea',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
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
          href: 'https://github.com/Zero-OneIT/expresive-tea',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl')
    },
    footer: {
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
      copyright: `Copyright © 2019 - ${new Date().getFullYear()} Expressive Tea. Built with Docusaurus.`,
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
    'docusaurus-plugin-sass'
  ],
  clientModules: [
    'bootstrap/dist/js/bootstrap.min.js',
    'popper.js'
  ]
};
