const packageJSON = require('./package.json')
const getKarmaConfig = require('resin-config-karma')

module.exports = (config) => {
	const karmaConfig = getKarmaConfig(packageJSON)
	karmaConfig.webpack.node = {
		global: true,
		fs: 'empty',
		process: 'mock'
	};
	config.set(karmaConfig)
}
