import { LeveQuestColumnConfig } from "../../columnConfigs";

export const Quest_Levequests_Mining = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.mining`;

    return {
        name: "Mining",
    	storageKey,
        columns: LeveQuestColumnConfig,
        tasks: [
        //------------------------------------------------------------------ 1-5
        {
            level: "1",
            name: "The Primrose Path",
            zone: "Western Thanalan",
            location: "Scorpion Crossing",
            npc: "Graceful Song"
        }, {
            level: "1",
            name: "Who Needs the Paperwork",
            zone: "Western Thanalan",
            location: "Scorpion Crossing",
            npc: "Graceful Song"
        }, {
            level: "1",
            name: "Rubble Bubble",
            zone: "Western Thanalan",
            location: "Scorpion Crossing",
            npc: "Graceful Song"
        }, {
            level: "1",
            name: "Miners' Holiday",
            zone: "Western Thanalan",
            location: "Scorpion Crossing",
            npc: "Graceful Song"
        }, {
            level: "5",
            name: "Pipikkuli's Ship Comes In",
            zone: "Western Thanalan",
            location: "Scorpion Crossing",
            npc: "Graceful Song"
        }, {
            level: "5",
            name: "Do They Ore Don't They",
            zone: "Western Thanalan",
            location: "Scorpion Crossing",
            npc: "Graceful Song"
        }, {
            level: "5",
            name: "Vanishing Point",
            zone: "Western Thanalan",
            location: "Scorpion Crossing",
            npc: "Graceful Song"
        }, {
            level: "5",
            name: "I Don't Zinc It's A Coincidence",
            zone: "Western Thanalan",
            location: "Scorpion Crossing",
            npc: "Graceful Song"
        },
        //------------------------------------------------------------------ 10-15
        {
            level: "10",
            name: "We Do This the Hard Way",
            zone: "Western Thanalan",
            location: "Horizon",
            npc: "Totonowa"
        }, {
            level: "10",
            name: "That's Why They Call It Fool's Gold",
            zone: "Western Thanalan",
            location: "Horizon",
            npc: "Totonowa"
        }, {
            level: "10",
            name: "It Peiste to Listen",
            zone: "Western Thanalan",
            location: "Horizon",
            npc: "Totonowa"
        }, {
            level: "10",
            name: "Break It Up",
            zone: "Western Thanalan",
            location: "Horizon",
            npc: "Totonowa"
        }, {
            level: "15",
            name: "A Man's Gotta Dream",
            zone: "Eastern Thanalan",
            location: "Camp Drybone",
            npc: "Poponagu"
        }, {
            level: "15",
            name: "Earth Sprites Are Easy",
            zone: "Eastern Thanalan",
            location: "Camp Drybone",
            npc: "Poponagu"
        }, {
            level: "15",
            name: "Eiderdown for Eidolons",
            zone: "Eastern Thanalan",
            location: "Camp Drybone",
            npc: "Poponagu"
        }, {
            level: "15",
            name: "The Doom that Came to Belah'dia",
            zone: "Eastern Thanalan",
            location: "Camp Drybone",
            npc: "Poponagu"
        },
        //------------------------------------------------------------------ 20-25
        {
            level: "20",
            name: "Look How They Shine for You",
            zone: "South Shroud",
            location: "Quarrymill",
            npc: "Nyell"
        }, {
            level: "20",
            name: "Location, Location, Location",
            zone: "South Shroud",
            location: "Quarrymill",
            npc: "Nyell"
        }, {
            level: "20",
            name: "Elemental Housekeeping",
            zone: "South Shroud",
            location: "Quarrymill",
            npc: "Nyell"
        }, {
            level: "20",
            name: "Rock My Wall",
            zone: "South Shroud",
            location: "Quarrymill",
            npc: "Nyell"
        }, {
            level: "25",
            name: "Can't Start a Fire",
            zone: "South Shroud",
            location: "Quarrymill",
            npc: "Nyell"
        }, {
            level: "25",
            name: "Fool Me Twice",
            zone: "South Shroud",
            location: "Quarrymill",
            npc: "Nyell"
        }, {
            level: "25",
            name: "Baby, Light My Way",
            zone: "South Shroud",
            location: "Quarrymill",
            npc: "Nyell"
        }, {
            level: "25",
            name: "Tag, You're It",
            zone: "South Shroud",
            location: "Quarrymill",
            npc: "Nyell"
        },
        //------------------------------------------------------------------ 30-35
        {
            level: "30",
            name: "Shell Game",
            zone: "Eastern La Noscea",
            location: "Costa del Sol",
            npc: "Nahctahr"
        }, {
            level: "30",
            name: "The Midden Fair",
            zone: "Eastern La Noscea",
            location: "Costa del Sol",
            npc: "Nahctahr"
        }, {
            level: "30",
            name: "I Kidd You Not",
            zone: "Eastern La Noscea",
            location: "Costa del Sol",
            npc: "Nahctahr"
        }, {
            level: "30",
            name: "That's What the Money Is For",
            zone: "Eastern La Noscea",
            location: "Costa del Sol",
            npc: "Nahctahr"
        }, {
            level: "35",
            name: "Rocks for Brains",
            zone: "Coerthas Central Highlands",
            location: "Observatorium",
            npc: "Cimeaurant"
        }, {
            level: "35",
            name: "There Are No Good Answers",
            zone: "Coerthas Central Highlands",
            location: "Observatorium",
            npc: "Cimeaurant"
        }, {
            level: "35",
            name: "Mythril Madness",
            zone: "Coerthas Central Highlands",
            location: "Observatorium",
            npc: "Cimeaurant"
        }, {
            level: "35",
            name: "Eye for an Eye",
            zone: "Coerthas Central Highlands",
            location: "Observatorium",
            npc: "Cimeaurant"
        },
        //------------------------------------------------------------------ 40-45
        {
            level: "40",
            name: "Breach and Build",
            zone: "Coerthas Central Highlands",
            location: "Whitebrim Front",
            npc: "Voilinaut"
        }, {
            level: "40",
            name: "Brother in Arms",
            zone: "Coerthas Central Highlands",
            location: "Whitebrim Front",
            npc: "Voilinaut"
        }, {
            level: "40",
            name: "Nature Is a Monster",
            zone: "Coerthas Central Highlands",
            location: "Whitebrim Front",
            npc: "Voilinaut"
        }, {
            level: "40",
            name: "Not Losing Our Heads This Time",
            zone: "Coerthas Central Highlands",
            location: "Whitebrim Front",
            npc: "Voilinaut"
        }, {
            level: "45",
            name: "Hybrid Hypotheses",
            zone: "Mor Dhona",
            location: "Saint Coinach's Find",
            npc: "K'leytai"
        }, {
            level: "45",
            name: "Sucker Seer",
            zone: "Mor Dhona",
            location: "Saint Coinach's Find",
            npc: "K'leytai"
        }, {
            level: "45",
            name: "Metal Has No Master",
            zone: "Mor Dhona",
            location: "Saint Coinach's Find",
            npc: "K'leytai"
        }, {
            level: "45",
            name: "Crystal Mess",
            zone: "Mor Dhona",
            location: "Saint Coinach's Find",
            npc: "K'leytai"
        },
        //------------------------------------------------------------------ 50-58
        {
            level: "50",
            name: "The Merits of Upcycling",
            zone: "Coerthas Western Highlands",
            location: "Falcon's Nest",
            npc: "Eloin"
        }, {
            level: "50",
            name: "The Road to Pilgrimage",
            zone: "Coerthas Western Highlands",
            location: "Falcon's Nest",
            npc: "Eloin"
        }, {
            level: "50",
            name: "Taken for Granite",
            zone: "Coerthas Western Highlands",
            location: "Falcon's Nest",
            npc: "Eloin"
        }, {
            level: "52",
            name: "I'll Show You My Battle Shards",
            zone: "The Dravanian Forelands",
            location: "Tailfeather",
            npc: "Eloin"
        }, {
            level: "52",
            name: "Permit for Destruction of Religious Property",
            zone: "The Dravanian Forelands",
            location: "Tailfeather",
            npc: "Eloin"
        }, {
            level: "52",
            name: "Halone's Jewelry Box",
            zone: "The Dravanian Forelands",
            location: "Tailfeather",
            npc: "Eloin"
        }, {
            level: "54",
            name: "Dreams of War, Dreams of Liars, Dreams of Dragon Fire",
            zone: "The Churning Mists",
            location: "Moghome",
            npc: "Eloin"
        }, {
            level: "54",
            name: "Talk about Boundaries",
            zone: "The Churning Mists",
            location: "Moghome",
            npc: "Eloin"
        }, {
            level: "54",
            name: "From Creepers to Squatters",
            zone: "The Churning Mists",
            location: "Moghome",
            npc: "Eloin"
        }, {
            level: "56",
            name: "Mortarin'",
            zone: "The Sea of Clouds",
            location: "Camp Cloudtop",
            npc: "Eloin"
        }, {
            level: "56",
            name: "What Goes Up",
            zone: "The Sea of Clouds",
            location: "Camp Cloudtop",
            npc: "Eloin"
        }, {
            level: "56",
            name: "Fake-icite",
            zone: "The Sea of Clouds",
            location: "Camp Cloudtop",
            npc: "Eloin"
        }, {
            level: "58",
            name: "Sticking It Out",
            zone: "The Dravanian Hinterlands",
            location: "The Paths of Creation",
            npc: "Eloin"
        }, {
            level: "58",
            name: "Dragonproofing",
            zone: "The Dravanian Hinterlands",
            location: "The Paths of Creation",
            npc: "Eloin"
        }, {
            level: "58",
            name: "Crystal Chronicles",
            zone: "The Dravanian Hinterlands",
            location: "The Paths of Creation",
            npc: "Eloin"
        },
        //------------------------------------------------------------------ Large-scale
        {
            level: "50",
            name: "Breaking Beacons (L)",
            zone: "Coerthas Western Highlands",
            location: "Falcon's Nest",
            npc: "Eloin"
        }, {
            level: "50",
            name: "The Basics of Forgery (L)",
            zone: "Coerthas Western Highlands",
            location: "Falcon's Nest",
            npc: "Eloin"
        }, {
            level: "50",
            name: "For Vares Beyond Compare (L)",
            zone: "Coerthas Western Highlands",
            location: "Falcon's Nest",
            npc: "Eloin"
        }, {
            level: "52",
            name: "Polished Till They Shine (L)",
            zone: "The Dravanian Forelands",
            location: "Tailfeather",
            npc: "Eloin"
        }, {
            level: "52",
            name: "Forging Lance Base (L)",
            zone: "The Dravanian Forelands",
            location: "Tailfeather",
            npc: "Eloin"
        }, {
            level: "52",
            name: "Rose Never Lets Go (L)",
            zone: "The Dravanian Forelands",
            location: "Tailfeather",
            npc: "Eloin"
        }, {
            level: "54",
            name: "History Needs Some Revisions (L)",
            zone: "The Churning Mists",
            location: "Moghome",
            npc: "Eloin"
        }, {
            level: "54",
            name: "All of These Bases Belong to Us (L)",
            zone: "The Churning Mists",
            location: "Moghome",
            npc: "Eloin"
        }, {
            level: "54",
            name: "There's Sand in My Water (L)",
            zone: "The Churning Mists",
            location: "Moghome",
            npc: "Eloin"
        }, {
            level: "56",
            name: "The Puppets of War (L)",
            zone: "The Sea of Clouds",
            location: "Camp Cloudtop",
            npc: "Eloin"
        }, {
            level: "56",
            name: "Fool Me Once (L)",
            zone: "The Sea of Clouds",
            location: "Camp Cloudtop",
            npc: "Eloin"
        }, {
            level: "56",
            name: "A Spire for New Hights (L)",
            zone: "The Sea of Clouds",
            location: "Camp Cloudtop",
            npc: "Eloin"
        }, {
            level: "58",
            name: "Not So Crystal Clear (L)",
            zone: "The Dravanian Hinterlands",
            location: "The Paths of Creation",
            npc: "Eloin"
        }, {
            level: "58",
            name: "Pommeling the Enemy (L)",
            zone: "The Dravanian Hinterlands",
            location: "The Paths of Creation",
            npc: "Eloin"
        }, {
            level: "58",
            name: "Sharlayan Sympathizers (L)",
            zone: "The Dravanian Hinterlands",
            location: "The Paths of Creation",
            npc: "Eloin"
        },
        //------------------------------------------------------------------ 60-68
        {
            level: "60",
            name: "Cermet Breaker",
            zone: "The Fringes",
            location: "The Striped Hills",
            npc: "Keltraeng"
        }, {
            level: "60",
            name: "Set In Stone",
            zone: "The Fringes",
            location: "The Striped Hills",
            npc: "Keltraeng"
        }, {
            level: "60",
            name: "Axe To Grind",
            zone: "The Fringes",
            location: "The Striped Hills",
            npc: "Keltraeng"
        }, {
            level: "62",
            name: "Ready Ore Not",
            zone: "The Ruby Sea",
            location: "Rasen Kaikyo",
            npc: "Keltraeng"
        }, {
            level: "62",
            name: "Hit Rock Bottom",
            zone: "The Ruby Sea",
            location: "Rasen Kaikyo",
            npc: "Keltraeng"
        }, {
            level: "62",
            name: "Coral-lary",
            zone: "The Ruby Sea",
            location: "Rasen Kaikyo",
            npc: "Keltraeng"
        }, {
            level: "64",
            name: "No Stone Unturned",
            zone: "Yanxia",
            location: "Eastern Ryurin Bridge",
            npc: "Keltraeng"
        }, {
            level: "64",
            name: "Simply Marble Us",
            zone: "Yanxia",
            location: "The Gensui Chain",
            npc: "Keltraeng"
        }, {
            level: "64",
            name: "Scraptacular",
            zone: "Yanxia",
            location: "Casrum Fluminis",
            npc: "Keltraeng"
        }, {
            level: "66",
            name: "Dunes of Our Lives",
            zone: "The Azim Steppe",
            location: "Ceol Aen",
            npc: "Keltraeng"
        }, {
            level: "66",
            name: "Bead Em Up",
            zone: "The Azim Steppe",
            location: "Nhaama's Retreat",
            npc: "Keltraeng"
        }, {
            level: "66",
            name: "O Say Can You Rock",
            zone: "The Azim Steppe",
            location: "Onsal Hakair",
            npc: "Keltraeng"
        }, {
            level: "68",
            name: "The Ores Have It",
            zone: "The Peaks",
            location: "Mount Yorn",
            npc: "Keltraeng"
        }, {
            level: "68",
            name: "Adios, Ala Mhigo",
            zone: "The Peaks",
            location: "Wightrock",
            npc: "Keltraeng"
        }, {
            level: "68",
            name: "Mine All Mine",
            zone: "The Peaks",
            location: "Wightrock",
            npc: "Keltraeng"
        },
        //------------------------------------------------------------------ 70-78
        {
            level: "70",
            name: "Barmy for Ballistas",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "70",
            name: "Jewelry for All",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "70",
            name: "The Search for Slag",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "72",
            name: "Secret Stones",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "72",
            name: "New Necklaces",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "72",
            name: "Crystalized Revenge",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "74",
            name: "Knowledge Is Power",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "74",
            name: "Jewels for Jewelry",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "74",
            name: "Rocks from Rak'tika",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "76",
            name: "The Magic of Mining",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "76",
            name: "Jewelry Is Forever",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "76",
            name: "Road to Recovery",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "78",
            name: "Lakeland's Legacy",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "78",
            name: "Crystal Meds",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }, {
            level: "78",
            name: "Back Stronger",
            zone: "The Crystarium",
            location: "The Baldaquin",
            npc: "Eirikur"
        }]
    };
};
