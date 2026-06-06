export const SITE_SETTINGS = {
  title: "my-database", // ブログのタイトル
  description: "社会システムの解説や言語のニュアンス、ゲームメカニクスまで、日々のアウトプットや探求をまとめる個人データベース。", // 検索結果に表示される説明文（SEOで超重要）
  owner: "aspratou", // サイトの所有者名
  ogImages:
    "https://res.cloudinary.com/dellp9a4z/image/upload/v1756758385/og-home_ejuqq8.png", // ※後日、自分の画像URLに変更できます
  socials: [
    {
      icon: "github",
      label: "GitHub",
      url: "https://github.com/aspratou", // あなたのGitHub URL
      handle: "aspratou",
    },
    // 👇 YouTubeチャンネル（現代社会のバグ等の解説動画）へのリンクなど、必要に応じて追加・変更できます
    {
      icon: "youtube",
      label: "YouTube",
      url: "https://youtube.com/", // チャンネルのURLを入れる
      handle: "YouTube Channel",
    },
  ],
};


export const header = [
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  {
    name: "Newsletter",
    url: "/newsletter",
  },
];

export const footer = [
  {
    title: "Content",
    links: [
      {
        name: "Search",
        url: "/search",
      },
      {
        name: "Blog",
        url: "/blog",
      },
      {
        name: "Projects",
        url: "/projects",
      },
      {
        name: "About",
        url: "/about",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Contact",
        url: "/contact",
      },
      {
        name: "Newsletter",
        url: "/newsletter",
      },
      {
        name: "RSS",
        url: "/rss.xml",
      },
      {
        name: "Sitemap",
        url: "/sitemap-index.xml",
      },
    ],
  },
];
