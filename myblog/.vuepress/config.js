const moment = require('moment')
//引入moment
module.exports = {
	base: '/blog/',
	title: '雨铃',
	haed: require('./head'),
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
		]
	]
}
