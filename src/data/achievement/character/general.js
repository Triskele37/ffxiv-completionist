import { DataGroup } from "../../DataGroup";

export const Achievements_Character_General = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        name: "A Life of Adventure I",
        points: "30",
        task: "Obtain the achievements Mastering War I and Mastering Magic I.",
        reward: "Paragon's Crown"
    }, {
        name: "A Life of Adventure II",
        points: "30",
        task: "Obtain the achievements Mastering War II and Mastering Magic II.",
        reward: "Warlord's Crown"
    }, {
        name: "A Life of Adventure II",
        points: "30",
        task: "Obtain the achievements Mastering War III and Mastering Magic III.",
        reward: "Dynasty Crown"
    }, {
        name: "A Life of Adventure IV",
        points: "30",
        task: "Obtain the achievements Mastering War IV and Mastering Magic IV.",
        reward: "Amaro Mount"
    }, {
        name: "You Look Marvelous I",
        points: "5",
        task: "Be awarded a total of 80 points in the Fashion Report.",
        reward: ""
    }, {
        name: "You Look Marvelous II",
        points: "5",
        task: "Be awarded a total of 90 points in the Fashion Report.",
        reward: "Title: Fashion Leader"
    }, {
        name: "You Look Marvelous III",
        points: "10",
        task: "Be awarded a total of 100 points in the Fashion Report.",
        reward: ""
    }, {
        name: "Mastering the Land I",
        points: "20",
        task: "Achieve level 50 as a miner, botanist, and fisher.",
        reward: "Title: Provider of the Realm"
    }, {
        name: "Mastering the Land II",
        points: "20",
        task: "Achieve level 60 as a miner, botanist, and fisher.",
        reward: "Title: Grandmaster of the Land"
    }, {
        name: "Mastering the Land III",
        points: "20",
        task: "Achieve level 70 as a miner, botanist, and fisher.",
        reward: "Title: God/Goddess of the Land"
    }, {
        name: "Mastering the Land IV",
        points: "20",
        task: "Achieve level 80 as a miner, botanist, and fisher.",
        reward: "Title: Soul of the Harvest"
    }, {
        name: "Can't Someone Else Do It I",
        points: "5",
        task: "Complete 5 retainer ventures.",
        reward: ""
    }, {
        name: "Can't Someone Else Do It II",
        points: "5",
        task: "Complete 50 retainer ventures.",
        reward: ""
    }, {
        name: "Can't Someone Else Do It III",
        points: "10",
        task: "Complete 100 retainer ventures.",
        reward: ""
    }, {
        name: "Nothing Ventured, Nothing Gained",
        points: "20",
        task: "Complete 500 retainer ventures.",
        reward: ""
    }, {
        name: "Mastering the Hand I",
        points: "20",
        task: "Achieve level 50 as a carpenter, blacksmith, armorer, goldsmith, leatherworker, weaver, alchemist, and culinarian.",
        reward: "Title: Builder of the Realm"
    }, {
        name: "Mastering the Hand II",
        points: "20",
        task: "Achieve level 60 as a carpenter, blacksmith, armorer, goldsmith, leatherworker, weaver, alchemist, and culinarian.",
        reward: "Title: Grandmaster of the Hand"
    }, {
        name: "Mastering the Hand III",
        points: "20",
        task: "Achieve level 70 as a carpenter, blacksmith, armorer, goldsmith, leatherworker, weaver, alchemist, and culinarian.",
        reward: "Title: God/Goddess of the Hand"
    }, {
        name: "Mastering the Hand IV",
        points: "20",
        task: "Achieve level 80 as a carpenter, blacksmith, armorer, goldsmith, leatherworker, weaver, alchemist, and culinarian.",
        reward: "Title: Soul of the Craft"
    }, {
        name: "Mastering War I",
        points: "20",
        task: "Achieve level 50 as a gladiator, pugilist, marauder, archer, and lancer.",
        reward: "Title: Warmonger"
    }, {
        name: "Mastering War II",
        points: "20",
        task: "Achieve level 60 as a gladiator, pugilist, marauder, lancer, archer, rogue, dark knight, and machinist.",
        reward: "Title: Grandmaster of War"
    }, {
        name: "Mastering War III",
        points: "20",
        task: "Achieve level 70 as a gladiator, pugilist, marauder, lancer, archer, rogue, dark knight, machinist, and samurai.",
        reward: "Title: God/Goddess of the War"
    }, {
        name: "Mastering War IV",
        points: "20",
        task: "Achieve level 80 as a gladiator, pugilist, marauder, lancer, archer, rogue, dark knight, machinist, samurai, gunbreaker and dancer.",
        reward: "Title: Soul of War"
    }, {
        name: "Mastering Magic I",
        points: "20",
        task: "Achieve level 50 as a conjurer, thaumaturge, and arcanist.",
        reward: "Title: Archmage"
    }, {
        name: "Mastering Magic II",
        points: "20",
        task: "Achieve level 60 as a conjurer, thaumaturge, arcanist, and astrologian.",
        reward: "Title: Grandmaster of Magic"
    }, {
        name: "Mastering Magic III",
        points: "20",
        task: "Achieve level 70 as a conjurer, thaumaturge, arcanist, astrologian, and red mage.",
        reward: "Title: God/Goddess of the Magic"
    }, {
        name: "Mastering Magic IV",
        points: "20",
        task: "Achieve level 80 as a conjurer, thaumaturge, arcanist, astrologian, and red mage.",
        reward: "Title: Soul of Magic"
    }, {
        name: "Bio-Doma I",
        points: "5",
        task: "See the Doman Enclave through the first phase of reconstruction.",
        reward: ""
    }, {
        name: "Bio-Doma II",
        points: "10",
        task: "See the Doman Enclave through the second phase of reconstruction.",
        reward: ""
    }, {
        name: "Bio-Doma III",
        points: "10",
        task: "See the Doman Enclave through the third phase of reconstruction.",
        reward: ""
    }, {
        name: "Bio-Doma IV",
        points: "10",
        task: "See the Doman Enclave through the fourth phase of reconstruction.",
        reward: ""
    }, {
        name: "Bio-Doma V",
        points: "20",
        task: "See the Doman Enclave through the fifth phase of reconstruction.",
        reward: "Title: Philanthropist"
    }, {
        name: "I Hope Mentor Will Notice Me I",
        points: "5",
        task: "Complete 10 duties via Duty Roulette: Mentor.",
        reward: ""
    }, {
        name: "I Hope Mentor Will Notice Me II",
        points: "5",
        task: "Complete 50 duties via Duty Roulette: Mentor.",
        reward: "Title: Mentor"
    }, {
        name: "I Hope Mentor Will Notice Me III",
        points: "5",
        task: "Complete 200 duties via Duty Roulette: Mentor.",
        reward: "Expeditioner's Flyers"
    }, {
        name: "I Hope Mentor Will Notice Me IV",
        points: "5",
        task: "Complete 500 duties via Duty Roulette: Mentor.",
        reward: "Title: Mentor of Mentors"
    }, {
        name: "I Hope Mentor Will Notice Me V",
        points: "10",
        task: "Complete 1,000 duties via Duty Roulette: Mentor.",
        reward: "Dragon Monacle"
    }, {
        name: "I Hope Mentor Will Notice Me VI",
        points: "20",
        task: "Complete 2,000 duties via Duty Roulette: Mentor.",
        reward: "Astrope Mount"
    }, {
        name: "Breaking Bo",
        points: "5",
        task: "Train another player's chocobo companion 30 times.",
        reward: "Plumed Barding"
    }, {
        name: "Freebird: Coerthas Western Highlands",
        points: "5",
        task: "Attune with all the aether currents in the Coerthas western highlands.",
        reward: ""
    }, {
        name: "Freebird: Dravanian Forelands",
        points: "5",
        task: "Attune with all the aether currents in the Dravanian forelands.",
        reward: ""
    }, {
        name: "Freebird: Dravanian Hinterlands",
        points: "5",
        task: "Attune with all the aether currents in the Dravanian hinterlands.",
        reward: ""
    }, {
        name: "Freebird: Churning Mists",
        points: "5",
        task: "Attune with all the aether currents in the Churning Mists.",
        reward: ""
    }, {
        name: "Freebird: Sea of Clouds",
        points: "5",
        task: "Attune with all the aether currents in the Sea of Clouds.",
        reward: ""
    }, {
        name: "Freebird: Azys Lla",
        points: "5",
        task: "Attune with all the aether currents on Azys Lla.",
        reward: ""
    }, {
        name: "Freebird: The Fringes",
        points: "5",
        task: "Attune with all the aether currents on The Fringes.",
        reward: ""
    }, {
        name: "Freebird: The Peaks",
        points: "5",
        task: "Attune with all the aether currents on The Peaks.",
        reward: ""
    }, {
        name: "Freebird: The Lochs",
        points: "5",
        task: "Attune with all the aether currents on The Lochs.",
        reward: ""
    }, {
        name: "Freebird: Ruby Sea",
        points: "5",
        task: "Attune with all the aether currents on the Ruby Sea.",
        reward: ""
    }, {
        name: "Freebird: Yanxia",
        points: "5",
        task: "Attune with all the aether currents on Yanxia.",
        reward: ""
    }, {
        name: "Freebird: Azim Steppe",
        points: "5",
        task: "Attune with all the aether currents on Azim Steppe.",
        reward: ""
    }, {
        name: "Freebird: Lakeland",
        points: "5",
        task: "Attune with all the aether currents on Lakeland.",
        reward: ""
    }, {
        name: "Freebird: Kholusia",
        points: "5",
        task: "Attune with all the aether currents on Kholusia.",
        reward: ""
    }, {
        name: "Freebird: Amh Araeng",
        points: "5",
        task: "Attune with all the aether currents on Amh Araeg.",
        reward: ""
    }, {
        name: "Freebird: Il Mheg",
        points: "5",
        task: "Attune with all the aether currents on Il Mheg.",
        reward: ""
    }, {
        name: "Freebird: The Rak'tika Greatwood",
        points: "5",
        task: "Attune with all the aether currents on The Rak'tika Greatwood.",
        reward: ""
    }, {
        name: "Freebird: The Tempest",
        points: "5",
        task: "Attune with all the aether currents on the Tempest",
        reward: ""
    }, {
        name: "Frequent Flyer",
        points: "10",
        task: "Obtain first six \"Freebird\" achievements.",
        reward: ""
    }, {
        name: "Frequent Flyer II",
        points: "10",
        task: "Obtain next six \"Freebird\" achievements.",
        reward: ""
    }, {
        name: "Frequent Flyer III",
        points: "10",
        task: "Obtain \"Freebird\" achievements for Lakeland, Kholusia, Amh Araeng, Il Mheg, the Rak'tika Greatwood, and the Tempest. ",
        reward: ""
    }, {
        name: "Bound by Faith",
        points: "20",
        task: "Achieve trust level 80 with the avatars for Alphinaud, Alisaie, Thancred, Urianger, Y'shtola, and Ryne. ",
        reward: "Title: Trusted Friend"
    }, {
        name: "Satisfaction Guaranteed: Zhloe Aliapoh I",
        points: "5",
        task: "Achieve a satisfaction level of 1 with Zhloe Aliapoh.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Zhloe Aliapoh II",
        points: "5",
        task: "Achieve a satisfaction level of 2 with Zhloe Aliapoh.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Zhloe Aliapoh III",
        points: "5",
        task: "Achieve a satisfaction level of 3 with Zhloe Aliapoh.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Zhloe Aliapoh IV",
        points: "5",
        task: "Achieve a satisfaction level of 4 with Zhloe Aliapoh.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Zhloe Aliapoh V",
        points: "10",
        task: "Achieve a satisfaction level of 5 with Zhloe Aliapoh.",
        reward: "Title: Zhloe's Friend"
    }, {
        name: "Satisfaction Guaranteed: M'naago I",
        points: "5",
        task: "Achieve a satisfaction level of 1 with M'naago.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: M'naago II",
        points: "5",
        task: "Achieve a satisfaction level of 2 with M'naago.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: M'naago III",
        points: "5",
        task: "Achieve a satisfaction level of 3 with M'naago.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: M'naago IV",
        points: "5",
        task: "Achieve a satisfaction level of 4 with M'naago.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: M'naago V",
        points: "10",
        task: "Achieve a satisfaction level of 5 with M'naago.",
        reward: "Title: Naago's Friend"
    }, {
        name: "Satisfaction Guaranteed: Kurenai I",
        points: "5",
        task: "Achieve a satisfaction level of 1 with Kurenai.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Kurenai II",
        points: "5",
        task: "Achieve a satisfaction level of 2 with Kurenai.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Kurenai III",
        points: "5",
        task: "Achieve a satisfaction level of 3 with Kurenai.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Kurenai IV",
        points: "5",
        task: "Achieve a satisfaction level of 4 with Kurenai.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Kurenai V",
        points: "10",
        task: "Achieve a satisfaction level of 5 with Kurenai.",
        reward: "Title: Kurenai's Best"
    }, {
        name: "Satisfaction Guaranteed: Adkiragh I",
        points: "5",
        task: "Achieve a satisfaction level of 1 with Adkiragh.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Adkiragh II",
        points: "5",
        task: "Achieve a satisfaction level of 2 with Adkiragh.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Adkiragh III",
        points: "5",
        task: "Achieve a satisfaction level of 3 with Adkiragh.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Adkiragh IV",
        points: "5",
        task: "Achieve a satisfaction level of 4 with Adkiragh.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Adkiragh V",
        points: "5",
        task: "Achieve a satisfaction level of 5 with Adkiragh.",
        reward: "Title: Little Piggie"
    }, {
        name: "Satisfaction Guaranteed: Kai-Shirr I",
        points: "5",
        task: "Achieve a satisfaction level of 1 with Kai-Shirr.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Kai-Shirr II",
        points: "5",
        task: "Achieve a satisfaction level of 2 with Kai-Shirr.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Kai-Shirr III",
        points: "5",
        task: "Achieve a satisfaction level of 3 with Kai-Shirr.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Kai-Shirr IV",
        points: "5",
        task: "Achieve a satisfaction level of 4 with Kai-Shirr.",
        reward: ""
    }, {
        name: "Satisfaction Guaranteed: Kai-Shirr V",
        points: "10",
        task: "Achieve a satisfaction level of 5 with Kai-Shirr.",
        reward: "Title: Kai-Shirr's Best Mate"
    }, {
        name: "And Khloe Was Her Name-o I",
        points: "5",
        task: "Successfully complete a series of Wondrous Tails.",
        reward: ""
    }, {
        name: "And Khloe Was Her Name-o II",
        points: "5",
        task: "Successfully complete 5 series of Wondrous Tails.",
        reward: "Title: Khloe's Friend"
    }, {
        name: "And Khloe Was Her Name-o III",
        points: "5",
        task: "Successfully complete 10 series of Wondrous Tails.",
        reward: ""
    }, {
        name: "And Khloe Was Her Name-o IV",
        points: "5",
        task: "Successfully complete 20 series of Wondrous Tails.",
        reward: ""
    }, {
        name: "And Khloe Was Her Name-o V",
        points: "5",
        task: "Successfully complete 30 series of Wondrous Tails.",
        reward: ""
    }, {
        name: "And Khloe Was Her Name-o VI",
        points: "5",
        task: "Successfully complete 40 series of Wondrous Tails.",
        reward: ""
    }, {
        name: "And Khloe Was Her Name-o VII",
        points: "10",
        task: "Successfully complete 50 series of Wondrous Tails.",
        reward: "Title: Khloe's Best Friend"
    },
];