import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// our search keys
const appKey = process.env.ALGOLIA_APP_KEY;
const appID = process.env.ALGOLIA_APPID;
const indexName = process.env.ALGOLIA_INDEX_NAME

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Hookup Guide: SparkFun 9DoF IMU Breakout - IM19',
  tagline: 'Get started with tilt-compensation for RTK GNSS positioning using the SparkFun IM19 IMU breakout board',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.sparkfun.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/SparkFun_IM19_IMU_Breakout/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sparkfun', // Usually your GitHub org/user name.
  projectName: 'SparkFun_IM19_IMU_Breakout', // Usually your repo name.

  onBrokenLinks: 'throw',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/sparkfun/SparkFun_IM19_IMU_Breakout/tree/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],


  plugins: [
    require.resolve('docusaurus-plugin-image-zoom')
  ],


  themeConfig: {
    // Replace with your project's social card
    image: 'img/banner-hookup_guide.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },


    // Adds image zoom feature
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      },
    },


    algolia: {
      // The application ID provided by Algolia
      appId: appID,
      apiKey: appKey,
      indexName: indexName,

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // only search in the SparkFun IM19 IMU documentation - restrict on the section facet
      searchParameters: {
        facetFilters: ['section:SparkFun_IM19_IMU_Breakout'],
      },

    },


    // Header Content
    navbar: {
      title: 'SparkFun 9DoF IMU Breakout - IM19 Hookup Guide',
      logo: {
        alt: 'SparkFun Logo',
        src: '.icons/sparkfun.svg',
      },
      items: [
        {
          href: 'https://github.com/sparkfun/SparkFun_IM19_IMU_Breakout',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://www.sparkfun.com',
          position: 'right',
          className: 'header-sparkfun-link',
          'aria-label': 'SparkFun website'
        },
        {
          href: 'https://community.sparkfun.com',
          position: 'right',
          className: 'header-forums-link',
          'aria-label': 'SparkFun Community Forums',
        },
        {
          href: 'https://docs.sparkfun.com',
          position: 'right',
          className: 'header-all-docs-link',
          'aria-label': 'SparkFun Documentation',
        },
      ],
    },


    // Footer Content
    footer: {
      logo: {
        alt: 'SparkFun Electronics',
        src: '.icons/sparkfun-primary.svg',
        href: 'https://www.sparkfun.com/'
      },
      links: [
        {
          title: 'Product Page',
          items: [
            {
              label: 'IM19 IMU Breakout Board',
              href: 'https://www.sparkfun.com/sparkfun-9dof-imu-breakout-im19.html',
            }
          ],
        },
        {
          title: 'Social Channels',
          items: [
            {
              html: `
<table style="border:none; border-collapse:collapse;">
  <tr style="border:none;">
  <td style="border:none; padding:0;">
    <a href="https://www.youtube.com/sparkfun" target="_blank" rel="noreferrer noopener" aria-label="SparkFun on YouTube">
    <img src=".icons/social-youtube.svg" class="social-image" alt="SparkFun on YouTube" width="32" height="32" />
    </a>
  </td>
  <td style="border:none; padding:0;">
    <a href="https://www.github.com/sparkfun" target="_blank" rel="noreferrer noopener" aria-label="SparkFun on GitHub">
    <img src=".icons/social-github.svg" class="social-image" alt="SparkFun on GitHub" width="32" height="32" />
    </a>
  </td>
  <td style="border:none; padding:0;">
    <a href="https://www.instagram.com/sparkfun/" target="_blank" rel="noreferrer noopener" aria-label="SparkFun on Instagram">
    <img src=".icons/social-instagram.svg" class="social-image" alt="SparkFun on Instagram" width="32" height="32" />
    </a>
  </td>
  <td style="border:none; padding:0;">
    <a href="https://twitter.com/sparkfun" target="_blank" rel="noreferrer noopener" aria-label="SparkFun on Twitter">
    <img src=".icons/social-twitter.svg" class="social-image" alt="SparkFun on Twitter" width="32" height="32" />
    </a>
  </td>
  </tr>
</table>`
            }
          ],
        },
        {
          title: 'SparkFun',
          items: [
            {
              label: 'Community Forum',
              href: 'https://community.sparkfun.com/',
            },
            {
              label: 'SparkFun.com',
              href: 'https://www.sparkfun.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SparkFun Electronics`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
