import type { NavData } from './types'

export const NAV_DATA: NavData[] = [
  {
    title: '1panel部署',
    items: [
      {
        icon: 'https://1panel.cn/docs/img/logo-white.png',
        title: '1panel源码',
        badge: {
          text: '1panel',
          type: 'info',
        },
        desc: '服务器部署1panel',
        link: 'https://1panel.cn/docs/installation/online_installation/#1'
      },
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: '1panel应用商店',
        badge: {
          text: '1panel',
          type: 'tip',
        },
        desc: '1panel第三方应用商店',
        link: 'https://github.com/2977094657/BiliHistoryFrontend'
      },
      {
        icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
        title: 'FDM下载器',
        badge: {
          text: '油管下载器',
          type: 'warning',
        },
        desc: '這是一款在Windows, macOS, Android 及Linux 作業系統下，強大又現代的下载加速器。',
        link: 'https://www.freedownloadmanager.org/zh/download.htm'
      },
       {
        icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
        title: 'FDM 的第三方附加组件',
        badge: {
          text: '油管下载器',
          type: 'warning',
        },
        desc: '免费下载管理器附加组件。支持从各种站点下载视频',
        link: 'https://github.com/meowcateatrat/elephant'
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        badge: {
          text: '茂神牛批',
          type: 'warning',
        },
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech'
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        badge: {
          text: '茂神牛批',
          type: 'danger',
        },
        desc: '开发人员的工具箱',
        link: 'https://tool.lu'
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        badge: {
          text: '请给茂茂点点小星星哦',
          type: 'info',
        },
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn'
      }
    ]
  },
  
  {
    title: '甲骨文部署站点导航',
    items: [
      {
        icon: 'https://1panel.cn/docs/img/logo-white.png',
        title: '1panel后台',
        desc: '1panel后台登录',
        link: 'http://140.245.32.16:23371/1panel'
      },
      {
        icon: 'https://static.hdslb.com/mobile/img/512.png',
        title: 'B站视频下载',
        desc: '用DOCKER部署的B站视频下载器',
        link: 'http://140.245.32.16:5173'
      },
      {
        icon: 'https://qwerty.fe-mm.com/apple-touch-icon.png',
        title: 'dockerWEBUI',
        desc: 'dockerWEBUI界面版',
        link: 'http://140.245.32.16:5001'
      },
      {
        icon: 'https://b3log.org/siyuan/static/logo.svg',
        title: '思源笔记',
        desc: '部署在1panel上的思源笔记',
        link: 'http://140.245.32.16:6806'
      },
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'uptime',
        desc: '用于监控网站的uptime',
        link: 'http://140.245.32.16:3001'
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: '阅读3',
        desc: '服务器部署的阅读3webui',
        link: 'http://140.245.32.16:4396'
      },
      {
        icon: 'https://min.io/resources/img/logo.svg',
        title: 'minio S3存储桶',
        desc: '搭建在VPS上的S3存储桶',
        link: 'http://140.245.32.16:9001'
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        title: '异次元店铺系统',
        desc: '二次元发卡系统',
        link: 'http://140.245.32.16:8080'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: '情报官',
        desc: '一个敏感的信息挖掘工具，可以从网站、微信公众号、社交平台提炼肇，自动做标签归类上传数据库',
        link: 'http://140.245.32.16:8090'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: '提示词优化器',
        desc: '一个提示词优化器',
        link: 'http://140.245.32.16:8081'
      },
       {
        icon: 'https://telegraph-image-e9z.pages.dev/favicon.ico',
        title: 'TG图床',
        desc: 'Telegram图床',
        link: 'https://tc.52cbg.cn/'
      },
       {
        icon: 'https://telegraph-image-e9z.pages.dev/favicon.ico',
        title: 'astrBot',
        desc: '聊天机器人',
        link: 'http://140.245.32.16:6185/'
      },
    ]
  },
 
  {
    title: '搭建的网站',
    items: [
      {
        icon: '/logo.png',
        title: 'adguardHOME',
        desc: '服务器上部署的adguardHOME',
        link: 'https://ad.52cbg.cn'
      },
      {
        icon: '/logo.png',
        title: '大强说副业',
        desc: '',
        link: 'http://v.52cbg.cn'
      },
      {
        icon: '/logo.png',
        title: 'webdav',
        desc: '',
        link: 'https://webdav.52cbg.cn/'
      },
      {
        icon: '/logo.png',
        title: '订阅编辑',
        desc: 'CF-Workers-SUB订阅编辑',
        link: 'https://cloud.52cbg.cn/adminroot'
      },
      {
        icon: '/logo.png',
        title: 'cloud盘',
        desc: '',
        link: 'https://pan.52cbg.cn/'
      },
      {
        icon: '/logo.png',
        title: '利润计算器',
        desc: '',
        link: 'https://gj.52cbg.cn/'
      },
      {
        icon: '/logo.png',
        title: 'DOC文档',
        desc: '',
        link: 'https://doc.52cbg.cn/'
      },
    ]
  },
  
  {
    title: '站点生成器',
    items: [
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://astro.build'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.dev'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org'
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: 'https://docusaurus.io/zh-CN'
      }
    ]
  },

  {
    title: '摸鱼专用',
    items: [
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: '摸摸鱼热榜',
        // desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: 'https://momoyu.cc'
      },
      {
        icon: 'https://v.qq.com/favicon.ico',
        title: '腾讯视频',
        // desc: '中国领先的在线视频媒体平台，海量高清视频在线观看',
        link: 'https://v.qq.com'
      },
      {
        icon: 'https://static.hdslb.com/mobile/img/512.png',
        title: '哔哩哔哩',
        // desc: '',
        link: 'https://www.bilibili.com'
      },
      {
        icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
        title: 'YouTube',
        // desc: '',
        link: 'https://www.youtube.com'
      },
    ]
  },
]
