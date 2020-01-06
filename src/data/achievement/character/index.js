//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=12&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

module.exports = {
    name: 'Character',
    subGroups: [
		require('./commendation.js'),
        require('./doh.js'),
        require('./dol.js'),
        require('./dom.js'),
        require('./dow.js'),
        require('./goldsaucer.js'),
	],
    tasks:

}