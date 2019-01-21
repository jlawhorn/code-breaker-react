const path = require('path');

module.exports = {
	files: function(destPath) {
		return [
			{
				"src": "source/css/global.css",
				"dest": path.resolve(destPath, "global.css")
			}
		];
	},
	plugins: [
		require('postcss-easy-import'),
    	require('postcss-custom-properties'),
    	require('postcss-custom-selectors'),
    	require('postcss-custom-media'),
   		require('postcss-color-function'),
    	require('postcss-nested'),
    	require('autoprefixer'),
		require('cssnano')
	]
};