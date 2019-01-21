module.exports = {
	tasks: [
		{
			name: 'install',
			subTasks: [
				require('./skeletor/install/patterns.config.js')
			]
		},
		{
			name: 'build',
			subTasks: [
				require('./skeletor/build/css.config.js'),
				require('./skeletor/build/images.config.js'),
				require('./skeletor/build/patterns.config.js'),
				require('./skeletor/build/js.config.js')
			]
		},
		{
			name: 'export',
			environment: 'production',
			subTasks: [
				require('./skeletor/export/css.config.js'),
				require('./skeletor/export/images.config.js'),
				require('./skeletor/export/patterns.config.js'),
				require('./skeletor/export/js.config.js')
			]
		},
		{
			name: 'serve',
			subTasks: [
				require('./skeletor/serve.config.js')
			]
		},
		{
			name: 'watch',
			subTasks: [
				require('./skeletor/watch.config.js')
			]
		}
	]
}