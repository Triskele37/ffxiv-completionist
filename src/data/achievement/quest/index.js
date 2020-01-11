//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Quest&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380
module.exports = {
    name: 'Quest',
    tableConfig: {
        headers: ["Name", "Description", "Points", 'Reward'],
        columnKeys: ['name', 'description', 'points', 'reward']
    },
    subGroups: [
		require('./beast.js'),
        require('./levequests.js'),
	],
    tasks: [{
        description: "Complete the main scenario quest \u201cThe Lominsan Envoy.\u201d",
        name: "Leaving Limsa Lominsa",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the main scenario quest \u201cThe Gridanian Envoy.\u201d",
        name: "Gone from Gridania",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the main scenario quest \u201cThe Ul'dahn Envoy.\u201d",
        name: "Out of Ul'dah",
        points: 5,
        reward: "-"
    }, {
        description: "Complete any one of the Disciple of War or Magic class quests available at level 30.",
        name: "This One Time, at Level Thirty...",
        points: 5,
        reward: "-"
    }, {
        description: "Complete all the Disciple of War quests available at level 30.",
        name: "Tales of War",
        points: 10,
        reward: "Title: Seeker of Blood"
    }, {
        description: "Complete all the Disciple of Magic quests available at level 30.",
        name: "Tales of Magic",
        points: 10,
        reward: "Title: Seeker of Truth"
    }, {
        description: "Complete all the Disciple of the Hand quests available at level 30.",
        name: "Tales of the Hand",
        points: 10,
        reward: "Title: Seeker of Skill"
    }, {
        description: "Complete all the Disciple of the Land quests available at level 30.",
        name: "Tales of the Land",
        points: 10,
        reward: "Title: Seeker of Bounty"
    }, {
        description: "Complete all the class quests available at level 30.",
        reward: "Item: Chronicler's Crown",
        name: "The Greatest Tales Ever Told",
        points: 20,
    }, {
        description: "Complete 15 sidequests originating in La Noscea.",
        name: "A Little Something on the Side: La Noscea",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 15 sidequests originating in the Black Shroud.",
        name: "A Little Something on the Side: Black Shroud",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 15 sidequests originating in Thanalan.",
        name: "A Little Something on the Side: Thanalan",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain all three \u201cA Little Something on the Side\u201d achievements.",
        name: "Sideways",
        points: 10,
        reward: "Title: Sidestepper"
    }, {
        description: "Complete 10 regional battlecraft levequests.",
        name: "All the More Region to Leve I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests.",
        name: "All the More Region to Leve II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 50 regional battlecraft levequests.",
        name: "All the More Region to Leve III",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 100 regional battlecraft levequests.",
        name: "All the More Region to Leve IV",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 200 regional battlecraft levequests.",
        name: "All the More Region to Leve V",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 500 regional battlecraft levequests.",
        name: "All the More Region to Leve VI",
        points: 10,
        reward: "Title: Lord Protector"
    }, {
        description: "Complete 1,000 regional battlecraft levequests.",
        name: "Region d'Etre",
        points: 20,
        reward: "-"
    }, {
        description: "Complete 10 local tradecraft levequests.",
        name: "Think Global, Quest Local I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 local tradecraft levequests.",
        name: "Think Global, Quest Local II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 50 local tradecraft levequests.",
        name: "Think Global, Quest Local III",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 100 local tradecraft levequests.",
        name: "Think Global, Quest Local IV",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 200 local tradecraft levequests.",
        name: "Think Global, Quest Local V",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 500 local tradecraft levequests.",
        name: "Think Global, Quest Local VI",
        points: 10,
        reward: "Title: Lord Creator"
    }, {
        description: "Complete 1,000 local tradecraft levequests.",
        name: "Lost in Localization",
        points: 20,
        reward: "-"
    }, {
        description: "Complete 10 faction levequests.",
        name: "A Slave to Faction I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 50 faction levequests.",
        name: "A Slave to Faction II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 100 faction levequests.",
        name: "A Slave to Faction III",
        points: 10,
        reward: "Title: Peacemaker"
    }, {
        description: "Complete 500 faction levequests.",
        name: "Just the Factions, Ma'am",
        points: 20,
        reward: "-"
    }, {
        description: "Complete 5 guildhests.",
        name: "Serving a Greater Cause I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 guildhests.",
        name: "Serving a Greater Cause II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 guildhests.",
        name: "Serving a Greater Cause III",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 30 guildhests.",
        name: "Serving a Greater Cause IV",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 50 guildhests.",
        name: "Serving a Greater Cause V",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 100 guildhests.",
        name: "Serving a Greater Cause VI",
        points: 10,
        reward: "Title: The Last Resort"
    }, {
        description: "Complete 200 guildhests.",
        name: "Enraptured Servitude",
        points: 20,
        reward: "-"
    }, {
        description: "Complete one regional battlecraft levequest at every aetheryte camp and aetherial gate in La Noscea, the Black Shroud, and Thanalan.",
        name: "Around the Realm and Back Again",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating at Camp Bearded Rock.",
        name: "I Survived Camp Bearded Rock",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating in Cedarwood.",
        name: "I Survived Cedarwood",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating at Camp Skull Valley.",
        name: "I Survived Camp Skull Valley",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating at Camp Bald Knoll.",
        name: "I Survived Camp Bald Knoll",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating at Camp Bloodshore.",
        name: "I Survived Camp Bloodshore",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating in Cassiopeia Hollow.",
        name: "I Survived Cassiopeia Hollow",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating at Camp Iron Lake.",
        name: "I Survived Camp Iron Lake",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests at each aetheryte camp and aetherial gate in La Noscea.",
        name: "And All I Got Was This Lousy Achievement: La Noscea",
        points: 10,
        reward: "Title: The Sword of La Noscea"
    }, {
        description: "Complete 20 regional battlecraft levequests originating at Camp Bentbranch.",
        name: "I Survived Camp Bentbranch",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating in Humblehearth.",
        name: "I Survived Humblehearth",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating at Camp Nine Ivies.",
        name: "I Survived Camp Nine Ivies",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating at Camp Emerald Moss.",
        name: "I Survived Camp Emerald Moss",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating in Treespeak.",
        name: "I Survived Treespeak",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating in the Mun\u2013Tuy Cellars.",
        name: "I Survived the Mun-Tuy Cellars",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating at Camp Tranquil.",
        name: "I Survived Camp Tranquil",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests at each aetheryte camp and aetherial gate in the Black Shroud.",
        name: "And All I Got Was This Lousy Achievement: Black Shroud",
        points: 10,
        reward: "Title: The Sword of the Shroud"
    }, {
        description: "Complete 20 regional battlecraft levequests originating at Camp Black Brush.",
        name: "I Survived Camp Black Brush",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating in the Nanawa Mines.",
        name: "I Survived the Nanawa Mines",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating at Camp Drybone.",
        name: "I Survived Camp Drybone",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating in Halatali.",
        name: "I Survived Halatali",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating at Camp Horizon.",
        name: "I Survived Camp Horizon",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating in Nophica's Wells.",
        name: "I Survived Nophica's Wells",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests originating at Camp Broken Water.",
        name: "I Survived Camp Broken Water",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 regional battlecraft levequests at each aetheryte camp and aetherial gate in Thanalan.",
        name: "And All I Got Was This Lousy Achievement: Thanalan",
        points: 10,
        reward: "Title: The Sword of Thanalan"
    }, {
        description: "Complete 20 regional battlecraft levequests at every aetheryte camp and aetherial gate in La Noscea, the Black Shroud, and Thanalan.",
        name: "Globetrotter",
        points: 20,
        reward: "Title: The Sword of Eorzea"
    }, {
        description: "Complete one behest at every aetheryte camp and aetherial gate in La Noscea, the Black Shroud, and Thanalan.",
        name: "At the Realm's Behest",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at Camp Bearded Rock.",
        name: "To Serve and Protect: Camp Bearded Rock",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests in Cedarwood.",
        name: "To Serve and Protect: Cedarwood",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at Camp Skull Valley.",
        name: "To Serve and Protect: Camp Skull Valley",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at Camp Bald Knoll.",
        name: "To Serve and Protect: Camp Bald Knoll",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at Camp Bloodshore.",
        name: "To Serve and Protect: Camp Bloodshore",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests in Cassiopeia Hollow.",
        name: "To Serve and Protect: Cassiopeia Hollow",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at Camp Iron Lake.",
        name: "To Serve and Protect: Camp Iron Lake",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at each aetheryte camp and aetherial gate in La Noscea.",
        name: "La Noscea Got Served...and Protected",
        points: 10,
        reward: "Title: The Shield of La Noscea"
    }, {
        description: "Complete 10 behests at Camp Bentbranch.",
        name: "To Serve and Protect: Camp Bentbranch",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests in Humblehearth.",
        name: "To Serve and Protect: Humblehearth",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at Camp Nine Ivies.",
        name: "To Serve and Protect: Camp Nine Ivies",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at Camp Emerald Moss.",
        name: "To Serve and Protect: Camp Emerald Moss",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests in Treespeak.",
        name: "To Serve and Protect: Treespeak",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests in the Mun\u2013Tuy Cellars.",
        name: "To Serve and Protect: Mun-Tuy Cellars",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at Camp Tranquil.",
        name: "To Serve and Protect: Camp Tranquil",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at each aetheryte camp and aetherial gate in the Black Shroud.",
        name: "The Black Shroud Got Served...and Protected",
        points: 10,
        reward: "Title: The Shield of the Shroud"
    }, {
        description: "Complete 10 behests at Camp Black Brush.",
        name: "To Serve and Protect: Camp Black Brush",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests in the Nanawa Mines.",
        name: "To Serve and Protect: Nanawa Silvermines",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at Camp Drybone.",
        name: "To Serve and Protect: Camp Drybone",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests in Halatali.",
        name: "To Serve and Protect: Halatali",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at Camp Horizon.",
        name: "To Serve and Protect: Camp Horizon",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests in Nophica's Wells.",
        name: "To Serve and Protect: Nophica's Wells",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at Camp Broken Water.",
        name: "To Serve and Protect: Camp Broken Water",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 behests at each aetheryte camp and aetherial gate in Thanalan.",
        name: "Thanalan Got Served...and Protected",
        points: 10,
        reward: "Title: The Shield of Thanalan"
    }, {
        description: "Complete 10 behests at every aetheryte camp and aetherial gate in La Noscea, the Black Shroud, and Thanalan.",
        name: "Eorzea Got Served...and Protected",
        points: 20,
        reward: "Title: The Shield of Eorzea"
    }, {
        description: "Complete 10 faction levequests for the Brotherhood of the Broken Blade.",
        name: "Leaning Towards the Brotherhood",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 50 faction levequests for the Brotherhood of the Broken Blade.",
        name: "Love Thy Brother",
        points: 10,
        reward: "Title: Brother of the Broken Blade"
    }, {
        description: "Complete 10 faction levequests for Azeyma's Shields.",
        name: "Leaning Towards the Shield",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 50 faction levequests for Azeyma's Shields.",
        name: "Another Brick in the Shield Wall",
        points: 10,
        reward: "Title: The Warden's Wall"
    }, {
        description: "Complete 10 faction levequests for the Horn and Hand.",
        name: "Leaning Towards the Horn",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 50 faction levequests for the Horn and Hand.",
        name: "A Helping Horn",
        points: 10,
        reward: "Title: Bearer of the Horn"
    }, {
        description: "Complete 50 faction levequests each for the Brotherhood of the Broken Blade, Azeyma's Shields, and the Horn and Hand.",
        name: "Commitment Issues",
        points: 20,
        reward: "Title: The Uncommitted"
    }, {
        description: "Complete the paladin job quest \u201cKeeping the Oath.\u201d",
        name: "Like a Knight in Shining Armor I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the monk job quest \u201cFive Easy Pieces.\u201d",
        name: "Bulletproof I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the warrior job quest \u201cHow to Quit You.\u201d",
        name: "I Am the Warrior I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the dragoon job quest \u201cInto the Dragon's Maw.\u201d",
        name: "Dragoon Age I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the bard job quest \u201cRequiem for the Fallen.\u201d",
        name: "A Bard's Tale I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the white mage job quest \u201cHeart of the Forest.\u201d",
        name: "Seeing White I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the black mage job quest \u201cAlways Bet on Black.\u201d",
        name: "Back in Black I",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain the following seven achievements: \u201cLike a Knight in Shining Armor,\u201d \u201cBulletproof,\u201d \u201cI Am the Warrior,\u201d Dragoon Age,\u201c \u201dA Bard's Tale,\u201c \u201dSeeing White,\u201c and \u201dBack in Black.\u201c",
        name: "Career Opportunities",
        points: 20,
        reward: "Title: The Professional"
    }, {
        description: "Complete the entire scenario centered around Dalamud and the Empire's Meteor project.",
        name: "Once in a Lifetime",
        points: 20,
        reward: "-"
    }, {
        description: "Defeat 11th Order Patriarch Gu Bu during the Battle for Aleport.",
        name: "Patricide",
        points: 5,
        reward: "Title: Inquisitor"
    }, {
        description: "Defeat Sazel Ciloc the Divine during the Battle for Hyrstmill.",
        name: "To Kill a Mocking Bird",
        points: 5,
        reward: "Title: Divine Crusher"
    }, {
        description: "Defeat Stonespike Tanadd Gah during the battle for the Golden Bazaar.",
        name: "Pounding the Spike",
        points: 5,
        reward: "Title: Stonesplitter"
    }, {
        description: "Receive a score of 10,000 or better for your efforts during a victorious campaign in the Battle for Aleport.",
        name: "An Eye on the Ale I",
        points: 5,
        reward: "-"
    }, {
        description: "Receive a score of 20,000 or better for your efforts during a victorious campaign in the Battle for Aleport.",
        name: "An Eye on the Ale II",
        points: 5,
        reward: "-"
    }, {
        description: "Receive a score of 30,000 or better for your efforts during a victorious campaign in the Battle for Aleport.",
        name: "An Eye on the Ale III",
        points: 5,
        reward: "-"
    }, {
        description: "Receive a score of 40,000 or better for your efforts during a victorious campaign in the Battle for Aleport.",
        name: "An Eye on the Ale IV",
        points: 5,
        reward: "-"
    }, {
        description: "Receive a score of 50,000 or better for your efforts during a victorious campaign in the Battle for Aleport.",
        name: "First Blood: Aleport",
        points: 10,
        reward: "Title: A Kobold's Worst Nightmare"
    }, {
        description: "Receive a score of 10,000 or better for your efforts during a victorious campaign in the Battle for Hyrstmill.",
        name: "An Eye on the Trees I",
        points: 5,
        reward: "-"
    }, {
        description: "Receive a score of 20,000 or better for your efforts during a victorious campaign in the Battle for Hyrstmill.",
        name: "An Eye on the Trees II",
        points: 5,
        reward: "-"
    }, {
        description: "Receive a score of 30,000 or better for your efforts during a victorious campaign in the Battle for Hyrstmill.",
        name: "An Eye on the Trees III",
        points: 5,
        reward: "-"
    }, {
        description: "Receive a score of 40,000 or better for your efforts during a victorious campaign in the Battle for Hyrstmill.",
        name: "An Eye on the Trees IV",
        points: 5,
        reward: "-"
    }, {
        description: "Receive a score of 50,000 or better for your efforts during a victorious campaign in the Battle for Hyrstmill.",
        name: "First Blood: Hyrstmill",
        points: 10,
        reward: "Title: An Ixal's Worst Nightmare"
    }, {
        description: "Receive a score of 10,000 or better for your efforts during a victorious campaign in the Battle for the Golden Bazaar.",
        name: "An Eye on the Gold I",
        points: 5,
        reward: "-"
    }, {
        description: "Receive a score of 20,000 or better for your efforts during a victorious campaign in the Battle for the Golden Bazaar.",
        name: "An Eye on the Gold II",
        points: 5,
        reward: "-"
    }, {
        description: "Receive a score of 30,000 or better for your efforts during a victorious campaign in the Battle for the Golden Bazaar.",
        name: "An Eye on the Gold III",
        points: 5,
        reward: "-"
    }, {
        description: "Receive a score of 40,000 or better for your efforts during a victorious campaign in the Battle for the Golden Bazaar.",
        name: "An Eye on the Gold IV",
        points: 5,
        reward: "-"
    }, {
        description: "Receive a score of 50,000 or better for your efforts during a victorious campaign in the Battle for the Golden Bazaar.",
        name: "First Blood: Golden Bazaar",
        points: 10,
        reward: "Title: An Amalj'aa's Worst Nightmare"
    }, {
        description: "Defend Aleport from invading kobold forces 5 times.",
        name: "Holding the Hamlet: Aleport I",
        points: 5,
        reward: "-"
    }, {
        description: "Defend Aleport from invading kobold forces 10 times.",
        name: "Holding the Hamlet: Aleport II",
        points: 5,
        reward: "-"
    }, {
        description: "Defend Aleport from invading kobold forces 50 times.",
        name: "Holding the Hamlet: Aleport III",
        points: 5,
        reward: "-"
    }, {
        description: "Defend Aleport from invading kobold forces 100 times.",
        name: "Holding the Hamlet: Aleport IV",
        points: 5,
        reward: "-"
    }, {
        description: "Defend Aleport from invading kobold forces 1,000 times.",
        name: "To Be or Not to Be the Guardian of Aleport",
        points: 10,
        reward: "Title: The Guardian of Aleport"
    }, {
        description: "Defend Hyrstmill from invading Ixali forces 5 times.",
        name: "Holding the Hamlet: Hyrstmill I",
        points: 5,
        reward: "-"
    }, {
        description: "Defend Hyrstmill from invading Ixali forces 10 times.",
        name: "Holding the Hamlet: Hyrstmill II",
        points: 5,
        reward: "-"
    }, {
        description: "Defend Hyrstmill from invading Ixali forces 50 times.",
        name: "Holding the Hamlet: Hyrstmill III",
        points: 5,
        reward: "-"
    }, {
        description: "Defend Hyrstmill from invading Ixali forces 100 times.",
        name: "Holding the Hamlet: Hyrstmill IV",
        points: 5,
        reward: "-"
    }, {
        description: "Defend Hyrstmill from invading Ixali forces 1,000 times.",
        name: "To Be or Not to Be the Guardian of Hyrstmill",
        points: 10,
        reward: "Title: The Guardian of Hyrstmill"
    }, {
        description: "Defend the Golden Bazaar from invading Amalj'aa forces 5 times.",
        name: "Holding the Hamlet: Golden Bazaar I",
        points: 5,
        reward: "-"
    }, {
        description: "Defend the Golden Bazaar from invading Amalj'aa forces 10 times.",
        name: "Holding the Hamlet: Golden Bazaar II",
        points: 5,
        reward: "-"
    }, {
        description: "Defend the Golden Bazaar from invading Amalj'aa forces 50 times.",
        name: "Holding the Hamlet: Golden Bazaar III",
        points: 5,
        reward: "-"
    }, {
        description: "Defend the Golden Bazaar from invading Amalj'aa forces 100 times.",
        name: "Holding the Hamlet: Golden Bazaar IV",
        points: 5,
        reward: "-"
    }, {
        description: "Defend the Golden Bazaar from invading Amalj'aa forces 1,000 times.",
        name: "To Be or Not to Be the Guardian of the Golden Bazaar",
        points: 10,
        reward: "Title: The Guardian of the Golden Bazaar"
    }, {
        description: "Procure and submit supplies 10 times during the Battle for Aleport.",
        name: "Helping the Hamlet: Aleport I",
        points: 5,
        reward: "-"
    }, {
        description: "Procure and submit supplies 100 times during the Battle for Aleport.",
        name: "Helping the Hamlet: Aleport II",
        points: 5,
        reward: "-"
    }, {
        description: "Procure and submit supplies 500 times during the Battle for Aleport.",
        name: "Helping the Hamlet: Aleport III",
        points: 5,
        reward: "-"
    }, {
        description: "Procure and submit supplies 1,000 times during the Battle for Aleport.",
        name: "Helping the Hamlet: Aleport IV",
        points: 5,
        reward: "-"
    }, {
        description: "Procure and submit supplies 10,000 times during the Battle for Aleport.",
        name: "To Be or Not to Be the Wind of Aleport",
        points: 10,
        reward: "Title: The Wind of Aleport"
    }, {
        description: "Procure and submit supplies 10 times during the Battle for Hyrstmill.",
        name: "Helping the Hamlet: Hyrstmill I",
        points: 5,
        reward: "-"
    }, {
        description: "Procure and submit supplies 100 times during the Battle for Hyrstmill.",
        name: "Helping the Hamlet: Hyrstmill II",
        points: 5,
        reward: "-"
    }, {
        description: "Procure and submit supplies 500 times during the Battle for Hyrstmill.",
        name: "Helping the Hamlet: Hyrstmill III",
        points: 5,
        reward: "-"
    }, {
        description: "Procure and submit supplies 1,000 times during the Battle for Hyrstmill.",
        name: "Helping the Hamlet: Hyrstmill IV",
        points: 5,
        reward: "-"
    }, {
        description: "Procure and submit supplies 10,000 times during the Battle for Hyrstmill.",
        name: "To Be or Not to Be the Wind of Hyrstmill",
        points: 10,
        reward: "Title: The Wind of Hyrstmill"
    }, {
        description: "Procure and submit supplies 10 times during the Battle for the Golden Bazaar.",
        name: "Helping the Hamlet: Golden Bazaar I",
        points: 5,
        reward: "-"
    }, {
        description: "Procure and submit supplies 100 times during the Battle for the Golden Bazaar.",
        name: "Helping the Hamlet: Golden Bazaar II",
        points: 5,
        reward: "-"
    }, {
        description: "Procure and submit supplies 500 times during the Battle for the Golden Bazaar.",
        name: "Helping the Hamlet: Golden Bazaar III",
        points: 5,
        reward: "-"
    }, {
        description: "Procure and submit supplies 1,000 times during the Battle for the Golden Bazaar.",
        name: "Helping the Hamlet: Golden Bazaar IV",
        points: 5,
        reward: "-"
    }, {
        description: "Procure and submit supplies 10,000 times during the Battle for the Golden Bazaar.",
        name: "To Be or Not to Be the Wind of the Golden Bazaar",
        points: 10,
        reward: "Title: The Wind of the Golden Bazaar"
    }, {
        description: "Craft and submit materia-augmented equipment 10 times during the Battle for Aleport.",
        name: "Habiting the Hamlet: Aleport I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and submit materia-augmented equipment 100 times during the Battle for Aleport.",
        name: "Habiting the Hamlet: Aleport II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and submit materia-augmented equipment 500 times during the Battle for Aleport.",
        name: "Habiting the Hamlet: Aleport III",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and submit materia-augmented equipment 1,000 times during the Battle for Aleport.",
        name: "Habiting the Hamlet: Aleport IV",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and submit materia-augmented equipment 10,000 times during the Battle for Aleport.",
        name: "To Be or Not to Be the Hand of Aleport",
        points: 10,
        reward: "Title: The Hand of Aleport"
    }, {
        description: "Craft and submit materia-augmented equipment 10 times during the Battle for Hyrstmill.",
        name: "Habiting the Hamlet: Hyrstmill I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and submit materia-augmented equipment 100 times during the Battle for Hyrstmill.",
        name: "Habiting the Hamlet: Hyrstmill II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and submit materia-augmented equipment 500 times during the Battle for Hyrstmill.",
        name: "Habiting the Hamlet: Hyrstmill III",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and submit materia-augmented equipment 1,000 times during the Battle for Hyrstmill.",
        name: "Habiting the Hamlet: Hyrstmill IV",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and submit materia-augmented equipment 10,000 times during the Battle for Hyrstmill.",
        name: "To Be or Not to Be the Hand of Hyrstmill",
        points: 10,
        reward: "Title: The Hand of Hyrstmill"
    }, {
        description: "Craft and submit materia-augmented equipment 10 times during the Battle for the Golden Bazaar.",
        name: "Habiting the Hamlet: Golden Bazaar I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and submit materia-augmented equipment 100 times during the Battle for the Golden Bazaar.",
        name: "Habiting the Hamlet: Golden Bazaar II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and submit materia-augmented equipment 500 times during the Battle for the Golden Bazaar.",
        name: "Habiting the Hamlet: Golden Bazaar III",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and submit materia-augmented equipment 1,000 times during the Battle for the Golden Bazaar.",
        name: "Habiting the Hamlet: Golden Bazaar IV",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and submit materia-augmented equipment 10,000 times during the Battle for the Golden Bazaar.",
        name: "To Be or Not to Be the Hand of the Golden Bazaar",
        points: 10,
        reward: "Title: The Hand of the Golden Bazaar"
    }, {
        description: "Emerge victorious in the Battle for Aleport without the assistance of any Disciples of the Land or Hand.",
        name: "Leave Your Hammer at Home: Aleport",
        points: 5,
        reward: "-"
    }, {
        description: "Emerge victorious in the Battle for Hyrstmill without the assistance of any Disciples of the Land or Hand.",
        name: "Leave Your Hammer at Home: Hyrstmill",
        points: 5,
        reward: "-"
    }, {
        description: "Emerge victorious in the Battle for the Golden Bazaar without the assistance of any Disciples of the Land or Hand.",
        name: "Leave Your Hammer at Home: Golden Bazaar",
        points: 5,
        reward: "-"
    }, {
        description: "Emerge victorious in the Battle for Aleport without the assistance of any Disciples of War or Magic.",
        name: "Make Stuff, Not War: Aleport",
        points: 5,
        reward: "-"
    }, {
        description: "Emerge victorious in the Battle for Hyrstmill without the assistance of any Disciples of War or Magic.",
        name: "Make Stuff, Not War: Hyrstmill",
        points: 5,
        reward: "-"
    }, {
        description: "Emerge victorious in the Battle for the Golden Bazaar without the assistance of any Disciples of War or Magic.",
        name: "Make Stuff, Not War: Golden Bazaar",
        points: 5,
        reward: "-"
    }, {
        description: "Emerge victorious in the Battle for Aleport, the Battle for Hyrstmill, and the Battle for the Golden Bazaar.",
        name: "Looking Out for the Little People",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the summoner job quest \u201cPrimal Burdens.\u201d",
        name: "Soul Summoner I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the scholar job quest \u201cThe Beast Within.\u201d",
        name: "Flying Colors I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 fieldcraft levequests.",
        name: "In the Outfield I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 fieldcraft levequests.",
        name: "In the Outfield II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 50 fieldcraft levequests.",
        name: "In the Outfield III",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 100 fieldcraft levequests.",
        name: "In the Outfield IV",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 200 fieldcraft levequests.",
        name: "In the Outfield V",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 500 fieldcraft levequests.",
        name: "In the Outfield VI",
        points: 10,
        reward: "Title: The Reaper"
    }, {
        description: "Complete 1,000 fieldcraft levequests.",
        name: "Field of Dreams",
        points: 20,
        reward: "-"
    }, {
        description: "Complete 10 unique battlecraft levequests.",
        name: "Uphill Battle I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 50 unique battlecraft levequests.",
        name: "Uphill Battle II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 100 unique battlecraft levequests.",
        name: "Uphill Battle III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 5 unique carpenter levequests.",
        name: "With Saw in Hand I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 unique carpenter levequests.",
        name: "With Saw in Hand II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 40 unique carpenter levequests.",
        name: "With Saw in Hand III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 5 unique blacksmith levequests.",
        name: "With Hammer in Hand I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 unique blacksmith levequests.",
        name: "With Hammer in Hand II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 40 unique blacksmith levequests.",
        name: "With Hammer in Hand III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 5 unique armorer levequests.",
        name: "With Steel in Hand I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 unique armorer levequests.",
        name: "With Steel in Hand II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 40 unique armorer levequests.",
        name: "With Steel in Hand III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 5 unique goldsmith levequests.",
        name: "With Gem in Hand I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 unique goldsmith levequests.",
        name: "With Gem in Hand II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 40 unique goldsmith levequests.",
        name: "With Gem in Hand III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 5 unique leatherworker levequests.",
        name: "With Skin in Hand I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 unique leatherworker levequests.",
        name: "With Skin in Hand II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 40 unique leatherworker levequests.",
        name: "With Skin in Hand III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 5 unique weaver levequests.",
        name: "With Needle in Hand I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 unique weaver levequests.",
        name: "With Needle in Hand II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 40 unique weaver levequests.",
        name: "With Needle in Hand III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 5 unique alchemist levequests.",
        name: "With Pestle in Hand I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 unique alchemist levequests.",
        name: "With Pestle in Hand II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 40 unique alchemist levequests.",
        name: "With Pestle in Hand III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 5 unique culinarian levequests.",
        name: "With Pan in Hand I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 unique culinarian levequests.",
        name: "With Pan in Hand II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 40 unique culinarian levequests.",
        name: "With Pan in Hand III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 5 unique miner levequests.",
        name: "With Pick in Hand I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 unique miner levequests.",
        name: "With Pick in Hand II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 40 unique miner levequests.",
        name: "With Pick in Hand III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 5 unique botanist levequests.",
        name: "With Axe in Hand I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 unique botanist levequests.",
        name: "With Axe in Hand II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 40 unique botanist levequests.",
        name: "With Axe in Hand III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 5 unique fisher levequests.",
        name: "With Bait in Hand I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 20 unique fisher levequests.",
        name: "With Bait in Hand II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 40 unique fisher levequests.",
        name: "With Bait in Hand III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 3 unique guildhests.",
        name: "Father Knows Hest I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 7 unique guildhests.",
        name: "Father Knows Hest II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 14 unique guildhests.",
        name: "Father Knows Hest III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete the main scenario quest \u201cBack from the Wood.\u201d",
        name: "Back from the Wood",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the main scenario quest \u201cSkeletons in Her Closet.\u201d",
        name: "Skeletons",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the main scenario quest \u201cAll Good Things.\u201d",
        name: "Those Who Wait",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the main scenario quest \u201cIn Pursuit of the Past.\u201d",
        name: "History Repeating",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the main scenario quest \u201cLady of the Vortex.\u201d",
        name: "Free Wing Night",
        points: 10,
        reward: "-"
    }, {
        description: "Complete all the main scenario quests.",
        name: "Warrior of Light",
        points: 20,
        reward: "-"
    }, {
        description: "Complete 10 unique quests.",
        name: "Storyteller I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 30 unique quests.",
        name: "Storyteller II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 100 unique quests.",
        name: "Storyteller III",
        points: 20,
        reward: "-"
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
        description: "Complete the main scenario quest \u201cBuild on the Stone.\u201d",
        name: "A Realm Awoken",
        points: 20,
        reward: "-"
    }, {
        description: "Complete the main scenario quest \u201cThrough the Maelstrom.\u201d",
        name: "Through the Maelstrom",
        points: 20,
        reward: "-"
    }, {
        description: "Complete the quest \u201cAlisaie's Pledge.\u201d",
        name: "The Truth Is Down There",
        points: 10,
        reward: "-"
    }, {
        description: "Complete the quest \u201cAlisaie's Resolve.\u201d",
        name: "You Can Handle the Truth",
        points: 20,
        reward: "-"
    }, {
        description: "Complete the quest \u201cThe Beast of Brewer's Beacon.\u201d",
        name: "I Like Big Fish and I Cannot Lie",
        points: 10,
        reward: "Title: The Ambitious Angler"
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
    }]
}