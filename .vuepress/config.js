const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vuepress Starter Kit",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "A sample project to quickly get up and running with vuepress",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "ahmedwaleedmalik/vuepress-starter-kit",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: true,
    nav: [
      {
        text: "Guide",
        link: "/content/guide/",
      },
      {
        text: "Config",
        link: "/content/config/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "using-vue"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      "@vuepress/active-header-links",
      "@vuepress/medium-zoom",
      "@vuepress/back-to-top",
      "vuepress-plugin-container",
    ],
  ],
  markdown: {
    lineNumbers: true,
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  },
};
