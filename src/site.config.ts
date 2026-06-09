export const SITE_SETTINGS = {
  title: "Rato", // ブログのタイトル
  description: "日々のアウトプットや探求をまとめる個人データベース", // 検索結果に表示される説明文（SEOで超重要）
  owner: "Rato", // サイトの所有者名
  googleAnalyticsId: "G-ZJF7V1KPCE", // ⬅️ コピーしたGA4の「測定ID」を貼り付け
  googleSiteVerification: "nxCYP2ieh7lmr3cZhQDHm03_bH9Or3al_Zk6Z3G5Ing", // ⬅️ コピーした確認用文字列を貼り付け
  ogImages:
    "https://res.cloudinary.com/dellp9a4z/image/upload/v1756758385/og-home_ejuqq8.png", // ※後日、自分の画像URLに変更できます
  socials: [
    {
      icon: "github",
      label: "GitHub",
      url: "https://github.com/aspratou", // あなたのGitHub URL
      handle: "aspratou",
    },
    // 👇 YouTubeチャンネルへのリンクなど、必要に応じて追加・変更できます
    {
      icon: "youtube",
      label: "YouTube",
      url: "https://youtube.com/", // チャンネルのURLを入れる
      handle: "YouTube Channel",
    },
    {
      icon: "instagram",
      label: "Instagram",
      url: "https://instagram.com/", // チャンネルのURLを入れる
      handle: "Instagram",
    },
  ],
};


export const header = [
  {
    name: "Game",
    url: "/Game",
  },
  {
    name: "Book",
    url: "/projects",
  },
  {
    name: "English",
    url: "/english",
  },
  {
    name: "Diary",
    url: "/blog",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  {
    name: "About",
    url: "/about",
  },
];

export const footer = [
  {
    title: "Content", // 💡 メインのナビゲーション
    links: [
      {
        name: "Game",
        url: "/Game",
      },
      {
        name: "Book",
        url: "/projects",
      },
      {
        name: "English",
        url: "/english",
      },
     {
        name: "Diary",
        url: "/blog",
      },
    ],
  },
  {
    title: "Legal", // 💡 Resourcesから「Legal」に変更し、お気に入りの位置を維持
    links: [
      {
        name: "Contact",
        url: "/contact",
      },
      {
        name: "Privacy Policy",
        url: "/legal/privacy-policy", // テンプレート内のプライバシーポリシーのURL
      },
      {
        name: "Terms of Service", // 💡 新しくここに並びとして追加
        url: "/legal/terms-of-service", // テンプレート内の利用規約のURL
      },
    ],
  },
  {
    title: "Links", // 💡 3列目（右側）に新設
    links: [
      {
        name: "GitHub",
        url: "https://github.com/aspratou",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@genshin_english", // 後ほど実際のURLに差し替え可能です
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/rato.dance/", // 💡 あなたのインスタのアカウントURLに書き換えてください
      },
    ],
  },
];