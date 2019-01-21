module.exports = {
	name: "serve",
	plugins: [
		{
			"name": "@deg-skeletor/plugin-express",
			"config": {
			    "port": 3001,
			    "entry": '../patternlab',
			    "currentDirectory": __dirname,
			    "middleware": []
			}
		}
	]
};