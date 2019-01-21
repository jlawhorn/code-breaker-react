module.exports = {
	name: "patterns",
	plugins: [
		{
			"name": "@deg-skeletor/plugin-patternlab",
			"config": {
				"cacheBust": true,
				"cleanPublic" : true,
				"defaultPattern": "all",
				"defaultShowPatternInfo": false,
				"ishControlsHide": {
					"s": false,
					"m": false,
					"l": false,
					"full": false,
					"random": false,
					"disco": true,
					"hay": true,
					"mqs": false,
					"find": false,
					"views-all": false,
					"views-annotations": false,
					"views-code": false,
					"views-new": false,
					"tools-all": false,
					"tools-docs": false
				},
				"ishViewportRange": {
					"s": [240, 500],
					"m": [500, 800],
					"l": [800, 2600]
				},
				"logLevel": "info",
				"outputFileSuffixes": {
					"rendered": ".rendered",
					"rawTemplate": "",
					"markupOnly": ".markup-only"
				},
				"paths" : {
					"source" : {
						"root": "./source/",
						"patterns" : "./source/_patterns/",
						"data" : "./source/_data/",
						"meta": "./source/_meta/",
						"annotations" : "./source/_annotations/",
						"styleguide" : "./node_modules/styleguidekit-assets-default/dist/",
						"patternlabFiles" : "./node_modules/styleguidekit-mustache-default/views"
					},
					"public" : {
						"root" : "./patternlab/",
						"patterns" : "./patternlab/patterns/",
						"data" : "./patternlab/styleguide/data/",
						"annotations" : "./patternlab/annotations/",
						"styleguide" : "./patternlab/styleguide/"
					}
				},
				"patternExtension": "mustache",
				"patternStateCascade": ["inprogress", "inreview", "complete"],
				"patternExportDirectory": "./pattern_exports/",
				"patternExportPatternPartials": [],
				"serverOptions": {
					"wait": 1000
				},
				"starterkitSubDir": "dist",
				"styleGuideExcludes": [],
				"theme": {
					"color": "dark",
					"density": "compact",
					"layout": "horizontal"
				}
			}
		}
	]
};