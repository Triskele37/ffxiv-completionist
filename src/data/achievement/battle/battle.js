import { DataGroup } from "../../DataGroup";

export const Achievements_Battle_Battle = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
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
        "description": "Defeat 200,000 enemies.",
        "name": "To Crush Your Enemies VII",
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
        "description": "Complete all rogue entries in the hunting log.",
        "Item": {
            "name": "Master Rogue's Ring"
        },
        "name": "Bump on a Log: Rogue",
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
        "description": "Resurrect a player who is not in your party or alliance.",
        "name": "The Kindness of Strangers",
        "points": 5,
    }, {
        "description": "Resurrect a player who is not in your party or alliance 20 times.",
        "name": "The Kindness of Strangers II",
        "points": 10,
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
        "description": "Complete 500 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a paladin.\n\n※Each roulette only counts with daily award bonus.",
        "name": "Tank You, Paladin IV",
        "points": 20,
        "Title": {
            "name": "Of Unyielding Oath"
        }
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
        "description": "Complete 500 dungeons (lv. 61 and above), extreme trials (lv. 61 and above), level 50/60/70 duty roulette dungeons, or duty roulette leveling duties as a warrior.\n\n※Each roulette only counts with daily award bonus.",
        "name": "Tank You, Warrior IV",
        "points": 20,
        "Title": {
            "name": "Of Unyielding Steel"
        }
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
    }
];
