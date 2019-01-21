const { patternLabConfig } = require('../common/patterns.config.js');

module.exports = {
	name: "patterns",
	plugins: [
		{
			name: "@deg-skeletor/plugin-patternlab",
			config: {                
				patternLabConfig
            }
		}
	]
};