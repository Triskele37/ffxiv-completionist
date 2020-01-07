module.exports = {
	name: 'Achievement',
	subGroups: [
		require('./battle/index.js'),
		{ name: './character/index.js' },
		{ name: 'PvP' },
		{ name: 'Item' },
		{ name: 'Crafting' },
		{ name: 'Gathering' },
		{ name: 'Quest' },
		{ name: 'Exploration' },
		{ name: 'Grand Company' },
	]
};
