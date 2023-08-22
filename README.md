<p align="center">
  <img src="https://api.iconify.design/carbon:api-1.svg" width="50" height="50" />
</p>
<pre align="center">
🧪 整理稳定、快速、好用的 API 接口
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
