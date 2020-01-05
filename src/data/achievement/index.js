module.exports = {
	name: 'Achievement',
	subGroups: [
		require('./battle/index.js'),
		{ name: 'Character' },
		{ name: 'PvP' },
		{ name: 'Item' },
		{ name: 'Crafting' },
		{ name: 'Gathering' },
		{ name: 'Quest' },
		{ name: 'Exploration' },
		{ name: 'Grand Company' },
	]
};