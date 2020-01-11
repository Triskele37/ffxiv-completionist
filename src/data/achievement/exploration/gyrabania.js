//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Gyr%20Abania&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380
module.exports = {
    name: 'Gyr Abania',
    tableConfig: {
        headers: ["Name", "Description", "Points", 'Reward'],
        columnKeys: ['name', 'description', 'points', 'reward']
    },
    tasks: [{
        description: "Discover every location within the Fringes.",
        name: "Mapping the Realm: The Fringes",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Peaks.",
        name: "Mapping the Realm: The Peaks",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Lochs.",
        name: "Mapping the Realm: The Lochs",
        points: 10,
        reward: "-"
    }]
}