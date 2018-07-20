module.exports = {
	name: "css",
	plugins: [
		{
			"name": "@deg-skeletor/plugin-postcss",
			"config": {
				"files": require('../css-common').files('dist/css/'),
				"plugins": require('../css-common').plugins
			}
		}
	]
};