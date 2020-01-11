//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Grand%20Company&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380
module.exports = {
    name: 'Grand Company',
    tableConfig: {
        headers: ["Name", "Description", "Points", 'Reward'],
        columnKeys: ['name', 'description', 'points', 'reward']
    },
    subGroups: [
		require('./immortalflames.js'),
        require('./maelstrom.js'),
        require('./twinadder.js'),
	],
    tasks: [{
        description: "Complete level 20 caravan security in less than 12 minutes (Earth time).",
        name: "Twelve Minutes or Less or Your Cargo's Free",
        points: 5,
        reward: "-"
    }, {
        description: "Complete level 20 caravan security in less than 10 minutes (Earth time).",
        name: "Ten Minutes or Less or Your Cargo's Free",
        points: 5,
        reward: "-"
    }, {
        description: "Complete level 20 caravan security in less than 8 minutes (Earth time).",
        name: "Eight Minutes or Less or Your Cargo's Free",
        points: 10,
        reward: "Title: Featherfoot"
    }, {
        description: "Complete level 40 caravan security in less than 12 minutes (Earth time).",
        name: "Gone in Twelve Minutes",
        points: 5,
        reward: "-"
    }, {
        description: "Complete level 40 caravan security in less than 10 minutes (Earth time).",
        name: "Gone in Ten Minutes",
        points: 5,
        reward: "-"
    }, {
        description: "Complete level 40 caravan security in less than 8 minutes (Earth time).",
        name: "Gone in Eight Minutes",
        points: 10,
        reward: "Title: Lightning"
    }, {
        description: "Protect a total of 100 packs of chocobo cargo.",
        name: "Handle with Care I",
        points: 5,
        reward: "-"
    }, {
        description: "Protect a total of 500 packs of chocobo cargo.",
        name: "Handle with Care II",
        points: 5,
        reward: "-"
    }, {
        description: "Protect a total of 1,000 packs of chocobo cargo.",
        name: "Handle with Care III",
        points: 5,
        reward: "-"
    }, {
        description: "Protect a total of 5,000 packs of chocobo cargo.",
        name: "Handle with Care IV",
        points: 10,
        reward: "Title: A Bo's Best Friend"
    }, {
        description: "Protect a total of 10,000 packs of chocobo cargo.",
        name: "Chocobo Shrugged",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a complete set of Grand Company soldier armor consisting of a soldier's cap, a soldier's overcoat, a pair of soldier's gloves, and a pair of soldier's boots.\n\n* Speak to Jonathas with all four items equipped.",
        name: "I Make This Look Good",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain a chocobo whistle.",
        name: "My Little Chocobo",
        points: 5,
        reward: "-"
    }, {
        description: "Purchase all three sets of Grand Company chocobo barding.",
        name: "Pimp Your Ride",
        points: 5,
        reward: "Title: Cavalier"
    }, {
        description: "Send your squadron on 10 successful assignments.",
        name: "The Mob Squad I",
        points: 5,
        reward: "-"
    }, {
        description: "Send your squadron on 30 successful assignments.",
        name: "The Mob Squad II",
        points: 5,
        reward: "-"
    }, {
        description: "Send your squadron on 100 successful assignments.",
        name: "The Mob Squad III",
        points: 10,
        reward: "-"
    }, {
        description: "Lead your squadron on 10 successful command missions.",
        name: "Dear Leader I",
        points: 5,
        reward: "-"
    }, {
        description: "Lead your squadron on 30 successful command missions.",
        name: "Dear Leader II",
        points: 5,
        reward: "-"
    }, {
        description: "Lead your squadron on 100 successful command missions.",
        name: "Dear Leader III",
        points: 10,
        reward: "-"
    }]
}