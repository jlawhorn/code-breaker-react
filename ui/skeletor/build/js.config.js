const commonConfig = require('../common/js.config.js');

module.exports = {
	name: "js",
	plugins: [
		{
			"name": "@deg-skeletor/plugin-rollup",
			"config": [
                {
                    input: commonConfig.input,
                    output: commonConfig.output("patternlab/js"),
                    plugins: commonConfig.plugins(),
                    experimentalCodeSplitting: true
                },
                {
                    input: commonConfig.input,
                    output: commonConfig.output("patternlab/js", false),
                    plugins: commonConfig.plugins(false),
                    experimentalCodeSplitting: true
                }
            ]
        }
	]
};