module.exports = {
	name: 'Achievement',
	subGroups: [
		require('./battle/index.js'),
		require('./character/index.js'),
		require('./pvp/index.js'),
		require('./item/index.js'),
		require('./crafting/index.js'),
		require('./gathering/index.js'),
		require('./quest/index.js'),
		require('./exploration/index.js'),
		require('./grandcompany/index.js'),
	]
};
