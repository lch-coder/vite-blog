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
          { text: "🟥 CSS", link: "../frontEnd/css/grid" },
          { text: "🟨 JavaScript", link: "../frontEnd/javaScript/lodash" },
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
      "/frontEnd/css": [
        {
          text: "CSS",
          collapsible: true,
          items: [{ text: "Grid 布局", link: "/frontEnd/css/grid" }],
        },
      ],
      "/frontEnd/javaScript": [
        {
          text: "javaScript",
          collapsible: true,
          items: [
            { text: "lodash常用操作", link: "/frontEnd/javaScript/lodash" },
          ],
        },
      ],
      "/frontEnd/vue": [
        {
          text: "vue",
          items: [
            { text: "ref", link: "/frontEnd/vue/ref" },
            { text: "vue3+tsx封装组件", link: "/frontEnd/vue/encapsulation" },
            {
              text: "vue3+vite使用monaco-editor编辑器  ",
              link: "/frontEnd/vue/monacoEditor",
            },
          ],
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
