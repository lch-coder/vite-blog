export default {
  base: "/vite-blog/",
  title: "VitePress",
  lang: "zh-CN",
  description: "VitePress Blog",
  ignoreDeadLinks: true,
  head: [["link", { rel: "icon", href: "favicon.ico" }]],
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
          { text: "🟩 Vue", link: "../frontEnd/vue/ref" },
          { text: "🟪 Element-Plus", link: "../frontEnd/elementPlus/el-table" },
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
      "/frontEnd/html": [
        {
          text: "HTML",
          collapsible: true,
          items: [
            { text: "HTML 学习路径", link: "/frontEnd/html/html" },
            { text: "HTML 零碎笔记", link: "/FrontEnd/html/html" },
          ],
        },
      ],
      "/frontEnd/vue": [
        {
          text: "vue",
          items: [{ text: "ref", link: "/frontEnd/vue/ref" }],
        },
      ],
      "/frontEnd/elementPlus": [
        {
          text: "Element-Plus",
          collapsible: true,
          items: [
            { text: "el-radio", link: "/frontEnd/elementPlus/el-radio" },
            { text: "el-table", link: "/frontEnd/elementPlus/el-table" },
            { text: "el-form", link: "/frontEnd/elementPlus/el-form" },
          ],
        },
      ],
    },
  },
};
