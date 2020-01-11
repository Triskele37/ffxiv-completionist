//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=12&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

module.exports = {
    name: 'Crafting',
    subGroups: [
		require('./alchemist.js'),
        require('./armorer.js'),
        require('./blacksmith.js'),
        require('./carpenter.js'),
        require('./culinarian.js'),
        require('./goldsmith.js'),
        require('./leatherworker.js'),
        require('./weaver.js'),
	],
    // tasks:

}