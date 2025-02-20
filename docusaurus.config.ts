import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'devdoc',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gmnk616.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/devdoc/',
  // baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gmnk616', // Usually your GitHub org/user name.
  projectName: 'devdoc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // TODO: 以下`Docusaurus Faster`はdocusaurusのコンパイル高速化の為、ver.3.6.0から導入されています。
  future: {
    experimental_faster: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // 'Docs-only mode'で実行
          routeBasePath: '/',
          // 最終更新日時の表示有無
          showLastUpdateTime: true,
          // 最終更新者の表示有無
          showLastUpdateAuthor: true,
          // サイドバー
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // ブログモードはOFF
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'devdoc',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'document/index',
          position: 'left',
          label: 'devdoc',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
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
          items: [
            {
              label: 'doc',
              to: '/',
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
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // コードブロックに色を付けるプログラム言語を指定
      // https://prismjs.com/#supported-languages
      additionalLanguages:[
        'bash',
        // 'java'
        'css',
        'ini',
        'powershell',
        'json',
      ],
    },
    // 見出し(右側)の表示数を設定
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    docs: {
      sidebar: {
        // 指定したサイドバーの項目選択時に、他のサイドバーを自動で閉じる
        autoCollapseCategories: true,
        // 隠しサイドバー
        hideable: true,
      }
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        backgroud:{
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    }
  } satisfies Preset.ThemeConfig,
  plugins:[
    // 画像のズーム機能
    require.resolve("docusaurus-plugin-image-zoom"),
  ]
};

export default config;
