export default {
  base: "/vite-blog",
  title: "VitePress",
  description: "VitePress Blog",
  head: [["link", { rel: "icon", href: "/lightning.svg" }]],
  lastUpdated: true, //开启上次更新时间
  appearance: true, //是否启用“暗模式”
  //主题配置
  themeConfig: {
    siteTitle: "vite-blog",
    logo: "/lightning.svg",
    nav: [
      {
        text: "💻前端",
        activeMatch: "/frontEnd/",
        items: [
          { text: "🟧 HTML", link: "../frontEnd/html/html" },
          { text: "🟥 CSS", link: "../frontEnd/css/css" },
          { text: "🟨 JavaScript", link: "../frontEnd/javaScript/javaScript" },
          { text: "🟦 TypeScript", link: "../frontEnd/typeScript/typeScript" },
          { text: "🟩 Vue", link: "../frontEnd/vue/vue" },
        ],
      },
      {
        text: "🧊部署",
        link: "/deploy/index",
      },
    ],
    //社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/lch-coder" }],
    //侧边栏
    sidebar: {
      "/frontEnd/": getFrontEndSidebar(),
    },
  },
};

function getFrontEndSidebar() {
  return [
    {
      text: "🟧 HTML",
      collapsible: true,
      items: [
        { text: "HTML 学习路径", link: "/frontEnd/html/html" },
        { text: "HTML 零碎笔记", link: "/FrontEnd/html/html" },
      ],
    },
  ];
}
