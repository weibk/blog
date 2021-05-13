const moment = require('moment')
//引入moment
module.exports = {
  base: '/blog/',
  title: '雨铃',
  head: require('./head'),
  description: 'Do what you love',
  theme: 'reco',
  themeConfig: require('./themeConfig.js'),
  plugins: [
    //文章最后更新时间转换
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang)
          return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
        }
      }
    ],
    [
      "sakura", {
      num: 30,  // 默认数量
      show: true, //  是否显示
      zIndex: 1,   // 层级
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '...'     // 绝对路径
      }
    }],
    [
      "meting",
      {
        meting: {
          auto:"https://music.163.com/#/my/m/music/playlist?id=5003474636",
          server: "netease", // netease:网易云，tencent:qq音乐，xiami:虾米音乐
          type: "playlist",
          mid: "5003474636"
        },
        aplayer: {
          autoplay: false,
          fixed: true,
          mini: true,
          theme: '#282c34',
          loop: "all",
          order: "random",
          volume: 0.1
        },
        mobile: {
          cover: false,
          lrc: false
        }
      }],
    [
      "vuepress-plugin-live2d",
      {
        "modelName":'shizuku',
        "mobileShow": false
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-bulletin-popover',
      {
      width: '300px', // 默认 260px
      title: '消息提示',
      body: [
        {
          type: 'title',
          content: '欢迎关注我的微信公众号',
          style: 'text-aligin: center;font-size: 20px'
        },
        {
          type: 'image',
          src: '/wechat.jpg'
        },
        {
          type: 'title',
          content: '有问题欢迎QQ联系我',
          style: 'text-aligin: center;font-size: 20px'
        },
        {
          type: 'title',
          content: 'QQ:1821343013',
          style:'font-weight: 600;font-size: 18px'
        }
      ]
    }
    ]
  ]
}
