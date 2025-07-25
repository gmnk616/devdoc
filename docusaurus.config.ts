import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { PluginOptions } from '@easyops-cn/docusaurus-search-local';

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
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
    },
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      rspackPersistentCache: true,
      ssgWorkerThreads: true,
      mdxCrossCompilerCache: true,
    },
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

  themes: [
    [
      `@easyops-cn/docusaurus-search-local`,
      {
        hashed: true,
        // language: ["en", "ja"],
        language: ["ja"],
        indexDocs: true,                          // ドキュメント内検索を有効にするかどうか
        indexBlog: false,                         // ブログ内検索を有効にするかどうか
        indexPages: true,                         // ページ内検索を有効にするかどうか
        docsRouteBasePath: "docs",                // docsの検索対象ディレクトリ(`/`は書かない)
        highlightSearchTermsOnTargetPage: true,   // 検索結果をハイライト表示
        removeDefaultStemmer: true,               // 検索パフォーマンスを犠牲にして単語の一部を検索可能
      } satisfies PluginOptions,
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'devdoc',
      logo: {
        alt: 'My Site Logo',
        src: 'img/sdesign_00174.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'document/index',
          position: 'left',
          label: 'devdoc',
        },
        {
          type: 'doc',
          docId: 'app/index',
          sidebarid: 'app',
          position: 'left',
          label: 'app',
        },
        {
          type: 'doc',
          docId: 'plang/index',
          sidebarid: 'plang',
          position: 'left',
          label: 'plang',
        },
        {
          href: 'https://docusaurus.io/',
          label: 'Docusaurus',
          position: 'right',
        },
        {
          href: 'https://github.com/gmnk616/devdoc',
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
              label: 'devdoc',
              to: '/',
            },
            {
              label: 'GitHub(devdoc)',
              href: 'https://github.com/gmnk616/devdoc',
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
              label: 'Docusaurus',
              href: 'https://docusaurus.io/',
            },
            {
              label: 'GitHub(Docusaurus)',
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
