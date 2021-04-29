module.exports = {
	author: '雨铃',
	//最后更新时间
	lastUpdated: 'Last Updated',
	nextLinks: true,
	prevLinks: true,
	nav: require('./nav'),
	sidebar: 'auto',
	type: "blog",
	// 博客配置
	blogConfig: {
		category: {
			location: 2, // 在导航栏菜单中所占的位置，默认2
			text: '分类' // 默认文案 “分类”
		},
		tag: {
			location: 3, // 在导航栏菜单中所占的位置，默认3
			text: '标签' // 默认文案 “标签”
		},
		socialLinks: [ // 信息栏展示社交信息
			{
				icon: 'reco-github',
				link: 'https://github.com/weibk'
			},
			{
				icon: 'reco-bokeyuan',
				link: 'https://www.cnblogs.com/yuling25/'
			},
			{
				icon: 'reco-mayun',
				link: 'https://gitee.com/wei-jiajian'
			},
			{
				icon: 'reco-qq',
				link: 'https://gitee.com/wei-jiajian'
			},
			{
				icon: 'reco-wechat',
				link: 'https://gitee.com/wei-jiajian'
			}
		]
	},
	//左侧logo
	logo: '/logo.jpg',
	//头像
	authorAvatar: '/mine.png',
	//评论配置
	valineConfig: require('./valineConfig')
}
