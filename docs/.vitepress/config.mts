import{defineConfig} from 'vitepress'

    // https://vitepress.dev/reference/site-config
    export default defineConfig({
      base: "/SPEIT-IC-VaultOfKnoWLedge/",
      title: "SPEIT科创中心知识库",
      description: "Vault of Infinite KnoWLedge!",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav:
        [
          {text: 'Home', link: '/'},
          // {text: 'Examples', link: '/markdown-examples'}
          {text: 'Workshop 1: Linux', link: '/lesson1'}
        ],

        sidebar: {
          // '/' : [ {
          //   text: 'Examples',
          //   items:
          //   [
          //     {text: 'Markdown Examples', link: '/markdown-examples'},
          //     {text: 'Runtime API Examples', link: '/api-examples'}
          //   ]
          // } ],
          '/lesson1/' : [ {
            text: 'Workshop 1: Linux & Git',
            items:
            [
              {
                text: 'SPEIT 科创工作坊讲义',
                link: '/lesson1/00_workshop_linux_git_lecture_notes'
              },
              {text: '课前准备', link: '/lesson1/01-课前准备'},
              {text: '环境配置与镜像源', link: '/lesson1/02-环境配置与镜像源'},
              {
                text: 'Linux / Git 命令速查',
                link: '/lesson1/03-Linux-Git-命令速查'
              },
              {text: '项目复现流程', link: '/lesson1/04-项目复现流程'},
              {text: '常见问题与排错', link: '/lesson1/05-常见问题与排错'}
            ]
          } ]
        },

        socialLinks:
        [ {icon: 'github', link: 'https://github.com/vuejs/vitepress'} ]
      }
    })
