//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Zodiac%20Weapons&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380
module.exports = {
    name: 'Zodiac Weapons',
    tableConfig: {
        headers: ["Name", "Description", "Points", 'Reward'],
        columnKeys: ['name', 'description', 'points', 'reward']
    },
    tasks: [{
        description: "Obtain a Zodiac Weapon.",
        name: "Lethal Weapon",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Zodiac Weapon Zeta.",
        name: "The Letter Z",
        points: 20,
        reward: "Title: Z"
    }]
}