const path = require('path');

module.exports = {
	name: "css",
	plugins: [
		{
			"name": "@deg-skeletor/plugin-postcss",
			"config": {
				"files": [
					...require('../css-common').files('patternlab/css/'),
					{
						"src": "source/css/styleguide.css",
						"dest": path.resolve('patternlab/css', "styleguide.css")
					}
				],
				"plugins": require('../css-common').plugins
			}
		}
	]
};