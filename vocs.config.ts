import { defineConfig } from "vocs";

export default defineConfig({
  baseUrl: "https://charlzyx.pages.dev",
  title: "Charlzyx",
  socials: [
    {
      icon: "github",
      link: "https://github.com/charlzyx",
    },
  ],
  topNav: [
    { text: "开发环境", link: "/dev" },
    { text: "博客", link: "/blog" },
  ],
  sidebar: [
    {
      text: "我的开发环境",
      link: "/dev",
      items: [
        {
          text: "配置文件们",
          link: "/dev/zsh",
          items: [
            {
              text: "zsh",
              link: "/dev/zsh",
            },
            {
              text: "vim",
              link: "/dev/vim",
            },
            {
              text: "Code",
              link: "/dev/code",
            },
          ],
        },
      ],
    },
  ],
});
