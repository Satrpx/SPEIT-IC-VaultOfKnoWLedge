A Vault of Infinite KnoWLedge!
All copyrights reserved
SPEIT Innovation Center

Install Dependency:
npm i vitepress

To run this project:

| 目的 | 命令 (NPM) | 说明 |
| :--- | :--- | :--- |
| **日常开发** | `npm run docs:dev` | 实时热更新，用于写文档。 |
| **模拟部署** | `npm run docs:build` | **关键步**：将 Markdown 转为 HTML 静态文件。 |
| **最终核对** | `npm run docs:preview` | **关键步**：预览 `build` 后的成品。 |

更新Workshop需要修改的内容：
1. [config.mts](./docs/.vitepress/config.mts): 更新nav和sidebar
2. [index](./docs/index.md): 增加入口
3. 在docs目录增加lessonN.md: 作为目录
4. 在docs和docs/public目录增加lessonN文件夹分别用于生成网页和存放资料
