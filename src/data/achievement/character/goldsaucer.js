//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=2&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380
module.exports = {
	name: 'Gold Saucer',
	tableConfig: {
		headers: ['Name', 'Description', 'Points', 'Reward'],
		columnKeys: ['name', 'description', 'points', 'reward']
	},
    tasks: [{
        description: "Earn 1,000 MGP at Gold Saucer attractions.",

        name: "What Happens in the Saucer I",
        points: 5,
        reward: "Title: Gambler"
    }, {
        description: "Earn 10,000 MGP at Gold Saucer attractions.",

        name: "What Happens in the Saucer II",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 100,000 MGP at Gold Saucer attractions.",

        name: "What Happens in the Saucer III",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 1,000,000 MGP at Gold Saucer attractions.",

        name: "What Happens in the Saucer IV",
        points: 10,
        reward: "-"
    }, {
        description: "Earn 10,000,000 MGP at Gold Saucer attractions.",

        name: "What Happens in the Saucer V",
        points: 10,
        reward: "-"
    }, {
        description: "Earn the following seven achievements: Winningest Jockey, Always Bet on Me, Bracket Breaker, Enemy at the GATE III, WTFungah III, Work Smarter, Not Harder, and Mountains out of Gil-hills.",

        name: "How I Learned to Stop Worrying and Love the Saucer",
        points: 20,
        reward: "Title: High Roller"
    }, {
        description: "Obtain a new chocobo through covering.",

        name: "Go Forth and Multiply",
        points: 5,
        reward: "Title: Chocobo Breeder"
    }, {
        description: "Obtain a new chocobo with a pedigree level of 9 or higher.",
        name: "Pedigree Champ",
        points: 5,
        reward: "Item: Racing Chocobo Mask",

    }, {
        description: "Train your chocobo to a rating of 285.",

        name: "Training Day",
        points: 5,
        reward: "Title: Chocobo Trainer"
    }, {
        description: "Participate in a sanctioned chocobo race.",

        name: "Off to the Races I",
        points: 5,
        reward: "Title: Bug Boy"
    }, {
        description: "Participate in 100 sanctioned chocobo races.",

        name: "Off to the Races II",
        points: 5,
        reward: "-"
    }, {
        description: "Participate in 300 sanctioned chocobo races.",

        name: "Off to the Races III",
        points: 5,
        reward: "Title: Senior Jockey"
    }, {
        description: "Participate in 3,000 sanctioned chocobo races.",

        name: "Off to the Races IV",
        points: 10,
        reward: "Title: Veteran Jockey"
    }, {
        description: "Place first in a sanctioned chocobo race.",

        name: "Breaking the Maiden",
        points: 5,
        reward: "-"
    }, {
        description: "Place first in 10 sanctioned chocobo races.",

        name: "Winning Jockey I",
        points: 5,
        reward: "-"
    }, {
        description: "Place first in 50 sanctioned chocobo races.",

        name: "Winning Jockey II",
        points: 5,
        reward: "-"
    }, {
        description: "Place first in 500 sanctioned chocobo races.",

        name: "Winningest Jockey",
        points: 10,
        reward: "Title: The First Across"
    }, {
        description: "Obtain a Triple Triad card.",

        name: "Triple-decker I",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain 30 unique Triple Triad cards.",

        name: "Triple-decker II",
        points: 5,
        reward: "Title: Deck Holder"
    }, {
        description: "Obtain 60 unique Triple Triad cards.",

        name: "Triple-decker III",
        points: 10,
        reward: "Title: Deck Hoarder"
    }, {
        description: "Defeat an NPC at Triple Triad.",

        name: "Triple Team I",
        points: 5,
        reward: "-"
    }, {
        description: "Defeat 30 unique NPCs at Triple Triad.",
        name: "Triple Team II",
        points: 10,
        reward: "Item: Squall Leonhart Card",

    }, {
        description: "Win a Triple Triad roulette match.",

        name: "Wheel of Fortune I",
        points: 5,
        reward: "-"
    }, {
        description: "Win 10 Triple Triad roulette matches.",

        name: "Wheel of Fortune II",
        points: 5,
        reward: "-"
    }, {
        description: "Win 30 Triple Triad roulette matches.",

        name: "Wheel of Fortune III",
        points: 5,
        reward: "-"
    }, {
        description: "Win 100 Triple Triad roulette matches.",

        name: "Wheel of Fortune IV",
        points: 5,
        reward: "-"
    }, {
        description: "Win 300 Triple Triad roulette matches.",
        name: "Wheel of Fortune V",
        points: 5,
        reward: "Item: Vaan Card",

    }, {
        description: "Win 1,000 Triple Triad roulette matches.",

        name: "Always Bet on Me",
        points: 10,
        reward: "Title: The Trinity"
    }, {
        description: "Win a Triple Triad tournament match.",

        name: "Kumite",
        points: 5,
        reward: "-"
    }, {
        description: "Win 10 Triple Triad tournament matches.",

        name: "Kumite Kumite",
        points: 5,
        reward: "-"
    }, {
        description: "Win 30 Triple Triad tournament matches.",
        name: "Kumite Kumite Kumite",
        points: 5,
        reward: "Item: Shantotto Card",

    }, {
        description: "Win 100 Triple Triad tournament matches.",

        name: "Bracket Breaker",
        points: 10,
        reward: "Title: Duelist"
    }, {
        description: "Successfully complete a GATE.",

        name: "Enemy at the GATE I",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully complete 30 GATEs.",

        name: "Enemy at the GATE II",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully complete 100 GATEs.",

        name: "Enemy at the GATE III",
        points: 10,
        reward: "Title: Keymaster"
    }, {
        description: "Successfully complete the GATE “Any Way the Wind Blows.”",

        name: "WTFungah I",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully complete the GATE “Any Way the Wind Blows” 5 times.",

        name: "WTFungah II",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully complete the GATE “Any Way the Wind Blows” 10 times.",

        name: "WTFungah III",
        points: 10,
        reward: "Title: The Fungah"
    }, {
        description: "Win MGP from the Jumbo Cactpot.",

        name: "You Could Already Be a Winner I",
        points: 5,
        reward: "-"
    }, {
        description: "Win a cumulative total of 10,000 MGP from the Jumbo Cactpot.",

        name: "You Could Already Be a Winner II",
        points: 5,
        reward: "-"
    }, {
        description: "Win a cumulative total of 500,000 MGP from the Jumbo Cactpot.",

        name: "You Could Already Be a Winner III",
        points: 5,
        reward: "-"
    }, {
        description: "Win a cumulative total of 1,000,000 MGP from the Jumbo Cactpot.",

        name: "Work Smarter, Not Harder",
        points: 10,
        reward: "Title: Moneybags"
    }, {
        description: "Win MGP from the Mini Cactpot.",

        name: "Dream Small I",
        points: 5,
        reward: "-"
    }, {
        description: "Win a cumulative total of 10,000 MGP from the Mini Cactpot.",

        name: "Dream Small II",
        points: 5,
        reward: "-"
    }, {
        description: "Win a cumulative total of 500,000 MGP from the Mini Cactpot.",

        name: "Dream Small III",
        points: 5,
        reward: "-"

    }]
};