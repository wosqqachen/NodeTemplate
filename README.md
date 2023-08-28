<p align="center">
  <img src="https://api.iconify.design/carbon:api-1.svg" width="50" height="50" />
</p>
<pre align="center">
基于 Nuxt3.0 + Vite + pinia + TypeScript 搭建的 API 接口服务网站
🧪 整理稳定、快速、好用的 API 接口(不包含数据库链接)
</pre>

## Preview

## Features

- [x] 接口文档
- [x] 接口限流
- [x] 接口缓存
- [x] 接口测试
- [x] 接口计次
- [ ] 接口监控

## Usage

```
pnpm i
```

### Development

```
pnpm dev
```

### Build

```
pnpm build
```
## Develop

### Server

这里使用 pm2 进行部署，在 `.output` 同级目录下创建 `ecosystem.config.js` 文件：

```js
module.exports = {
  apps: [
    {
      name: 'KZ_API',
      exec_mode: 'cluster',
      instances: '1',
      env: {
        NITRO_PORT: 8040,
        NITRO_HOST: '127.0.0.1',
        NODE_ENV: 'production',
      },
      script: './.output/server/index.mjs',
    },
  ],
}
```

接着执行 `pm2 start ecosystem.config.js` 即可。

### Vercel

转到 [Vercel](https://vercel.com/new) 并选择你的项目，点击  "Deploy"，您的应用程序将在一分钟内上线。

### Netlify

转到 [Netlify](https://app.netlify.com/start) 并选择您的项目，点击 "Deploy site"，您的应用程序将在一分钟内上线。
## 目录结构

```bash
Nuxt3
├── .husky                        # Git hooks 工具配置
├── .vscode                       # vscode配置
├── content                       # 项目文档
├── build                         # 工程化构建相关配置
├── api                       # 接口请求服务管理
    └── modules                # 接口模块
├── assets                    # 工程化处理的静态资源
├── components                # 项目组件
├── composables               # 响应式共享状态
    └── modules                # 接口模块
├── enums                     # 枚举管理
├── layouts                   # 布局组件
├── middleware                # 路由中间件
├── pages                     # 页面视图
├── plugins                   # 项目公共插件
├── public                    # 不需要工程化处理的静态资源
├── store                     # 状态管理
├── utils                     # 静态工具函数
|── app.vue                   # 入口页面
├── .commitlintrc.json            # git提交规范检查配置
├── .editorconfig                 # 编辑器配置
├── .env                          # 环境变量(默认/开发环境)
├─  .env.local                    # 本地环境变量
├── .env.pre                      # 预发布环境变量
├── .env.prod                     # 生产环境变量
├── .env.test                     # 测试环境变量
├── .eslintignore                 # eslint忽略文件检查的配置
├── .eslintrc.js                  # eslint代码规范检查配置
├── .gitignore                    # git仓库提交忽略配置
├── .lintstagedrc.js              # git提交代码规范检查配置
├── .ls-lint.yml                  # 文件命名检查配置
├── .prettierignore               # prettier忽略格式化的配置
├── .prettierrc.js                # prettier格式化配置
├── .stylelintignore              # 样式规范忽略检查的配置
├── .stylelintrc.js               # 样式规范检查配置
├── nuxt.config.ts                # Vite 构建配置入口
├── package.json                  # 项目包管理文件
├── pnpm-lock.yaml                # pnpm包版本管理锁定
├── postcss.config.js             # postcss配置
├── README.md                     # 项目说明
├── tailwind.config.js            # tailwind配置
└── tsconfig.json                 # TS编译的配置
```