//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.AchievementKind.Name_en&string=Battle&columns=Name,Description,Points,Item.Name,Title.Name&page=2&limit=250

module.exports = {
    name: 'Battle',
    subGroups: [
		require('./dungeons.js'),
        require('./hunt.js'),
        require('./raids.js'),
        require('./trials.js'),
        require('./treasurehunt.js'),
	],
    tasks: [{
        "description": "Defeat 100 enemies.",

        "name": "To Crush Your Enemies I",
        "points": 5,

    }, {
        "description": "Defeat 500 enemies.",

        "name": "To Crush Your Enemies II",
        "points": 5,

    }, {
        "description": "Defeat 1,000 enemies.",

        "name": "To Crush Your Enemies III",
        "points": 10,

    }, {
        "description": "Defeat 5,000 enemies.",

        "name": "To Crush Your Enemies IV",
        "points": 10,

    }, {
        "description": "Defeat 10,000 enemies.",

        "name": "To Crush Your Enemies V",
        "points": 10,

    }, {
        "description": "Defeat 50,000 enemies.",

        "name": "To Crush Your Enemies VI",
        "points": 10,
        "Title": {
            "name": "The Exterminator"
        }
    }, {
        "description": "Defeat 100,000 enemies.",
        "Item": {
            "name": "Butcher's Crown"
        },
        "name": "Let the Bodies Hit the Floor",
        "points": 30,

    }, {
        "description": "Complete all gladiator entries in the hunting log.",
        "Item": {
            "name": "Master Gladiator's Ring"
        },
        "name": "Bump on a Log: Gladiator",
        "points": 20,

    }, {
        "description": "Complete all pugilist entries in the hunting log.",
        "Item": {
            "name": "Master Pugilist's Ring"
        },
        "name": "Bump on a Log: Pugilist",
        "points": 20,

    }, {
        "description": "Complete all marauder entries in the hunting log.",
        "Item": {
            "name": "Master Marauder's Ring"
        },
        "name": "Bump on a Log: Marauder",
        "points": 20,

    }, {
        "description": "Complete all lancer entries in the hunting log.",
        "Item": {
            "name": "Master Lancer's Ring"
        },
        "name": "Bump on a Log: Lancer",
        "points": 20,

    }, {
        "description": "Complete all archer entries in the hunting log.",
        "Item": {
            "name": "Master Archer's Ring"
        },
        "name": "Bump on a Log: Archer",
        "points": 20,

    }, {
        "description": "Complete all conjurer entries in the hunting log.",
        "Item": {
            "name": "Master Conjurer's Ring"
        },
        "name": "Bump on a Log: Conjurer",
        "points": 20,

    }, {
        "description": "Complete all thaumaturge entries in the hunting log.",
        "Item": {
            "name": "Master Thaumaturge's Ring"
        },
        "name": "Bump on a Log: Thaumaturge",
        "points": 20,

    }, {
        "description": "Complete all arcanist entries in the hunting log.",
        "Item": {
            "name": "Master Arcanist's Ring"
        },
        "name": "Bump on a Log: Arcanist",
        "points": 20,

    }, {
        "description": "Successfully complete 5 unique instanced dungeon raids or trials.",

        "name": "To the Dungeons I",
        "points": 5,

    }, {
        "description": "Successfully complete 10 unique instanced dungeon raids or trials.",

        "name": "To the Dungeons II",
        "points": 10,

    }, {
        "description": "Successfully complete 20 unique instanced dungeon raids or trials.",

        "name": "To the Dungeons III",
        "points": 20,

    }, {
        "description": "Complete 10 instanced dungeon raids or trials.",

        "name": "Dungeon Siege I",
        "points": 5,

    }, {
        "description": "Complete 30 instanced dungeon raids or trials.",

        "name": "Dungeon Siege II",
        "points": 5,

    }, {
        "description": "Complete 100 instanced dungeon raids or trials.",

        "name": "Dungeon Siege III",
        "points": 5,

    }, {
        "description": "Complete 300 instanced dungeon raids or trials.",

        "name": "Dungeon Siege IV",
        "points": 10,
        "Title": {
            "name": "Dungeon Master"
        }
    }, {
        "description": "Complete 1,000 instanced dungeon raids or trials.",

        "name": "Dungeon Master",
        "points": 20,

    }, {
        "description": "Complete the Binding Coil of Bahamut.",

        "name": "The Binds that Tie I",
        "points": 5,

    }, {
        "description": "Complete the Binding Coil of Bahamut 5 times.",

        "name": "The Binds that Tie II",
        "points": 10,

    }, {
        "description": "Complete the Binding Coil of Bahamut 10 times.",

        "name": "The Binds that Tie III",
        "points": 20,

    }, {
        "description": "Successfully complete the FATE “He Taketh It with His Eyes” with the highest rating possible.",

        "name": "Locking Horns",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Steel Reign” with the highest rating possible.",

        "name": "Uncut",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Go, Go, Gorgimera” with the highest rating possible.",

        "name": "When the Going Gets Tough",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “The Eyes Have It” with the highest rating possible.",

        "name": "On the Ropes",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “It's Not Lupus” with the highest rating possible.",

        "name": "Full Remission",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Lazy for You” with the highest rating possible.",

        "name": "Lazy Town",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Dark Devices - The End” with the highest rating possible.",

        "name": "Blood, Sweat, and Blood",
        "points": 10,

    }, {
        "description": "Successfully complete either the FATE “Svara's Fall” or “Svara's Fury” with the highest rating possible.",

        "name": "Ring of Fire",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Clearing the Hive,” “Defending the Hive,” or “Keeping the Hive” with the highest rating possible.",

        "name": "Boughbury Burning",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Attack on Highbridge: Act III” with the highest rating possible.",

        "name": "Curtain Call",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Poor Maid's Misfortune” with the highest rating possible.",

        "name": "Old Maid",
        "points": 10,

    }, {
        "description": "Successfully complete 10 FATEs.",

        "name": "Date With Destiny I",
        "points": 5,

    }, {
        "description": "Successfully complete 100 FATEs.",

        "name": "Date With Destiny II",
        "points": 5,

    }, {
        "description": "Successfully complete 300 FATEs.",

        "name": "Date With Destiny III",
        "points": 10,

    }, {
        "description": "Successfully complete 1,000 FATEs.",

        "name": "Date With Destiny IV",
        "points": 10,
        "Title": {
            "name": "Tempter of Fate"
        }
    }, {
        "description": "Successfully complete 3,000 FATEs.",
        "Item": {
            "name": "Paragon's Gown"
        },
        "name": "Destiny's Child",
        "points": 20,

    }, {
        "description": "See your companion chocobo to rank 1.",

        "name": "Bosom Buddies I",
        "points": 5,

    }, {
        "description": "See your companion chocobo to rank 5.",

        "name": "Bosom Buddies II",
        "points": 10,

    }, {
        "description": "See your companion chocobo to rank 10.",
        "Item": {
            "name": "Chocobo Suit"
        },
        "name": "Bosom Buddies III",
        "points": 20,

    }, {
        "description": "Defeat Ifrit in the Bowl of Embers (Extreme).",

        "name": "Going Up in Flames",
        "points": 10,

    }, {
        "description": "Defeat Garuda in the Howling Eye (Extreme).",

        "name": "Gone with the Wind",
        "points": 10,

    }, {
        "description": "Defeat Titan in the Navel (Extreme).",

        "name": "Earth to Earth",
        "points": 10,

    }, {
        "description": "Decipher 3 timeworn leather maps and open the treasure coffers to which they lead.",

        "name": "I Can Dig It I",
        "points": 5,

    }, {
        "description": "Decipher 5 timeworn goatskin maps and open the treasure coffers to which they lead.",

        "name": "I Can Dig It II",
        "points": 5,

    }, {
        "description": "Decipher 10 timeworn toadskin maps and open the treasure coffers to which they lead.",

        "name": "I Can Dig It III",
        "points": 5,

    }, {
        "description": "Decipher 20 timeworn boarskin maps and open the treasure coffers to which they lead.",

        "name": "I Can Dig It IV",
        "points": 10,

    }, {
        "description": "Decipher 20 timeworn peisteskin maps and open the treasure coffers to which they lead.",

        "name": "No Stone Unturned",
        "points": 20,
        "Title": {
            "name": "Treasure Hunter"
        }
    }, {
        "description": "Complete the Labyrinth of the Ancients.",

        "name": "You Call That a Labyrinth",
        "points": 10,

    }, {
        "description": "Resurrect a player who is not in your party or alliance.",

        "name": "The Kindness of Strangers",
        "points": 5,

    }, {
        "description": "Resurrect a player who is not in your party or alliance 20 times.",

        "name": "The Kindness of Strangers II",
        "points": 10,

    }, {
        "description": "Complete the Second Coil of Bahamut.",

        "name": "In Another Bind I",
        "points": 5,

    }, {
        "description": "Complete the Second Coil of Bahamut 5 times.",

        "name": "In Another Bind II",
        "points": 10,

    }, {
        "description": "Complete the Second Coil of Bahamut 10 times.",

        "name": "In Another Bind III",
        "points": 20,

    }, {
        "description": "Defeat Leviathan on the Whorleater (Extreme).",

        "name": "I Eat Whorls for Breakfast",
        "points": 10,

    }, {
        "description": "Defeat Good King Moggle Mog XII in Thornmarch (Extreme).",

        "name": "Good Kingslayer",
        "points": 10,

    }, {
        "description": "Complete 50 high-level duties as a paladin.",

        "name": "A Tankless Job I (Paladin)",
        "points": 5,
        "Title": {
            "name": "The Meat Shield"
        }
    }, {
        "description": "Complete 100 high-level duties as a paladin.",

        "name": "A Tankless Job II (Paladin)",
        "points": 10,
        "Title": {
            "name": "Of the Stalwart Shield"
        }
    }, {
        "description": "Complete 200 high-level duties as a paladin.",
        "Item": {
            "name": "Warlion Horn"
        },
        "name": "But Somebody's Gotta Do It (Paladin)",
        "points": 20,

    }, {
        "description": "Complete 50 high-level duties as a warrior.",

        "name": "A Tankless Job I (Warrior)",
        "points": 5,
        "Title": {
            "name": "The Meat Axe"
        }
    }, {
        "description": "Complete 100 high-level duties as a warrior.",

        "name": "A Tankless Job II (Warrior)",
        "points": 10,
        "Title": {
            "name": "Of the Stalwart Axe"
        }
    }, {
        "description": "Complete 200 high-level duties as a warrior.",
        "Item": {
            "name": "Warbear Horn"
        },
        "name": "But Somebody's Gotta Do It (Warrior)",
        "points": 20,

    }, {
        "description": "Slay 4 unique rank B elite marks in the Black Shroud.",

        "name": "Mark of the Holt: B",
        "points": 5,

    }, {
        "description": "Slay 5 unique rank B elite marks in Thanalan.",

        "name": "Mark of the Desert: B",
        "points": 5,

    }, {
        "description": "Slay 6 unique rank B elite marks in La Noscea.",

        "name": "Mark of the Sea: B",
        "points": 5,

    }, {
        "description": "Slay 2 unique rank B elite marks in Mor Dhona or the Coerthas central highlands.",

        "name": "Mark of the Lake: B",
        "points": 5,

    }, {
        "description": "Earn the following four achievements: Mark of the Holt: B, Mark of the Desert: B, Mark of the Sea: B, and Mark of the Lake: B.",

        "name": "On Your Mark: B",
        "points": 10,
        "Title": {
            "name": "Hunter for Hire"
        }
    }, {
        "description": "Slay 4 unique rank A elite marks in the Black Shroud.",

        "name": "Mark of the Holt: A",
        "points": 5,

    }, {
        "description": "Slay 5 unique rank A elite marks in Thanalan.",

        "name": "Mark of the Desert: A",
        "points": 5,

    }, {
        "description": "Slay 6 unique rank A elite marks in La Noscea.",

        "name": "Mark of the Sea: A",
        "points": 5,

    }, {
        "description": "Slay 2 unique rank A elite marks in Mor Dhona or the Coerthas central highlands.",

        "name": "Mark of the Lake: A",
        "points": 5,

    }, {
        "description": "Earn the following four achievements: Mark of the Holt: A, Mark of the Desert: A, Mark of the Sea: A, and Mark of the Lake: A.",

        "name": "On Your Mark: A",
        "points": 10,
        "Title": {
            "name": "Seeker of Fortune"
        }
    }, {
        "description": "Slay 4 unique rank S elite marks in the Black Shroud.",

        "name": "Mark of the Holt: S",
        "points": 5,

    }, {
        "description": "Slay 5 unique rank S elite marks in Thanalan.",

        "name": "Mark of the Desert: S",
        "points": 5,

    }, {
        "description": "Slay 6 unique rank S elite marks in La Noscea.",

        "name": "Mark of the Sea: S",
        "points": 5,

    }, {
        "description": "Slay 2 unique rank S elite marks in Mor Dhona or the Coerthas central highlands.",

        "name": "Mark of the Lake: S",
        "points": 5,

    }, {
        "description": "Earn the following four achievements: Mark of the Holt: S, Mark of the Desert: S, Mark of the Sea: S, and Mark of the Lake: S.",

        "name": "On Your Mark: S",
        "points": 10,
        "Title": {
            "name": "Seasoned Tracker"
        }
    }, {
        "description": "Slay 10 rank B elite marks.",

        "name": "Bring Your B Game I",
        "points": 5,

    }, {
        "description": "Slay 50 rank B elite marks.",

        "name": "Bring Your B Game II",
        "points": 5,

    }, {
        "description": "Slay 300 rank B elite marks.",

        "name": "Bring Your B Game III",
        "points": 5,
        "Title": {
            "name": "Bounty Hunter"
        }
    }, {
        "description": "Slay 1,000 rank B elite marks.",

        "name": "Straight Bs",
        "points": 10,

    }, {
        "description": "Slay 5 rank A elite marks.",

        "name": "Bring Your A Game I",
        "points": 5,

    }, {
        "description": "Slay 30 rank A elite marks.",

        "name": "Bring Your A Game II",
        "points": 5,

    }, {
        "description": "Slay 200 rank A elite marks.",

        "name": "Bring Your A Game III",
        "points": 5,
        "Title": {
            "name": "Soldier of Fortune"
        }
    }, {
        "description": "Slay 500 rank A elite marks.",

        "name": "Straight As",
        "points": 10,

    }, {
        "description": "Slay 3 rank S elite marks.",

        "name": "Bring Your S Game I",
        "points": 5,

    }, {
        "description": "Slay 20 rank S elite marks.",

        "name": "Bring Your S Game II",
        "points": 5,

    }, {
        "description": "Slay 200 rank S elite marks.",

        "name": "Bring Your S Game III",
        "points": 5,
        "Title": {
            "name": "Captain of the Hunt"
        }
    }, {
        "description": "Slay 500 rank S elite marks.",

        "name": "Straight Ss",
        "points": 10,

    }, {
        "description": "Defeat Ramuh at the Striking Tree (Extreme).",

        "name": "Contempt of Court",
        "points": 10,

    }, {
        "description": "Complete Syrcus Tower.",

        "name": "Life is a Syrcus",
        "points": 10,

    }, {
        "description": "Defeat the rafflesia within the first turn of the Second Coil of Bahamut (Savage).",

        "name": "A Flower by Any Other name",
        "points": 10,
        "Title": {
            "name": "Rafflesia Reaper"
        }
    }, {
        "description": "Defeat Melusine within the second turn of the Second Coil of Bahamut (Savage).",

        "name": "Seconds",
        "points": 10,
        "Title": {
            "name": "Melusine Mauler"
        }
    }, {
        "description": "Defeat the Avatar within the third turn of the Second Coil of Bahamut (Savage).",

        "name": "Obtanium",
        "points": 10,
        "Title": {
            "name": "The Avatar"
        }
    }, {
        "description": "Defeat Nael deus Darnus within the fourth turn of the Second Coil of Bahamut (Savage).",

        "name": "Scent of a Woman",
        "points": 10,
        "Title": {
            "name": "Domitor"
        }
    }, {
        "description": "Decipher unhidden leather maps to locate and loot 20 treasure coffers.",

        "name": "Unhide and Seek",
        "points": 20,
        "Title": {
            "name": "Bearer of the Coffer"
        }
    }, {
        "description": "Complete the Final Coil of Bahamut.",
        "Item": {
            "name": "Wind-Up Louisoix"
        },
        "name": "Out of a Bind I",
        "points": 5,

    }, {
        "description": "Complete the Final Coil of Bahamut 5 times.",

        "name": "Out of a Bind II",
        "points": 10,

    }, {
        "description": "Complete the Final Coil of Bahamut 10 times.",

        "name": "Out of a Bind III",
        "points": 20,

    }, {
        "description": "Defeat Shiva in the Akh Afah Amphitheatre (Extreme).",

        "name": "Let It Go",
        "points": 10,

    }, {
        "description": "Complete all rogue entries in the hunting log.",
        "Item": {
            "name": "Master Rogue's Ring"
        },
        "name": "Bump on a Log: Rogue",
        "points": 20,

    }, {
        "description": "Defeat Odin at Urth's Fount.",

        "name": "Missed the Cut",
        "points": 10,
        "Title": {
            "name": "The Unsevered"
        }
    }, {
        "description": "Defeat Vishap on the Steps of Faith.",

        "name": "Broken Bridges",
        "points": 10,

    }, {
        "description": "Defeat Gilgamesh and Enkidu at the Battle in the Big Keep.",

        "name": "Enough Expository Banter",
        "points": 10,

    }, {
        "description": "Defeat Nabriales in the Chrysalis.",

        "name": "Secret Ascian Man",
        "points": 10,

    }, {
        "description": "Clear the World of Darkness.",

        "name": "Let the Sun Shine In",
        "points": 20,

    }, {
        "description": "Complete 50 high-level duties as a dark knight.",

        "name": "A Tankless Job I (Dark Knight)",
        "points": 5,
        "Title": {
            "name": "Dark Driver"
        }
    }, {
        "description": "Complete 100 high-level duties as a dark knight.",

        "name": "A Tankless Job II (Dark Knight)",
        "points": 10,
        "Title": {
            "name": "Of the Stalwart Sword"
        }
    }, {
        "description": "Complete 200 high-level duties as a dark knight.",
        "Item": {
            "name": "Panther Bell"
        },
        "name": "But Somebody's Gotta Do It (Dark Knight)",
        "points": 20,

    }, {
        "description": "Defeat Bismarck in the Limitless Blue (Extreme).",

        "name": "Limitless",
        "points": 10,

    }, {
        "description": "Defeat Ravana on Thok ast Thok (Extreme).",

        "name": "Hive Mind",
        "points": 10,

    }, {
        "description": "Successfully complete 30 unique instanced dungeon raids or trials.",

        "name": "To the Dungeons IV",
        "points": 20,

    }, {
        "description": "Successfully complete 40 unique instanced dungeon raids or trials.",

        "name": "To the Dungeons V",
        "points": 20,

    }, {
        "description": "Successfully complete 50 unique instanced dungeon raids or trials.",

        "name": "To the Dungeons VI",
        "points": 20,

    }, {
        "description": "Successfully complete 2,000 instanced dungeon raids or trials.",

        "name": "Lifer I",
        "points": 20,

    }, {
        "description": "Successfully complete 5,000 instanced dungeon raids or trials.",

        "name": "Lifer II",
        "points": 20,

    }, {
        "description": "Successfully complete 10,000 instanced dungeon raids or trials.",

        "name": "Lifer III",
        "points": 20,

    }, {
        "description": "Complete Alexander: Gordias.",

        "name": "Sins of the Father I",
        "points": 5,

    }, {
        "description": "Complete Alexander: Gordias 5 times.",

        "name": "Sins of the Father II",
        "points": 10,

    }, {
        "description": "Complete Alexander: Gordias 10 times.",

        "name": "Sins of the Father III",
        "points": 20,

    }, {
        "description": "Complete Alexander: Gordias (Savage).",

        "name": "Sins of the Savage Father I",
        "points": 5,

    }, {
        "description": "Complete Alexander: Gordias (Savage) 5 times.",

        "name": "Sins of the Savage Father II",
        "points": 10,

    }, {
        "description": "Complete Alexander: Gordias (Savage) 10 times.",

        "name": "Sins of the Savage Father III",
        "points": 20,

    }, {
        "description": "Slay 6 unique rank B elite marks in the Dravanian hinterlands, the Dravanian forelands, or the Churning Mists.",

        "name": "Mark of the Dragon: B",
        "points": 5,

    }, {
        "description": "Slay 6 unique rank B elite marks in the Coerthas western highlands, the Sea of Clouds, or Azys Lla.",

        "name": "Mark of Cloud and Ice: B",
        "points": 5,

    }, {
        "description": "Slay 6 unique rank A elite marks in the Dravanian hinterlands, the Dravanian forelands, or the Churning Mists.",

        "name": "Mark of the Dragon: A",
        "points": 5,

    }, {
        "description": "Slay 6 unique rank A elite marks in the Coerthas western highlands, the Sea of Clouds, or Azys Lla.",

        "name": "Mark of Cloud and Ice: A",
        "points": 5,

    }, {
        "description": "Slay 3 unique rank S elite marks in the Dravanian hinterlands, the Dravanian forelands, or the Churning Mists.",

        "name": "Mark of the Dragon: S",
        "points": 5,

    }, {
        "description": "Slay 3 unique rank S elite marks in the Coerthas western highlands, the Sea of Clouds, or Azys Lla.",

        "name": "Mark of Cloud and Ice: S",
        "points": 5,

    }, {
        "description": "Decipher 20 timeworn archaeoskin maps and open the treasure coffers to which they lead.",

        "name": "I Can Dig It V",
        "points": 20,

    }, {
        "description": "Decipher 20 timeworn wyvernskin maps and open the treasure coffers to which they lead.",

        "name": "I Can Dig It VI",
        "points": 20,

    }, {
        "description": "Decipher 20 timeworn dragonskin maps and open the treasure coffers to which they lead.",

        "name": "I Can Dig It VII",
        "points": 20,

    }, {
        "description": "Defeat 200,000 enemies.",

        "name": "To Crush Your Enemies VII",
        "points": 30,

    }, {
        "description": "Successfully complete 5,000 FATEs.",

        "name": "Date With Destiny V",
        "points": 20,

    }, {
        "description": "Successfully complete 10,000 FATEs.",

        "name": "Date With Destiny VI",
        "points": 20,
        "Title": {
            "name": "The Fortunate"
        }
    }, {
        "description": "Resurrect a player who is not in your party or alliance 50 times.",

        "name": "The Kindness of Strangers III",
        "points": 10,

    }, {
        "description": "Resurrect a player who is not in your party or alliance 100 times.",

        "name": "The Kindness of Strangers IV",
        "points": 10,

    }, {
        "description": "Resurrect a player who is not in your party or alliance 200 times.",

        "name": "The Kindness of Strangers V",
        "points": 10,
        "Title": {
            "name": "Good Samaritan"
        }
    }, {
        "description": "Successfully complete the FATE “Coeurls Chase Boys Chase Coeurls” with the highest rating possible.",

        "name": "Short-lived, the Queen",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Vedrfolnir Devoteth” with the highest rating possible.",

        "name": "A Worthy Adversary",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “We Fought a Dzu” with the highest rating possible.",

        "name": "A Day at the Dzu",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Special Tarasque Force” with the highest rating possible.",

        "name": "Falling Down",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Metal Gears Revengeance 2” with the highest rating possible.",

        "name": "Neverlasting Gobstopper",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Darkscale Devoureth” with the highest rating possible.",

        "name": "Tipping the Scales",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “On Dangerous Ground” with the highest rating possible.",

        "name": "Fantasy Islet",
        "points": 10,

    }, {
        "description": "Complete the Void Ark.",

        "name": "Touching the Void",
        "points": 10,

    }, {
        "description": "Defeat King Thordan in the Minstrel's Ballad: Thordan's Reign.",

        "name": "The King and Die",
        "points": 10,
        "Title": {
            "name": "Myth Breaker"
        }
    }, {
        "description": "Complete Alexander: Midas.",

        "name": "Sins of the Son I",
        "points": 5,

    }, {
        "description": "Complete Alexander: Midas 5 times.",

        "name": "Sins of the Son II",
        "points": 10,

    }, {
        "description": "Complete Alexander: Midas 10 times.",

        "name": "Sins of the Son III",
        "points": 20,

    }, {
        "description": "Complete Alexander: Midas (Savage).",

        "name": "Sins of the Savage Son I",
        "points": 5,

    }, {
        "description": "Complete Alexander: Midas (Savage) 5 times.",

        "name": "Sins of the Savage Son II",
        "points": 10,

    }, {
        "description": "Complete Alexander: Midas (Savage) 10 times.",

        "name": "Sins of the Savage Son III",
        "points": 20,

    }, {
        "description": "Defeat Sephirot in Containment Bay S1T7 (Extreme).",

        "name": "Veni Veni Venias",
        "points": 10,

    }, {
        "description": "Raid the Aquapolis.",

        "name": "Life Aquatic I",
        "points": 5,
        "Title": {
            "name": "Polis Raider"
        }
    }, {
        "description": "Raid the Aquapolis 5 times.",

        "name": "Life Aquatic II",
        "points": 10,

    }, {
        "description": "Raid the Aquapolis 10 times.",

        "name": "Life Aquatic III",
        "points": 10,

    }, {
        "description": "Raid the Aquapolis 20 times.",

        "name": "Life Aquatic IV",
        "points": 20,
        "Title": {
            "name": "Polis Dweller"
        }
    }, {
        "description": "Raid the deepest room in the Aquapolis.",

        "name": "The Slow Regard of Stolen Things I",
        "points": 5,

    }, {
        "description": "Raid the deepest room in the Aquapolis 5 times.",

        "name": "The Slow Regard of Stolen Things II",
        "points": 10,

    }, {
        "description": "Raid the deepest room in the Aquapolis 10 times.",

        "name": "The Slow Regard of Stolen Things III",
        "points": 10,

    }, {
        "description": "Raid the deepest room in the Aquapolis 20 times.",

        "name": "The Slow Regard of Stolen Things IV",
        "points": 20,
        "Title": {
            "name": "Polis Lord"
        }
    }, {
        "description": "Complete the Weeping City of Mhach.",

        "name": "Ex Mhachina",
        "points": 10,

    }, {
        "description": "Clear the 10th floor of the Palace of the Dead.",

        "name": "In Too Deep I",
        "points": 5,

    }, {
        "description": "Clear the 20th floor of the Palace of the Dead.",

        "name": "In Too Deep II",
        "points": 5,

    }, {
        "description": "Clear the 30th floor of the Palace of the Dead.",

        "name": "In Too Deep III",
        "points": 5,

    }, {
        "description": "Clear the 40th floor of the Palace of the Dead.",

        "name": "In Too Deep IV",
        "points": 5,

    }, {
        "description": "Clear the 50th floor of the Palace of the Dead.",

        "name": "In Too Deep V",
        "points": 10,

    }, {
        "description": "Defeat Nidhogg in the Minstrel's Ballad: Nidhogg's Rage.",

        "name": "Let Me Be Your Hogg",
        "points": 10,

    }, {
        "description": "Defeat Sophia in Containment Bay P1T6 (Extreme).",

        "name": "Sophia's Choice",
        "points": 10,

    }, {
        "description": "Complete Alexander.",

        "name": "Sins of the Creator I",
        "points": 5,

    }, {
        "description": "Complete Alexander 5 times.",

        "name": "Sins of the Creator II",
        "points": 10,

    }, {
        "description": "Complete Alexander 10 times.",

        "name": "Sins of the Creator III",
        "points": 20,

    }, {
        "description": "Complete Alexander (Savage).",

        "name": "Sins of the Savage Creator I",
        "points": 5,

    }, {
        "description": "Complete Alexander (Savage) 5 times.",

        "name": "Sins of the Savage Creator II",
        "points": 10,

    }, {
        "description": "Complete Alexander (Savage) 10 times.",

        "name": "Sins of the Savage Creator III",
        "points": 20,

    }, {
        "description": "Clear the 100th floor of the Palace of the Dead.",

        "name": "In Too Deep VI",
        "points": 10,
        "Title": {
            "name": "Hero of Gelmorra"
        }
    }, {
        "description": "Clear the 150th floor of the Palace of the Dead.",

        "name": "In Too Deep VII",
        "points": 10,

    }, {
        "description": "Clear the 200th floor of the Palace of the Dead.",

        "name": "In Too Deep VIII",
        "points": 20,

    }, {
        "description": "Clear the 1st through the 50th floors of the Palace of the Dead solo and record a score on floor 51 or below.",

        "name": "Pal-less Palace I",
        "points": 10,

    }, {
        "description": "Clear the 1st through the 100th floors of the Palace of the Dead solo and record a score on floor 101 or below.",

        "name": "Pal-less Palace II",
        "points": 10,
        "Title": {
            "name": "Lonely Explorer"
        }
    }, {
        "description": "Discover a piece of the Accursed Hoard.",

        "name": "For the Hoard I",
        "points": 5,

    }, {
        "description": "Discover 100 pieces of the Accursed Hoard.",

        "name": "For the Hoard II",
        "points": 5,

    }, {
        "description": "Discover 1,000 pieces of the Accursed Hoard.",

        "name": "For the Hoard III",
        "points": 10,
        "Title": {
            "name": "The Lucky"
        }
    }, {
        "description": "Discover 5,000 pieces of the Accursed Hoard.",

        "name": "For the Hoard IV",
        "points": 20,

    }, {
        "description": "Discover a piece of the Accursed Hoard without using a pomander of intuition.",

        "name": "The Trouble with Buried I",
        "points": 10,

    }, {
        "description": "Discover 100 pieces of the Accursed Hoard without using a pomander of intuition.",

        "name": "The Trouble with Buried II",
        "points": 20,
        "Title": {
            "name": "Of the Sixth Sense"
        }
    }, {
        "description": "Defeat Zurvan in Containment Bay Z1T9 (Extreme).",

        "name": "Zurvan Safari",
        "points": 10,

    }, {
        "description": "Complete Dun Scaith.",

        "name": "What's Dun Is Done",
        "points": 10,

    }, {
        "description": "Complete Omega: Deltascape.",

        "name": "I Am the Delta, I Am the Omega I",
        "points": 5,

    }, {
        "description": "Complete Omega: Deltascape 5 times.",

        "name": "I Am the Delta, I Am the Omega II",
        "points": 10,

    }, {
        "description": "Complete Omega: Deltascape 10 times.",

        "name": "I Am the Delta, I Am the Omega III",
        "points": 20,

    }, {
        "description": "Complete Omega: Deltascape (Savage).",

        "name": "I Am the Savage Delta, I Am the Savage Omega I",
        "points": 5,

    }, {
        "description": "Complete Omega: Deltascape (Savage) 5 times.",

        "name": "I Am the Savage Delta, I Am the Savage Omega II",
        "points": 10,

    }, {
        "description": "Complete Omega: Deltascape (Savage) 10 times.",

        "name": "I Am the Savage Delta, I Am the Savage Omega III",
        "points": 20,

    }, {
        "description": "Defeat Lakshmi in Emanation (Extreme).",

        "name": "Lakshmi Intolerant",
        "points": 10,

    }, {
        "description": "Defeat Susano in the Pool of Tribute (Extreme).",

        "name": "Just Say the Word",
        "points": 10,

    }, {
        "description": "Slay 6 unique rank B elite marks in Gyr Abania.",

        "name": "Mark of the Wastes: B",
        "points": 5,

    }, {
        "description": "Slay 6 unique rank A elite marks in Gyr Abania.",

        "name": "Mark of the Wastes: A",
        "points": 5,

    }, {
        "description": "Slay 3 unique rank S elite marks in Gyr Abania.",

        "name": "Mark of the Wastes: S",
        "points": 5,

    }, {
        "description": "Slay 6 unique rank B elite marks in Othard.",

        "name": "Mark of the East: B",
        "points": 5,

    }, {
        "description": "Slay 6 unique rank A elite marks in Othard.",

        "name": "Mark of the East: A",
        "points": 5,

    }, {
        "description": "Slay 3 unique rank S elite marks in Othard.",

        "name": "Mark of the East: S",
        "points": 5,

    }, {
        "description": "Slay 1,500 rank A elite marks.",

        "name": "Bring Your A Game IV",
        "points": 10,

    }, {
        "description": "Slay 3,000 rank A elite marks.",

        "name": "Bring Your A Game V",
        "points": 10,
        "Title": {
            "name": "Of the Longest Hunt"
        }
    }, {
        "description": "Slay 10,000 rank A elite marks.",

        "name": "Bring Your A Game VI",
        "points": 10,
        "Title": {
            "name": "Of the Endless Hunt"
        }
    }, {
        "description": "Slay 1,000 rank S elite marks.",

        "name": "Bring Your S Game IV",
        "points": 10,

    }, {
        "description": "Slay 2,000 rank S elite marks.",

        "name": "Bring Your S Game V",
        "points": 10,
        "Title": {
            "name": "Thrillseeker"
        }
    }, {
        "description": "Slay 5,000 rank S elite marks.",

        "name": "Bring Your S Game VI",
        "points": 10,
        "Title": {
            "name": "Ultimate Thrillseeker"
        }
    }, {
        "description": "Obtain the achievements “Bring Your A Game V” and “Bring Your S Game V.”",
        "Item": {
            "name": "Centurio Tiger Horn"
        },
        "name": "You Got Game",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “The Evil Seed” with the highest rating possible.",

        "name": "Superseed",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Rattle and Humbaba” with the highest rating possible.",

        "name": "What You're Looking For",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Tall Tale” with the highest rating possible.",

        "name": "Slay Me a Mountain",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Never Say Daimyo” with the highest rating possible.",

        "name": "Shucked, Not Stirred",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Curiosity Killed the Catfish” with the highest rating possible.",

        "name": "Maru Five",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Wham, Bam, Thank You, Mammoth” with the highest rating possible.",

        "name": "Tusk",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Foxy Lady” with the highest rating possible.",

        "name": "Naughty Girls Need Love, as Well",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “A Horse Outside” with the highest rating possible.",

        "name": "Ride On",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “The Dataqi Chronicles: Dominion” with the highest rating possible.",

        "name": "Dataq Is Cheap",
        "points": 10,

    }, {
        "description": "Decipher 20 timeworn gaganaskin maps and open the treasure coffers to which they lead.",

        "name": "I Can Dig It VIII",
        "points": 20,

    }, {
        "description": "Decipher 20 timeworn gazelleskin maps and open the treasure coffers to which they lead.",

        "name": "I Can Dig It IX",
        "points": 20,

    }, {
        "description": "Raid the Lost Canals of Uznair.",

        "name": "Raider of the Lost Canals I",
        "points": 5,
        "Title": {
            "name": "Canal Raider"
        }
    }, {
        "description": "Raid the Lost Canals of Uznair 5 times.",

        "name": "Raider of the Lost Canals II",
        "points": 10,

    }, {
        "description": "Raid the Lost Canals of Uznair 10 times.",

        "name": "Raider of the Lost Canals III",
        "points": 10,

    }, {
        "description": "Raid the Lost Canals of Uznair 20 times.",

        "name": "Raider of the Lost Canals IV",
        "points": 20,
        "Title": {
            "name": "Canal Dweller"
        }
    }, {
        "description": "Raid the deepest sluice in the Lost Canals of Uznair.",

        "name": "The Deep End I",
        "points": 5,

    }, {
        "description": "Raid the deepest sluice in the Lost Canals of Uznair 5 times.",

        "name": "The Deep End II",
        "points": 10,

    }, {
        "description": "Raid the deepest sluice in the Lost Canals of Uznair 10 times.",

        "name": "The Deep End III",
        "points": 10,

    }, {
        "description": "Raid the deepest sluice in the Lost Canals of Uznair 20 times.",

        "name": "The Deep End IV",
        "points": 20,
        "Title": {
            "name": "Canal Lord"
        }
    }, {
        "description": "Clear the 1st through the 200th floors of the Palace of the Dead solo.",

        "name": "Pal-less Palace III",
        "points": 20,
        "Title": {
            "name": "The Necromancer"
        }
    }, {
        "description": "Complete 50 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a paladin.\n\n※Each roulette only counts with daily award bonus.",

        "name": "Tank You, Paladin I",
        "points": 5,

    }, {
        "description": "Complete 100 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a paladin.\n\n※Each roulette only counts with daily award bonus.",

        "name": "Tank You, Paladin II",
        "points": 10,

    }, {
        "description": "Complete 300 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a paladin.\n\n※Each roulette only counts with daily award bonus.",
        "Item": {
            "name": "Battle Lion Horn"
        },
        "name": "Tank You, Paladin III",
        "points": 20,

    }, {
        "description": "Complete 50 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a warrior.\n\n※Each roulette only counts with daily award bonus.",

        "name": "Tank You, Warrior I",
        "points": 5,

    }, {
        "description": "Complete 100 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a warrior.\n\n※Each roulette only counts with daily award bonus.",

        "name": "Tank You, Warrior II",
        "points": 10,

    }, {
        "description": "Complete 300 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a warrior.\n\n※Each roulette only counts with daily award bonus.",
        "Item": {
            "name": "Battle Bear Horn"
        },
        "name": "Tank You, Warrior III",
        "points": 20,

    }, {
        "description": "Complete 50 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a dark knight.\n\n※Each roulette only counts with daily award bonus.",

        "name": "Tank You, Dark Knight I",
        "points": 5,

    }, {
        "description": "Complete 100 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a dark knight.\n\n※Each roulette only counts with daily award bonus.",

        "name": "Tank You, Dark Knight II",
        "points": 10,

    }, {
        "description": "Complete 300 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a dark knight.\n\n※Each roulette only counts with daily award bonus.",
        "Item": {
            "name": "Battle Panther Bell"
        },
        "name": "Tank You, Dark Knight III",
        "points": 20,

    }, {
        "description": "Raid the Hidden Canals of Uznair.",

        "name": "Raider of the Hidden Canals I",
        "points": 5,
        "Title": {
            "name": "Deep Canal Raider"
        }
    }, {
        "description": "Raid the Hidden Canals of Uznair 5 times.",

        "name": "Raider of the Hidden Canals II",
        "points": 10,

    }, {
        "description": "Raid the Hidden Canals of Uznair 10 times.",

        "name": "Raider of the Hidden Canals III",
        "points": 10,

    }, {
        "description": "Raid the Hidden Canals of Uznair 20 times.",

        "name": "Raider of the Hidden Canals IV",
        "points": 20,
        "Title": {
            "name": "Deep Canal Dweller"
        }
    }, {
        "description": "Raid the deepest sluice in the Hidden Canals of Uznair.",

        "name": "The Deeper End I",
        "points": 5,

    }, {
        "description": "Raid the deepest sluice in the Hidden Canals of Uznair 5 times.",

        "name": "The Deeper End II",
        "points": 10,

    }, {
        "description": "Raid the deepest sluice in the Hidden Canals of Uznair 10 times.",

        "name": "The Deeper End III",
        "points": 10,

    }, {
        "description": "Raid the deepest sluice in the Hidden Canals of Uznair 20 times.",

        "name": "The Deeper End IV",
        "points": 20,
        "Title": {
            "name": "The Luckiest of Lords"
        }
    }, {
        "description": "Defeat Shinryu in the Minstrel's Ballad: Shinryu's Domain.",

        "name": "How to Slay Your Dragon 2",
        "points": 10,

    }, {
        "description": "Complete the Royal City of Rabanastre.",

        "name": "Zodiac Thriller",
        "points": 5,

    }, {
        "description": "Defeat Bahamut Prime in the Unending Coil of Bahamut (Ultimate).",

        "name": "Resistance Is Futile",
        "points": 10,
        "Title": {
            "name": "The Legend"
        }
    }, {
        "description": "Defeat Byakko in the Jade Stoa (Extreme).",

        "name": "Rock Warrior",
        "points": 10,

    }, {
        "description": "Complete Omega: Sigmascape.",

        "name": "I Am the Sigma, I Am the Omega I",
        "points": 5,

    }, {
        "description": "Complete Omega: Sigmascape 5 times.",

        "name": "I Am the Sigma, I Am the Omega II",
        "points": 10,

    }, {
        "description": "Complete Omega: Sigmascape 10 times.",

        "name": "I Am the Sigma, I Am the Omega III",
        "points": 20,

    }, {
        "description": "Complete Omega: Sigmascape (Savage).",

        "name": "I Am the Savage Sigma, I Am the Savage Omega I",
        "points": 5,

    }, {
        "description": "Complete Omega: Sigmascape (Savage) 5 times.",

        "name": "I Am the Savage Sigma, I Am the Savage Omega II",
        "points": 10,

    }, {
        "description": "Complete Omega: Sigmascape (Savage) 10 times.",

        "name": "I Am the Savage Sigma, I Am the Savage Omega III",
        "points": 20,

    }, {
        "description": "Clear the 10th floor of Heaven–on–High.",

        "name": "She's So High I",
        "points": 5,

    }, {
        "description": "Clear the 20th floor of Heaven–on–High.",

        "name": "She's So High II",
        "points": 5,

    }, {
        "description": "Clear the 30th floor of Heaven–on–High.",

        "name": "She's So High III",
        "points": 5,
        "Title": {
            "name": "Hiruko Hunter"
        }
    }, {
        "description": "Clear the 50th floor of Heaven–on–High.",

        "name": "She's So High IV",
        "points": 10,

    }, {
        "description": "Clear the 100th floor of Heaven–on–High.",

        "name": "She's So High V",
        "points": 10,
        "Title": {
            "name": "Heavenly Gate Crasher"
        }
    }, {
        "description": "Clear the 1st through the 50th floors of Heaven–on–High solo and record a score on floor 51 or below.",

        "name": "Heaven is a Lonely Place I",
        "points": 10,

    }, {
        "description": "Clear the 1st through the 100th floors of Heaven–on–High solo.",

        "name": "Heaven is a Lonely Place II",
        "points": 10,
        "Title": {
            "name": "Lone Hero"
        }
    }, {
        "description": "Discover 10,000 pieces of the Accursed Hoard.",

        "name": "For the Hoard V",
        "points": 20,
        "Title": {
            "name": "Hoarder"
        }
    }, {
        "description": "Defeat Tsukuyomi in the Minstrel's Ballad: Tsukuyomi's Pain.",

        "name": "Happy Death Day To Who",
        "points": 10,

    }, {
        "description": "Complete the Ridorana Lighthouse.",

        "name": "Didn't Stop, Made It Pop",
        "points": 5,

    }, {
        "description": "Defeat the Ultima Weapon in the Weapon's Refrain (Ultimate).",

        "name": "Ultimatum",
        "points": 10,
        "Title": {
            "name": "The Ultimate Legend"
        }
    }, {
        "description": "Defeat the Rathalos in the Great Hunt (Extreme).",

        "name": "Extreme Rathalos Hunter",
        "points": 10,

    }, {
        "description": "Defeat Suzaku in Hells' Kier (Extreme).",

        "name": "The Scarlet Bloodletter",
        "points": 10,

    }, {
        "description": "Complete Omega: Alphascape.",

        "name": "I Am the Alpha, I Am the Omega I",
        "points": 5,

    }, {
        "description": "Complete Omega: Alphascape 5 times.",

        "name": "I Am the Alpha, I Am the Omega II",
        "points": 10,

    }, {
        "description": "Complete Omega: Alphascape 10 times.",

        "name": "I Am the Alpha, I Am the Omega III",
        "points": 20,

    }, {
        "description": "Complete Omega: Alphascape (Savage).",

        "name": "I Am the Savage Alpha, I Am the Savage Omega I",
        "points": 5,

    }, {
        "description": "Complete Omega: Alphascape (Savage) 5 times.",

        "name": "I Am the Savage Alpha, I Am the Savage Omega II",
        "points": 10,

    }, {
        "description": "Complete Omega: Alphascape (Savage) 10 times.",

        "name": "I Am the Savage Alpha, I Am the Savage Omega III",
        "points": 20,

    }, {
        "description": "Raid the Shifting Altars of Uznair.",

        "name": "Raider of the Shifting Altars I",
        "points": 5,
        "Title": {
            "name": "Altar Boy"
        }
    }, {
        "description": "Raid the Shifting Altars of Uznair 5 times.",

        "name": "Raider of the Shifting Altars II",
        "points": 10,

    }, {
        "description": "Raid the Shifting Altars of Uznair 10 times.",

        "name": "Raider of the Shifting Altars III",
        "points": 10,

    }, {
        "description": "Raid the Shifting Altars of Uznair 20 times.",

        "name": "Raider of the Shifting Altars IV",
        "points": 20,
        "Title": {
            "name": "The Devout"
        }
    }, {
        "description": "Complete the final invocation in the Shifting Altars of Uznair.",

        "name": "The Deepest End I",
        "points": 5,

    }, {
        "description": "Complete the final invocation in the Shifting Altars of Uznair 5 times.",

        "name": "The Deepest End II",
        "points": 10,

    }, {
        "description": "Complete the final invocation in the Shifting Altars of Uznair 10 times.",

        "name": "The Deepest End III",
        "points": 10,

    }, {
        "description": "Complete the final invocation in the Shifting Altars of Uznair 20 times.",

        "name": "The Deepest End IV",
        "points": 20,
        "Title": {
            "name": "Invoker of Gods"
        }
    }, {
        "description": "Complete the Orbonne Monastery.",

        "name": "Orbonne to Pick",
        "points": 5,

    }, {
        "description": "Defeat Seiryu in the Wreath of Snakes (Extreme).",

        "name": "Seiryu, Say Me",
        "points": 10,

    }, {
        "description": "Complete a single stage at the Masked Carnivale.",

        "name": "Smokin' I",
        "points": 5,

    }, {
        "description": "Complete 5 stages at the Masked Carnivale.",

        "name": "Smokin' II",
        "points": 5,

    }, {
        "description": "Complete 10 stages at the Masked Carnivale.",

        "name": "Smokin' III",
        "points": 5,

    }, {
        "description": "Complete 15 stages at the Masked Carnivale.",

        "name": "Smokin' IV",
        "points": 5,

    }, {
        "description": "Complete 20 stages at the Masked Carnivale.",

        "name": "Smokin' V",
        "points": 5,

    }, {
        "description": "Complete 25 stages at the Masked Carnivale.",

        "name": "Smokin' VI",
        "points": 5,
        "Title": {
            "name": "Mask of the Blue"
        }
    }, {
        "description": "Achieve the “Giant Slayer” feat at the Masked Carnivale.",

        "name": "The Harder They Fall",
        "points": 10,

    }, {
        "description": "Achieve the “Trouble with Tentacles” feat at the Masked Carnivale.",

        "name": "Octopath Traveler",
        "points": 10,

    }, {
        "description": "Achieve the “Perfect Blue” feat at the Masked Carnivale.",

        "name": "Something Borrowed",
        "points": 10,
        "Title": {
            "name": "Perfect Blue"
        }
    }, {
        "description": "Clear the Baldesion Arsenal.",
        "Item": {
            "name": "Demi-Ozma"
        },
        "name": "We're on Your Side I",
        "points": 5,

    }, {
        "description": "Clear the Baldesion Arsenal 5 times.",

        "name": "We're on Your Side II",
        "points": 5,

    }, {
        "description": "Clear the Baldesion Arsenal 10 times.",

        "name": "We're on Your Side III",
        "points": 5,

    }, {
        "description": "Defeat Yojimbo on Kugane Ohashi.",

        "name": "Bite Me",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Deadly Nightshade” with the highest rating possible.",

        "name": "Not Today",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “The Elderblade” with the highest rating possible.",

        "name": "Stay Thy Blade",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Fuath to Be Reckoned With” with the highest rating possible.",

        "name": "Mischief Managed",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “Tojil Eclipse” with the highest rating possible.",

        "name": "Unbowed, Unbent, Unbroken",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “A Finale Most Formidable” with the highest rating possible.",

        "name": "Be Still My (Automatic) Heart",
        "points": 10,

    }, {
        "description": "Successfully complete the FATE “The Head, the Tail, the Whole Damned Thing” with the highest rating possible.",

        "name": "Another World, Another Turn",
        "points": 10,

    }, {
        "description": "Achieve shared FATE rank 3 in Lakeland.",

        "name": "Free Market Friend: Lakeland",
        "points": 10,

    }, {
        "description": "Achieve shared FATE rank 3 in Kholusia.",

        "name": "Free Market Friend: Kholusia",
        "points": 10,

    }, {
        "description": "Achieve shared FATE rank 3 in Amh Araeng.",

        "name": "Free Market Friend: Amh Araeng",
        "points": 10,

    }, {
        "description": "Achieve shared FATE rank 3 in Il Mheg.",

        "name": "Free Market Friend: Il Mheg",
        "points": 10,

    }, {
        "description": "Achieve shared FATE rank 3 in the Rak'tika Greatwood.",

        "name": "Free Market Friend: The Rak'tika Greatwood",
        "points": 10,

    }, {
        "description": "Achieve shared FATE rank 3 in the Tempest.",

        "name": "Free Market Friend: The Tempest",
        "points": 10,

    }, {
        "description": "Obtain “Free Market Friend” achievements for all six regions in Norvrandt.",

        "name": "Merchant's Best Friend",
        "points": 20,
        "Title": {
            "name": "The Invisible Hand"
        }
    }, {
        "description": "Slay 100 rank A elite marks in Norvrandt.",

        "name": "Shadowbring Your A Game I",
        "points": 10,

    }, {
        "description": "Slay 500 rank A elite marks in Norvrandt.",

        "name": "Shadowbring Your A Game II",
        "points": 10,

    }, {
        "description": "Slay 2,000 rank A elite marks in Norvrandt.",

        "name": "Shadowbring Your A Game III",
        "points": 10,
        "Title": {
            "name": "Charming Brute"
        }
    }, {
        "description": "Slay 30 elite marks of rank S or higher in Norvrandt.",

        "name": "Shadowbring Your S Game I",
        "points": 10,

    }, {
        "description": "Slay 300 elite marks of rank S or higher in Norvrandt.",

        "name": "Shadowbring Your S Game II",
        "points": 10,

    }, {
        "description": "Slay 1,000 elite marks of rank S or higher in Norvrandt.",

        "name": "Shadowbring Your S Game III",
        "points": 10,
        "Title": {
            "name": "The Fabulously Feral"
        }
    }, {
        "description": "Obtain the achievements “Shadowbring Your A Game III” and “Shadowbring Your S Game III.”",
        "Item": {
            "name": "Triceratops Horn"
        },
        "name": "Nuts for Nutsy",
        "points": 10,

    }, {
        "description": "Defeat Titania in the Dancing Plague.",

        "name": "Ill Met by Moonlight",
        "points": 10,

    }, {
        "description": "Defeat Innocence in the Crown of the Immaculate.",

        "name": "Proven Guilty",
        "points": 10,

    }, {
        "description": "Complete 500 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a paladin.\n\n※Each roulette only counts with daily award bonus.",

        "name": "Tank You, Paladin IV",
        "points": 20,
        "Title": {
            "name": "Of Unyielding Oath"
        }
    }, {
        "description": "Complete 500 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a warrior.\n\n※Each roulette only counts with daily award bonus.",

        "name": "Tank You, Warrior IV",
        "points": 20,
        "Title": {
            "name": "Of Unyielding Steel"
        }
    }, {
        "description": "Complete 500 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a dark knight.\n\n※Each roulette only counts with daily award bonus.",

        "name": "Tank You, Dark Knight IV",
        "points": 20,
        "Title": {
            "name": "Of Unyielding Principle"
        }
    }, {
        "description": "Complete 100 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a gunbreaker.\n\n※Each roulette only counts with daily award bonus.",

        "name": "Tank You, Gunbreaker I",
        "points": 5,

    }, {
        "description": "Complete 200 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a gunbreaker.\n\n※Each roulette only counts with daily award bonus.",
        "Item": {
            "name": "War Tiger Horn"
        },
        "name": "Tank You, Gunbreaker II",
        "points": 10,

    }, {
        "description": "Complete 300 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a gunbreaker.\n\n※Each roulette only counts with daily award bonus.",
        "Item": {
            "name": "Battle Tiger Horn"
        },
        "name": "Tank You, Gunbreaker III",
        "points": 20,

    }, {
        "description": "Complete 500 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a gunbreaker.\n\n※Each roulette only counts with daily award bonus.",

        "name": "Tank You, Gunbreaker IV",
        "points": 20,
        "Title": {
            "name": "Of Unyielding Lealty"
        }
    }, {
        "description": "Decipher 20 timeworn gliderskin maps and open the treasure coffers to which they lead.",

        "name": "I Can Dig It X",
        "points": 20,

    }, {
        "description": "Decipher 20 timeworn zonureskin maps and open the treasure coffers to which they lead.",

        "name": "I Can Dig It XI",
        "points": 20,

    }, {
        "description": "Raid the Dungeons of Lyhe Ghiah.",

        "name": "Beauty and Its Beasts I",
        "points": 5,
        "Title": {
            "name": "Dungeon Raider"
        }
    }, {
        "description": "Raid the Dungeons of Lyhe Ghiah 5 times.",

        "name": "Beauty and Its Beasts II",
        "points": 10,

    }, {
        "description": "Raid the Dungeons of Lyhe Ghiah 10 times.",

        "name": "Beauty and Its Beasts III",
        "points": 10,

    }, {
        "description": "Raid the Dungeons of Lyh2e Ghiah 20 times.",

        "name": "Beauty and Its Beasts IV",
        "points": 20,
        "Title": {
            "name": "Dungeon Dweller"
        }
    }, {
        "description": "Raid the final chamber in the Dungeons of Lyhe Ghiah.",

        "name": "Happily Treasure After I",
        "points": 5,

    }, {
        "description": "Raid the final chamber in the Dungeons of Lyhe Ghiah 5 times.",

        "name": "Happily Treasure After II",
        "points": 10,

    }, {
        "description": "Raid the final chamber in the Dungeons of Lyhe Ghiah 10 times.",

        "name": "Happily Treasure After III",
        "points": 10,

    }, {
        "description": "Raid the final chamber in the Dungeons of Lyhe Ghiah 20 times.",

        "name": "Happily Treasure After IV",
        "points": 20,
        "Title": {
            "name": "Dungeon Lord"
        }
    }, {
        "description": "Complete Eden's Gate.",

        "name": "Paradise Found I",
        "points": 5,

    }, {
        "description": "Complete Eden's Gate 5 times.",

        "name": "Paradise Found II",
        "points": 10,

    }, {
        "description": "Complete Eden's Gate 10 times.",

        "name": "Paradise Found III",
        "points": 20,

    }, {
        "description": "Complete Eden's Gate (Savage).",

        "name": "Savage Paradise Found I",
        "points": 5,

    }, {
        "description": "Complete Eden's Gate (Savage) 5 times.",

        "name": "Savage Paradise Found II",
        "points": 10,

    }, {
        "description": "Complete Eden's Gate (Savage) 10 times.",

        "name": "Savage Paradise Found III",
        "points": 20,

    }, {
        "description": "Defeat Hades in the Minstrel's Ballad: Hades's Elegy.",

        "name": "Don't Look Back",
        "points": 10,

    }, {
        "description": "Complete the Copied Factory.",

        "name": "The First Law",
        "points": 5,

    }, {
        "description": "Defeat Perfect Alexander in the Epic of Alexander (Ultimate).",

        "name": "When I Ruled the World",
        "points": 10,
        "Title": {
            "name": "The Perfect Legend"
        }
    }, {
        "description": "Complete 30 stages at the Masked Carnivale.",

        "name": "Smokin' VII",
        "points": 5,

    }, {
        "description": "Achieve the “The Celestium's Finest” feat at the Masked Carnivale.",

        "name": "None More Blue",
        "points": 10,
        "Title": {
            "name": "Champion of the Blue"
        }
    }, {
        "description": "Complete 5 types of routine mission in the Blue Mage Log.",

        "name": "Jack of All Trades I",
        "points": 5,

    }, {
        "description": "Complete 20 types of routine mission in the Blue Mage Log.",

        "name": "Jack of All Trades II",
        "points": 5,

    }, {
        "description": "Complete 50 types of routine mission in the Blue Mage Log.",

        "name": "Jack of All Trades III",
        "points": 5,
        "Title": {
            "name": "Blue Luminary"
        }
    }, {
        "description": "Complete the Bowl of Embers (Extreme) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Inferno",
        "points": 5,

    }, {
        "description": "Complete the Navel (Extreme) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Crag",
        "points": 5,

    }, {
        "description": "Complete the Howling Eye (Extreme) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Vortex",
        "points": 5,

    }, {
        "description": "Complete Thornmarch (Extreme) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the King",
        "points": 5,

    }, {
        "description": "Complete the Whorleater (Extreme) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Whorl",
        "points": 5,

    }, {
        "description": "Complete the Striking Tree (Extreme) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than Levin",
        "points": 5,

    }, {
        "description": "Complete the Akh Afah Amphitheatre (Extreme) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Frost",
        "points": 5,

    }, {
        "description": "Complete the Binding Coil of Bahamut - Turn 5 with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Dragon",
        "points": 5,

    }, {
        "description": "Complete the Second Coil of Bahamut - Turn 4 with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Raven",
        "points": 5,

    }, {
        "description": "Complete the Final Coil of Bahamut - Turn 4 with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Dreadwyrm",
        "points": 5,

    }, {
        "description": "Complete Thok ast Thok (Extreme) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Hive",
        "points": 5,

    }, {
        "description": "Complete the Limitless Blue (Extreme) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Expanse",
        "points": 5,

    }, {
        "description": "Complete the Minstrel's Ballad: Thordan's Reign with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Round",
        "points": 5,
        "Title": {
            "name": "Masked of the Round"
        }
    }, {
        "description": "Complete Containment Bay S1T7 (Extreme) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Fiend",
        "points": 5,

    }, {
        "description": "Complete the Minstrel's Ballad: Nidhogg's Rage with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Horde",
        "points": 5,

    }, {
        "description": "Complete Containment Bay P1T6 (Extreme) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Goddess",
        "points": 5,

    }, {
        "description": "Complete Containment Bay Z1T9 (Extreme) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Demon",
        "points": 5,

    }, {
        "description": "Complete Alexander - The Burden of the Father (Savage) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Manipulator",
        "points": 5,

    }, {
        "description": "Complete Alexander - The Burden of the Son (Savage) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than Justice",
        "points": 5,

    }, {
        "description": "Complete Alexander - The Soul of the Creator (Savage) with a party of only blue mages, Silence Echo turned on, and Undersized Party turned off.",

        "name": "Mightier than the Prime",
        "points": 5,

    }, {
        "description": "Obtain the achievements “Mightier than the Dragon,” “Mightier than the Raven,” and “Mightier than the Dreadwyrm.”",

        "name": "Blue Unchained",
        "points": 10,
        "Title": {
            "name": "Unbound Blue"
        }
    }, {
        "description": "Obtain the achievements “Mightier than the Manipulator,” “Mightier than Justice,” and “Mightier than the Prime.”",

        "name": "Masked Conqueror",
        "points": 10,
        "Title": {
            "name": "Blue Justice"
        }
    }, {
        "description": "Obtain the achievements “Blue Unchained” and “Masked Conqueror.”",
        "Item": {
            "name": "Morbol Horn"
        },
        "name": "True Blue",
        "points": 10,

    }]
};