//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Coerthas&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380
module.exports = {
    name: 'Coerthas',
    tableConfig: {
        headers: ["Name", "Description", "Points", 'Reward'],
        columnKeys: ['name', 'description', 'points', 'reward']
    },
    tasks: [{
        description: "Visit the Coerthas central highlands and unlock the area map.",
        name: "Mapping the Realm: Coerthas Central Highlands",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in the Coerthas western highlands.",
        name: "Mapping the Realm: Coerthas Western Highlands",
        points: 10,
        reward: "-"
    }]
}