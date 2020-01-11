//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.AchievementKind.Name_en&string=Battle&columns=Name,Description,Points,Item.Name,Title.Name&page=2&limit=250

module.exports = {
    name: 'PVP',
    tableConfig: {
        headers: ['Name', 'Description', 'Points', 'Reward'],
        columnKeys: ['name', 'description', 'points', 'reward']
    },
    subGroups: [
		require('./frontline.js'),
        require('./ranking.js'),
        require('./rivalwing.js'),
        require('./wolvesden.js'),
	]

};