module.exports = {
	name: 'Achievement',
	subGroups: [
		require('./battle/index.js'),
		require('./character/index.js'),
		require('./pvp/index.js'),
		{ name: 'Item' },
		require('./crafting/index.js'),
		{ name: 'Gathering' },
		{ name: 'Quest' },
		{ name: 'Exploration' },
		{ name: 'Grand Company' },
	]
};
