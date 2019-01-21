const { patternLabConfig } = require('../common/patterns.config.js');

module.exports = {
	name: "starterkit",
	plugins: [
		{
			name: "@deg-skeletor/plugin-patternlab",
			config: {                
				patternLabConfig,
				method: 'loadstarterkit',
				methodArgs: ['@deg-skeletor/starterkit-mustache-default']
            }
		}
	]
};