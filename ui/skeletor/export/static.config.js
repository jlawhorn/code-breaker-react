module.exports = {
	name: "static",
	plugins: [
		{
			"name": "@deg-skeletor/plugin-copy",
			"config": {
				directories: require('../static-common').directories({
					imagesDestPath: 'dist/images',
					fontsDestPath: 'dist/fonts'
				})
			}
		}
	]
};