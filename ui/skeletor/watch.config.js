module.exports = {
	name: "watch",
	plugins: [
		{
			name: "@deg-skeletor/plugin-watch",
			config: {
				targets: [
					{
						name: "css",
						paths: "source/css/**/*.css",
						events: ['add', 'change', 'delete'],
						tasks: [
							{
								name: "build",
								subTasks: ["css"]
							}
						]
					},
					{
						name: "patterns",
						paths: ["source/_patterns/**/*.*", "source/_data/**/*.json", "source/_meta/**/*.*", "source/_annotations/**/*.*"],
						events: ['add', 'change', 'delete'],
						tasks: [
							{
								name: "build",
								subTasks: ["patterns"]
							}
						]
					},
					{
						name: "images",
						paths: "source/images/**/*",
						events: ['add', 'change', 'delete'],
						tasks: [
							{
								name: "build",
								subTasks: ["images"]
							}
						]
					},
					{
						name: "js",
						paths: "source/js/**/*",
						events: ['add', 'change', 'delete'],
						tasks: [
							{
								name: "build",
								subTasks: ["js"]
							}
						]
					}
				]
			}
		}
	]
};