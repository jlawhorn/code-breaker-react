const path = require('path');

module.exports = {
	name: "static",
	plugins: [
		{
			"name": "@deg-skeletor/plugin-copy",
			"config": {
				directories: require('../static-common').directories({
					imagesDestPath: 'patternlab/images',
					fontsDestPath: 'patternlab/fonts'
				})
			}
		}
	]
};