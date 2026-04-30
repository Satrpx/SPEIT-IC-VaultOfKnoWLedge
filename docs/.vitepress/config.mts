import{defineConfig} from 'vitepress'

    // https://vitepress.dev/reference/site-config
    export default defineConfig({
      base: "/SPEIT-IC-VaultOfKnoWLedge/",
      title: "SPEIT科创中心知识库",
      description: "Vault of Infinite KnoWLedge!",
      themeConfig: {
        // site logo (shows at top-left in default theme)
        logo: '/logo.png',
        // https://vitepress.dev/reference/default-theme-config
        nav:
        [
          {text: 'Home', link: '/'},
          // {text: 'Examples', link: '/markdown-examples'}
          {text: 'Workshop 1: Linux', link: '/lesson1'},
          {text: 'Workshop 2: Vibe coding', link: '/lesson2'}
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
          } ],

          '/lesson2/' : [ {
            text: 'Workshop 2: Vibe coding',
            items:
            [
              
              {
                text: '课前准备',
                link: './lesson2/handout.zh.pre-class.md'
              },
              {
                text: 'Qwen code 参考手册',
                link: './lesson2/handout.zh.reference.md'
              },
              {
                text: '课堂讲义',
                link: './lesson2/handout.zh.in-class.md'
              }
            ]
          } ]
        },

        socialLinks: [ {
          icon: 'github',
          link: 'https://github.com/Satrpx/SPEIT-IC-VaultOfKnoWLedge'
        } ],
        // add head meta tags for favicon and social preview
        // Note: VitePress also supports `head` at root level, but themeConfig
        // is fine for readable grouping
      },
      head:
      [
        [ 'link', {rel: 'icon', href: '/SPEIT-IC-VaultOfKnoWLedge/logo.png'} ],
        [
          'meta', {
            property: 'og:image',
            content: '/SPEIT-IC-VaultOfKnoWLedge/inspiration-practice.png'
          }
        ],
        [ 'meta', {name: 'twitter:card', content: 'summary_large_image'} ]
      ]
    })
