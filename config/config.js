import pageRoutes from './router.config'
import proxy from './proxy.js'

// ref: https://umijs.org/config/
const config = {
  treeShaking: true,
  routes: pageRoutes,
  proxy: proxy['dev'],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
          webpackChunkName: true,
          level: 3,
        },
        title: '登录',
        dll: true,
        hd: true,
        fastClick: false,
        locale: {
          enable: true,
          default: 'zh-CN',
        },
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  history: 'hash', // 默认是 browser
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  outputPath: './dist',
  hash: true,
  publicPath: process.env.publicPath || './',
  manifest: {
    basePath: '/',
  },
  extraBabelPlugins: [
    ['import', { libraryName: 'antd-mobile', style: true }], //按需加载antd-mobile样式文件
  ],
}

export default config
