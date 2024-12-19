import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  plugins: [],
  title: "オズチャット -Oz Chat- 公式ガイドブック",
  tagline:
    "AI恋愛シミュレーションチャットゲーム「オズチャット -Oz Chat-」の公式ガイドブックです。",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://docs.0z.chat",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/Trippy-inc/ozchat-docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    defaultMode: "light",
    disableSwitch: false,

    // Replace with your project's social card
    image: "img/ogp.png",

    metadata: [
      {
        name: "description",
        content:
          "AI恋愛シミュレーションチャットゲームアプリ「オズチャット -Oz Chat-」の公式攻略ガイドブックです。ゲームの攻略情報やキャラクター、性格ステータスやMPの説明、課金システムや安全性に関する情報などを掲載しています。",
      },
    ],

    navbar: {
      title: "オズチャット -Oz Chat- 公式ガイドブック",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "攻略情報",
        },
        {
          href: "https://0z.chat",
          label: "今すぐプレイ",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "ページ",
          items: [
            {
              label: "オズチャットとは",
              to: "/docs/intro",
            },
            {
              label: "ゲーム攻略",
              to: "/docs/category/ゲーム攻略",
            },
            {
              label: "キャラクター攻略",
              to: "/docs/category/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E6%94%BB%E7%95%A5%E3%82%AC%E3%82%A4%E3%83%89",
            },
          ],
        },
        {
          title: "コミュニティ",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/WA3GApJgcZ",
            },
            {
              label: "X",
              href: "https://x.com/0z_chat",
            },
          ],
        },
        {
          title: "リンク",
          items: [
            {
              label: "公式サイト",
              href: "https://0z.chat/ja/",
            },
            {
              label: "利用規約",
              href: "https://docs.tr1ppy.com/tr1ppy/Oz-013ef3107998491380bc09a4046e9f8b",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Trippy Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
