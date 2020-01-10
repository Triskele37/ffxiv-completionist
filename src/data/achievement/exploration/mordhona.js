//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Mor%20Dhona&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380
module.exports = {
    name: 'Mor Dhona',
    tableConfig: {
        headers: ["Name", "Description", "Points", 'Reward'],
        columnKeys: ['name', 'description', 'points', 'reward']
    },
    tasks: [{
        description: "Visit Mor Dhona and unlock the area map.",
        name: "Mapping the Realm: Mor Dhona",
        points: 10,
        reward: "-"
    }]
}