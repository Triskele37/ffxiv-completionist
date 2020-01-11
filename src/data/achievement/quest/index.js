//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Beast&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380
module.exports = {
    name: 'Beast',
    tableConfig: {
        headers: ["Name", "Description", "Points", 'Reward'],
        columnKeys: ['name', 'description', 'points', 'reward']
    },
    subGroups: [
		require('./beast.js'),
        require('./levequests.js'),
	],
    tasks: [{
        description: "Attain rank 1 reputation (neutral) with the Brotherhood of Ash.",
        name: "You Bet Your Ash I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 2 reputation (recognized) with the Brotherhood of Ash.",
        name: "You Bet Your Ash II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Brotherhood of Ash.",
        name: "You Bet Your Ash III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the Brotherhood of Ash.",
        name: "A Real Bad Ash",
        points: 20,
        reward: "Title: Brother of Ash"
    }, {
        description: "Attain rank 1 reputation (neutral) with the sylphs of Little Solace.",
        name: "Sylph-conscious I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 2 reputation (recognized) with the sylphs of Little Solace.",
        name: "Sylph-conscious II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with the sylphs of Little Solace.",
        name: "Sylph-conscious III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the sylphs of Little Solace.",
        name: "Sylph-assured",
        points: 20,
        reward: "Title: Sylph-Friend"
    }, {
        description: "Attain rank 1 reputation (neutral) with the 789th Order kobolds.",
        name: "Fortune Favors the Kobold I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 2 reputation (recognized) with the 789th Order kobolds.",
        name: "Fortune Favors the Kobold II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with the 789th Order kobolds.",
        name: "Fortune Favors the Kobold III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the 789th Order kobolds.",
        name: "Kobold as Brass",
        points: 20,
        reward: "Title: 789th Order Champion"
    }, {
        description: "Attain rank 1 reputation (neutral) with Novv's Clutch.",
        name: "Gilling Me Softly I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 2 reputation (recognized) with Novv's Clutch.",
        name: "Gilling Me Softly II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with Novv's Clutch.",
        name: "Gilling Me Softly III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with Novv's Clutch.",
        name: "Licensed to Gill",
        points: 20,
        reward: "Title: Novv Clutchmate"
    }, {
        description: "Attain rank 1 reputation (neutral) with the Ehcatl Nine.",
        name: "Bird Is the Word I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Ehcatl Nine.",
        name: "Bird Is the Word II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 5 reputation (respected) with the Ehcatl Nine.",
        name: "Bird Is the Word III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Ehcatl Nine.",
        name: "That's Ixal, Folks",
        points: 20,
        reward: "Title: Ehcatl Blackguard"
    }, {
        description: "Complete the quest \u201cFriends Forever.\u201d",
        name: "Sore Thumb",
        points: 20,
        reward: "Title: The Negotiator"
    }, {
        description: "Attain rank 1 reputation (neutral) with the Gundu tribe.",
        name: "When the Getting's Gundu I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Gundu tribe.",
        name: "When the Getting's Gundu II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 5 reputation (respected) with the Gundu tribe.",
        name: "When the Getting's Gundu III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Gundu tribe.",
        name: "Top Gundu",
        points: 20,
        reward: "Title: Sundrop Dancer"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Vath.",
        name: "The Vath Less Troubled I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the Vath.",
        name: "The Vath Less Troubled II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 6 reputation (honored) with the Vath.",
        name: "The Vath Less Troubled III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Vath.",
        name: "Vathcore",
        points: 20,
        reward: "Title: The Newmind"
    }, {
        description: "Attain rank 1 reputation (neutral) with the Mogmenders of Moghome.",
        name: "Mog Eat Mog I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Mogmenders of Moghome.",
        name: "Mog Eat Mog II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 5 reputation (respected) with the Mogmenders of Moghome.",
        name: "Mog Eat Mog III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Mogmenders of Moghome.",
        name: "Top Mog",
        points: 20,
        reward: "Title: Pom Friend"
    }, {
        description: "Complete the quest \u201cEternity, Loyalty, Honesty.\u201d",
        name: "Hey Now, You're an All-star",
        points: 20,
        reward: "Title: Moonlifter"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Divine Circle.",
        name: "To Kojin Is Divine I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the Divine Circle.",
        name: "To Kojin Is Divine II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 6 reputation (honored) with the Divine Circle.",
        name: "To Kojin Is Divine III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Divine Circle.",
        name: "Divinity: Original Kojin",
        points: 20,
        reward: "Title: Of the Blue"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Velodyna Gatekeepers.",
        name: "Call Me Snake I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the Velodyna Gatekeepers.",
        name: "Call Me Snake II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 6 reputation (honored) with the Velodyna Gatekeepers.",
        name: "Call Me Snake III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Velodyna Gatekeepers.",
        name: "My Anantaconda",
        points: 20,
        reward: "Title: Snake in the Grass"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Seven Hundred Seventy-Seven.",
        name: "Fish to Fry I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the Seven Hundred Seventy-Seven.",
        name: "Fish to Fry II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 6 reputation (honored) with the Seven Hundred Seventy-Seven.",
        name: "Fish to Fry III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Seven Hundred Seventy-Seven.",
        name: "In a Barrel",
        points: 20,
        reward: "Title: Siltwater Socialite"
    }, {
        description: "Complete the quest \u201cWhat a Wonder-full World.\u201d",
        name: "West Meets East",
        points: 20,
        reward: "Title: Kageyama Killer"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Dreamspinners.",
        name: "Bring Me a Dream I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the Dreamspinners.",
        name: "Bring Me a Dream II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 6 reputation (honored) with the Dreamspinners.",
        name: "Bring Me a Dream III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Dreamspinners.",
        name: "Forever Young",
        points: 20,
        reward: "Title: Sweet Dreamer"
    }, {
        description: "Attain rank 1 reputation (neutral) with the Brotherhood of Ash.",
        name: "You Bet Your Ash I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 2 reputation (recognized) with the Brotherhood of Ash.",
        name: "You Bet Your Ash II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Brotherhood of Ash.",
        name: "You Bet Your Ash III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the Brotherhood of Ash.",
        name: "A Real Bad Ash",
        points: 20,
        reward: "Title: Brother of Ash"
    }, {
        description: "Attain rank 1 reputation (neutral) with the sylphs of Little Solace.",
        name: "Sylph-conscious I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 2 reputation (recognized) with the sylphs of Little Solace.",
        name: "Sylph-conscious II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with the sylphs of Little Solace.",
        name: "Sylph-conscious III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the sylphs of Little Solace.",
        name: "Sylph-assured",
        points: 20,
        reward: "Title: Sylph-Friend"
    }, {
        description: "Attain rank 1 reputation (neutral) with the 789th Order kobolds.",
        name: "Fortune Favors the Kobold I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 2 reputation (recognized) with the 789th Order kobolds.",
        name: "Fortune Favors the Kobold II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with the 789th Order kobolds.",
        name: "Fortune Favors the Kobold III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the 789th Order kobolds.",
        name: "Kobold as Brass",
        points: 20,
        reward: "Title: 789th Order Champion"
    }, {
        description: "Attain rank 1 reputation (neutral) with Novv's Clutch.",
        name: "Gilling Me Softly I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 2 reputation (recognized) with Novv's Clutch.",
        name: "Gilling Me Softly II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with Novv's Clutch.",
        name: "Gilling Me Softly III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with Novv's Clutch.",
        name: "Licensed to Gill",
        points: 20,
        reward: "Title: Novv Clutchmate"
    }, {
        description: "Attain rank 1 reputation (neutral) with the Ehcatl Nine.",
        name: "Bird Is the Word I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Ehcatl Nine.",
        name: "Bird Is the Word II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 5 reputation (respected) with the Ehcatl Nine.",
        name: "Bird Is the Word III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Ehcatl Nine.",
        name: "That's Ixal, Folks",
        points: 20,
        reward: "Title: Ehcatl Blackguard"
    }, {
        description: "Complete the quest \u201cFriends Forever.\u201d",
        name: "Sore Thumb",
        points: 20,
        reward: "Title: The Negotiator"
    }, {
        description: "Attain rank 1 reputation (neutral) with the Gundu tribe.",
        name: "When the Getting's Gundu I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Gundu tribe.",
        name: "When the Getting's Gundu II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 5 reputation (respected) with the Gundu tribe.",
        name: "When the Getting's Gundu III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Gundu tribe.",
        name: "Top Gundu",
        points: 20,
        reward: "Title: Sundrop Dancer"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Vath.",
        name: "The Vath Less Troubled I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the Vath.",
        name: "The Vath Less Troubled II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 6 reputation (honored) with the Vath.",
        name: "The Vath Less Troubled III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Vath.",
        name: "Vathcore",
        points: 20,
        reward: "Title: The Newmind"
    }, {
        description: "Attain rank 1 reputation (neutral) with the Mogmenders of Moghome.",
        name: "Mog Eat Mog I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Mogmenders of Moghome.",
        name: "Mog Eat Mog II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 5 reputation (respected) with the Mogmenders of Moghome.",
        name: "Mog Eat Mog III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Mogmenders of Moghome.",
        name: "Top Mog",
        points: 20,
        reward: "Title: Pom Friend"
    }, {
        description: "Complete the quest \u201cEternity, Loyalty, Honesty.\u201d",
        name: "Hey Now, You're an All-star",
        points: 20,
        reward: "Title: Moonlifter"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Divine Circle.",
        name: "To Kojin Is Divine I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the Divine Circle.",
        name: "To Kojin Is Divine II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 6 reputation (honored) with the Divine Circle.",
        name: "To Kojin Is Divine III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Divine Circle.",
        name: "Divinity: Original Kojin",
        points: 20,
        reward: "Title: Of the Blue"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Velodyna Gatekeepers.",
        name: "Call Me Snake I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the Velodyna Gatekeepers.",
        name: "Call Me Snake II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 6 reputation (honored) with the Velodyna Gatekeepers.",
        name: "Call Me Snake III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Velodyna Gatekeepers.",
        name: "My Anantaconda",
        points: 20,
        reward: "Title: Snake in the Grass"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Seven Hundred Seventy-Seven.",
        name: "Fish to Fry I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the Seven Hundred Seventy-Seven.",
        name: "Fish to Fry II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 6 reputation (honored) with the Seven Hundred Seventy-Seven.",
        name: "Fish to Fry III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Seven Hundred Seventy-Seven.",
        name: "In a Barrel",
        points: 20,
        reward: "Title: Siltwater Socialite"
    }, {
        description: "Complete the quest \u201cWhat a Wonder-full World.\u201d",
        name: "West Meets East",
        points: 20,
        reward: "Title: Kageyama Killer"
    }, {
        description: "Attain rank 3 reputation (friendly) with the Dreamspinners.",
        name: "Bring Me a Dream I",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 4 reputation (trusted) with the Dreamspinners.",
        name: "Bring Me a Dream II",
        points: 5,
        reward: "-"
    }, {
        description: "Attain rank 6 reputation (honored) with the Dreamspinners.",
        name: "Bring Me a Dream III",
        points: 10,
        reward: "-"
    }, {
        description: "Attain rank 7 reputation (sworn) with the Dreamspinners.",
        name: "Forever Young",
        points: 20,
        reward: "Title: Sweet Dreamer"
    }]
}