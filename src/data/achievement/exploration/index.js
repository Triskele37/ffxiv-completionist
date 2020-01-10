//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Exploration&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380
module.exports = {
    name: 'Exploration',
    tableConfig: {
        headers: ["Name", "Description", "Points", 'Reward'],
        columnKeys: ['name', 'description', 'points', 'reward']
    },
    subGroups: [
        require('./abalathiaspine.js'),
        require('./blackshroud.js'),
        require('./coerthas.js'),
        require('./dravania.js'),
        require('./duty.js'),
        require('./lanoscea.js'),
        require('./duty.js'),
        require('./mordhona.js'),
        require('./norvrandt.js'),
        require('./othard.js'),
        require('./sightseeing.js'),
        require('./thanalan.js'),

	],
    tasks: [{
        description: "Attune with all 19 aetheryte crystals and aetherial gates in La Noscea.",
        name: "Taking in the Sights: La Noscea",
        points: 5,
        reward: "-"
    }, {
        description: "Attune with all 23 aetheryte crystals and aetherial gates in the Black Shroud.",
        name: "Taking in the Sights: Black Shroud",
        points: 5,
        reward: "-"
    }, {
        description: "Attune with all 22 aetheryte crystals and aetherial gates in Thanalan.",
        name: "Taking in the Sights: Thanalan",
        points: 5,
        reward: "-"
    }, {
        description: "Attune with all 19 aetheryte crystals and aetherial gates in Coerthas.",
        name: "Taking in the Sights: Coerthas",
        points: 5,
        reward: "-"
    }, {
        description: "Attune with the 4 aetheryte crystals and aetherial gates in Mor Dhona at Revenant's Toll, Brittlebark, the Fogfens, and the Singing Shards.",
        name: "Taking in the Sights: Mor Dhona",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the \u201cTaking in the Sights\u201d achievements for La Noscea, the Black Shroud, Thanalan, Coerthas, and Mor Dhona.",
        name: "Been There, Done That",
        points: 10,
        reward: "Title: The Wanderer's Shadow"
    }]
}