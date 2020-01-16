import { GatheringColumnConfig } from "../columnConfigs";
import { MiningLogSpecial } from "./special";

export const MiningLog = {
    name: "Mining",
    subGroups: [
        MiningLogSpecial,
    ],
	storageKey: "gathering-log.mining",
    columns: GatheringColumnConfig,
    tasks: [
        //------------------------------------------------------- 1-5
        {
        	level: "1",
        	name: "Copper Ore",
        	zone: "Western Thanalan",
        	locations: ["Hammerlea"]
        }, {
        	level: "1",
        	name: "Earth Shard",
        	zone: "Lower La Noscea",
        	locations: ["Cedarwood"]
        }, {
        	level: "1",
        	name: "Fire Shard",
        	zone: "Western Thanalan",
        	locations: ["Hammerlea"]
        }, {
        	level: "1",
        	name: "Ice Shard",
        	zone: "Western La Noscea",
        	locations: ["Skull Valley"]
        }, {
        	level: "1",
        	name: "Lightning Shard",
        	zone: "Central Thanalan",
        	locations: ["Spineless Basin"]
        }, {
        	level: "1",
        	name: "Water Shard",
        	zone: "Western Thanalan",
        	locations: ["Hammerlea"]
        }, {
        	level: "1",
        	name: "Wind Shard",
        	zone: "Central Thanalan",
        	locations: ["Spineless Basin"]
        }, {
        	level: "3",
        	name: "Muddy Water",
        	zone: "Western Thanalan",
        	locations: ["Hammerlea"]
        }, {
        	level: "5",
        	name: "Bone Chip",
        	zone: "Central Thanalan",
        	locations: ["Spineless Basin"]
        },
        //------------------------------------------------------- 6-10
        {
        	level: "6",
        	name: "Tin Ore",
        	zone: "Western Thanalan",
        	locations: ["Hammerlea"]
        }, {
        	level: "7",
        	name: "Raw Lapis Lazuli",
        	zone: "North Shroud",
        	locations: ["Treespeak"]
        }, {
        	level: "7",
        	name: "Raw Sunstone",
        	zone: "Lower La Noscea",
        	locations: ["Cedarwood"]
        }, {
        	level: "8",
        	name: "Soiled Femur",
        	zone: "Western Thanalan",
        	locations: ["Hammerlea"]
        }, {
        	level: "9",
        	name: "Zinc Ore",
        	zone: "Western Thanalan",
        	locations: ["Hammerlea"]
        }, {
        	level: "10",
        	name: "Obsidian",
        	zone: "Western Thanalan",
        	locations: ["Hammerlea"]
        }, {
        	level: "10",
        	name: "Potter's Clay",
        	zone: "North Shroud",
        	locations: ["Treespeak"]
        },
        //------------------------------------------------------- 11-15
        {
        	level: "14",
        	name: "Iron Ore",
        	zone: "Western Thanalan",
        	locations: ["Horizon's Edge"]
        },
        //------------------------------------------------------- 16-20
        {
        	level: "16",
        	name: "Raw Malachite",
        	zone: "Eastern Thanalan",
        	locations: ["Drybone"]
        }, {
        	level: "17",
        	name: "Raw Fluorite",
        	zone: "Eastern Thanalan",
        	locations: ["Drybone"]
        }, {
        	level: "17",
        	name: "Raw Sphene",
        	zone: "North Shroud",
        	locations: ["Peacegarden"]
        }, {
        	level: "18",
        	name: "Raw Danburite",
        	zone: "Western La Noscea",
        	locations: ["Skull Valley"]
        }, {
        	level: "19",
        	name: "Alumen",
        	zone: "Eastern Thanalan",
        	locations: ["Drybone"]
        }, {
        	level: "19",
        	name: "Sunrise Tellin",
        	zone: "Western La Noscea",
        	locations: ["Skull Valley"]
        },
        //------------------------------------------------------- 21-25
        {
        	level: "24",
        	name: "Effervescent Water",
        	zone: "South Shroud",
        	locations: ["Upper Paths"]
        }, {
        	level: "25",
        	name: "Silver Ore",
        	zone: "South Shroud",
        	locations: ["Upper Paths"]
        },
        //------------------------------------------------------- 26-30
        {
        	level: "26",
        	name: "Ice Crystal",
        	zone: "Coerthas Western Highlands",
        	locations: ["Riversmeet"]
        }, {
        	level: "26",
        	name: "Fire Crystal",
        	zone: "The Dravanian Forelands",
        	locations: ["Chocobo Forest"]
        }, {
        	level: "26",
        	name: "Wind Crystal",
        	zone: "The Dravanian Hinterlands",
        	locations: ["The Makers' Quarter"]
        }, {
        	level: "26",
        	name: "Lightning Crystal",
        	zone: "The Sea of Clouds",
        	locations: ["Voor Sian Siran"]
        }, {
        	level: "26",
        	name: "Earth Crystal",
        	zone: "The Peaks",
        	locations: ["Sleeping Stones"]
        }, {
        	level: "26",
        	name: "Water Crystal",
        	zone: "The Sea of Clouds",
        	locations: ["Voor Sian Siran"]
        }, {
        	level: "28",
        	name: "Wyvern Obsidian",
        	zone: "Eastern Thanalan",
        	locations: ["Wellwick Wood"]
        }, {
        	level: "30",
        	name: "Saltpeter",
        	zone: "Eastern Thanalan",
        	locations: ["Wellwick Wood"]
        },
        //------------------------------------------------------- 31-35
        {
            level: "31",
            name: "Granite",
            zone: "Central Shroud",
            locations: ["Hopeseed Pond"]
        }, {
            level: "31",
            name: "Little Worm",
            zone: "Southern Thanalan",
            locations: ["Sagolii Desert"]
        }, {
            level: "31",
            name: "Raw Garnet",
            zone: "Eastern La Noscea",
            locations: ["Bloodshore"]
        }, {
            level: "32",
            name: "Raw Heliodor",
            zone: "Southern Thanalan",
            locations: ["Sagolii Desert"]
        }, {
            level: "33",
            name: "Raw Goshenite",
            zone: "Eastern La Noscea",
            locations: ["Bloodshore"]
        }, {
            level: "33",
            name: "Raw Peridot",
            zone: "Central Shroud",
            locations: ["Hopeseed Pond"]
        }, {
            level: "34",
            name: "Mythril Ore",
            zone: "Southern Thanalan",
            locations: ["Sagolii Desert"]
        }, {
            level: "34",
            name: "Raw Amethyst",
            zone: "Central Shroud",
            locations: ["Hopeseed Pond"]
        }, {
            level: "35",
            name: "Raw Aquamarine",
            zone: "Eastern La Noscea",
            locations: ["Bloodshore"]
        },
        //------------------------------------------------------- 36-40
        {
            level: "36",
            name: "Raw Tourmaline",
            zone: "South Shroud",
            locations: ["Urth's Gift"]
        }, {
            level: "37",
            name: "Raw Spinel",
            zone: "South Shroud",
            locations: ["Urth's Gift"]
        }, {
            level: "38",
            name: "Raw Zircon",
            zone: "Coerthas Central Highlands",
            locations: ["Dragonhead"]
        }, {
            level: "39",
            name: "Jade",
            zone: "Coerthas Central Highlands",
            locations: ["Dragonhead"]
        }, {
            level: "40",
            name: "Black Alumen",
            zone: "South Shroud",
            locations: ["Urth's Gift"]
        },
        //------------------------------------------------------- 41-45
        {
            level: "41",
            name: "Raw Turquoise",
            zone: "Upper La Noscea",
            locations: ["Bronze Lake"]
        }, {
            level: "43",
            name: "Electrum Ore",
            zone: "Upper La Noscea",
            locations: ["Bronze Lake"]
        }, {
            level: "44",
            name: "Raw Amber",
            zone: "Eastern Thanalan",
            locations: ["Drybone"]
        }, {
            level: "45",
            name: "Raw Rubellite",
            zone: "Eastern Thanalan",
            locations: ["Drybone"]
        },
        //------------------------------------------------------- 46-50
        {
            level: "46",
            name: "Basilisk Egg",
            zone: "Northern Thanalan",
            locations: ["Bluefog"]
        }, {
            level: "47",
            name: "Cobalt Ore",
            zone: "Northern Thanalan",
            locations: ["Bluefog"]
        }, {
            level: "49",
            name: "Adamantoise Shell",
            zone: "Northern Thanalan",
            locations: ["Bluefog"]
        }, {
            level: "50",
            name: "Ogre Horn",
            zone: "Northern Thanalan",
            locations: ["Bluefog"]
        }, {
            level: "50",
            name: "Timeworn Boarskin Map",
            zone: "Northern Thanalan",
            locations: ["Bluefog"]
        }, {
            level: "50",
            name: "Timeworn Peisteskin Map",
            zone: "Northern Thanalan",
            locations: ["Bluefog"]
        }, {
            level: "50",
            name: "Timeworn Toadskin Map",
            zone: "Northern Thanalan",
            locations: ["Bluefog"]
        }, {
            level: "50",
            name: "Fire Cluster",
            zone: "The Dravanian Forelands",
            locations: ["Avalonia Fallen"]
        }, {
            level: "50",
            name: "Ice Cluster",
            zone: "Coerthas Western Highlands",
            locations: ["Red Rim"]
        }, {
            level: "50",
            name: "Wind Cluster",
            zone: "The Dravanian Hinterlands",
            locations: ["The Makers' Quarter"]
        }, {
            level: "50",
            name: "Earth Cluster",
            zone: "The Churning Mists",
            locations: ["Landlord Colony"]
        }, {
            level: "50",
            name: "Water Cluster",
            zone: "The Sea of Clouds",
            locations: ["Voor Sian Siran"]
        }, {
            level: "50",
            name: "Lightning Cluster",
            zone: "Lakeland",
            locations: ["The Church of the First Light"]
        }, {
            level: "50★",
            name: "Coblyn Larva",
            zone: "Eastern Thanalan",
            locations: ["The Burning Wall"]
        }, {
            level: "50★",
            name: "Darksteel Ore",
            zone: "Coerthas Central Highlands",
            locations: ["Dragonhead"]
        }, {
            level: "50★",
            name: "Gold Ore",
            zone: "Eastern Thanalan",
            locations: ["The Burning Wall"]
        }, {
            level: "50★",
            name: "Gregarious Worm",
            zone: "Eastern Thanalan",
            locations: ["The Burning Wall"]
        }, {
            level: "50★",
            name: "Unaspected Crystal",
            zone: "Eastern Thanalan",
            locations: ["The Burning Wall"]
        }, {
            level: "50★★",
            name: "Dark Matter Cluster",
            zone: "Eastern Thanalan",
            locations: ["Burgundy Falls"]
        }, {
            level: "50★★",
            name: "Ferberite",
            zone: "Northern Thanalan",
            locations: ["Raubahn's Push"]
        }, {
            level: "50★★",
            name: "Native Gold",
            zone: "Central Thanalan",
            locations: ["Lost Hope"]
        }, {
            level: "50★★",
            name: "Raw Diamond",
            zone: "Central Thanalan",
            locations: ["Lost Hope"]
        }, {
            level: "50★★",
            name: "Raw Emerald",
            zone: "Central Thanalan",
            locations: ["Lost Hope"]
        }, {
            level: "50★★",
            name: "Raw Iolite",
            zone: "Northern Thanalan",
            locations: ["Raubahn's Push"]
        }, {
            level: "50★★",
            name: "Raw Ruby",
            zone: "Lower La Noscea",
            locations: ["Moraby Bay"]
        }, {
            level: "50★★",
            name: "Raw Sapphire",
            zone: "Lower La Noscea",
            locations: ["Moraby Bay"]
        }, {
            level: "50★★",
            name: "Raw Topaz",
            zone: "Northern Thanalan",
            locations: ["Raubahn's Push"]
        }, {
            level: "50★★★",
            name: "Dragon Obsidian",
            zone: "Coerthas Western Highlands",
            locations: ["Riversmeet"]
        }, {
            level: "50★★★",
            name: "Platinum Ore",
            zone: "Southern Thanalan",
            locations: ["Broken Water"]
        }, {
            level: "50★★★",
            name: "Virgin Basilisk Egg",
            zone: "Northern Thanalan",
            locations: ["Bluefog"]
        }, {
            level: "50★★★",
            name: "Yellow Copper Ore",
            zone: "Coerthas Western Highlands",
            locations: ["Riversmeet"]
        },
        //------------------------------------------------------- 51-55
        {
            level: "51",
            name: "Pyrite",
            zone: "The Dravanian Forelands",
            locations: ["Chocobo Forest"]
        }, {
            level: "51",
            name: "Raw Agate",
            zone: "The Dravanian Forelands",
            locations: ["The Smoldering Wastes"]
        }, {
            level: "52",
            name: "Raw Tiger's Eye",
            zone: "The Dravanian Forelands",
            locations: ["The Smoldering Wastes"]
        }, {
            level: "53",
            name: "Chalcocite",
            zone: "The Dravanian Forelands",
            locations: ["Chocobo Forest"]
        }, {
            level: "53",
            name: "Mythrite Ore",
            zone: "Coerthas Western Highlands",
            locations: ["Gorgagne Holding"]
        }, {
            level: "53",
            name: "Raw Larimar",
            zone: "Coerthas Western Highlands",
            locations: ["Gorgagne Holding"]
        }, {
            level: "54",
            name: "Dravanian Spring Warer",
            zone: "The Dravanian Forelands",
            locations: ["The Smoldering Wastes"]
        }, {
            level: "54",
            name: "Limonite",
            zone: "The Dravanian Forelands",
            locations: ["Chocobo Forest"]
        }, {
            level: "54",
            name: "Raw Mormorion",
            zone: "Coerthas Western Highlands",
            locations: ["Gorgagne Holding"]
        }, {
            level: "55",
            name: "Raw Star Ruby",
            zone: "The Dravanian Forelands",
            locations: ["Chocobo Forest"]
        }, {
            level: "55",
            name: "Raw Star Sapphire",
            zone: "The Dravanian Forelands",
            locations: ["Chocobo Forest"]
        }, {
            level: "55",
            name: "Titanium Ore",
            zone: "The Dravanian Forelands",
            locations: ["Chocobo Forest"]
        },
        //------------------------------------------------------- 56-60
        {
            level: "57",
            name: "Abalathian Spring Water",
            zone: "The Sea of Clouds",
            locations: ["Voor Sian Siran"]
        }, {
            level: "57",
            name: "Light Kidney Ore",
            zone: "The Dravanian Hinterlands",
            locations: ["The Makers' Quarter"]
        }, {
            level: "57",
            name: "Raw Opal",
            zone: "The Dravanian Forelands",
            locations: ["Avalonia Fallen"]
        }, {
            level: "57",
            name: "Dated Radz-At-Han Coin",
            zone: "The Dravanian Hinterlands",
            locations: ["The Makers' Quarter"]
        }, {
            level: "58",
            name: "Hardsilver Ore",
            zone: "The Dravanian Hinterlands",
            locations: ["The Makers' Quarter"]
        }, {
            level: "58",
            name: "Raw Carnelian",
            zone: "The Dravanian Forelands",
            locations: ["Avalonia Fallen"]
        }, {
            level: "58",
            name: "Ice Stalagmite",
            zone: "Coerthas Western Highlands",
            locations: ["Red Rim"]
        }, {
            level: "59",
            name: "Aurum Regis Sand",
            zone: "The Sea of Clouds",
            locations: ["Voor Sian Siran"]
        }, {
            level: "59",
            name: "Cuprite",
            zone: "The Dravanian Hinterlands",
            locations: ["The Makers' Quarter"]
        }, {
            level: "59",
            name: "Raw Citrine",
            zone: "Coerthas Western Highlands",
            locations: ["Red Rim"]
        }, {
            level: "60",
            name: "Adamantite Ore",
            zone: "Azys Lla",
            locations: ["Alpha Quadrant"]
        }, {
            level: "60",
            name: "Blue Ooid",
            zone: "The Dravanian Hinterlands",
            locations: ["The Makers' Quarter"]
        }, {
            level: "60",
            name: "Blue Roundstone",
            zone: "The Dravanian Hinterlands",
            locations: ["The Makers' Quarter"]
        }, {
            level: "60",
            name: "Cotter Dynasty Relic",
            zone: "The Fringes",
            locations: ["East End"]
        }, {
            level: "60",
            name: "Eventide Jade",
            zone: "The Dravanian Forelands",
            locations: ["Avalonia Fallen"]
        }, {
            level: "60",
            name: "Glass Eye",
            zone: "The Sea of Clouds",
            locations: ["Voor Sian Siran"]
        }, {
            level: "60",
            name: "Green Ooid",
            zone: "The Dravanian Forelands",
            locations: ["Avalonia Fallen"]
        }, {
            level: "60",
            name: "Green Roundstone",
            zone: "The Dravanian Forelands",
            locations: ["Avalonia Fallen"]
        }, {
            level: "60",
            name: "Raw Chrysolite",
            zone: "The Dravanian Hinterlands",
            locations: ["The Makers' Quarter"]
        }, {
            level: "60",
            name: "Red Ooid",
            zone: "Coerthas Western Highlands",
            locations: ["Red Rim"]
        }, {
            level: "60",
            name: "Red Roundstone",
            zone: "Coerthas Western Highlands",
            locations: ["Red Rim"]
        }, {
            level: "60",
            name: "Shishu Koban",
            zone: "The Ruby Sea",
            locations: ["The Crab Pots"]
        }, {
            level: "60",
            name: "Sphalerite",
            zone: "The Diadem",
            locations: ["The Diadem"]
        }, {
            level: "60",
            name: "Starcrack Sand",
            zone: "The Fringes",
            locations: ["East End"]
        }, {
            level: "60",
            name: "Violet Ooid",
            zone: "The Sea of Clouds",
            locations: ["Voor Sian Siran"]
        }, {
            level: "60",
            name: "Violet Roundstone",
            zone: "The Sea of Clouds",
            locations: ["Voor Sian Siran"]
        }, {
            level: "60",
            name: "Wyrm Obsidian",
            zone: "The Dravanian Hinterlands",
            locations: ["The Makers' Quarter"]
        }, {
            level: "60",
            name: "Yellow Ooid",
            zone: "The Churning Mists",
            locations: ["Landlord Colony"]
        }, {
            level: "60",
            name: "Yellow Roundstone",
            zone: "The Churning Mists",
            locations: ["Landlord Colony"]
        }, {
            level: "60★",
            name: "Beastkin Horn",
            zone: "The Dravanian Forelands",
            locations: ["Avalonia Fallen"]
        }, {
            level: "60★",
            name: "Peaks Pigment",
            zone: "The Peaks",
            locations: ["Sleeping Stones"]
        }, {
            level: "60★",
            name: "Rainbow Pigment",
            zone: "The Dravanian Forelands",
            locations: ["Avalonia Fallen"]
        }, {
            level: "60★",
            name: "Yellow Kudzu Root",
            zone: "The Peaks",
            locations: ["Sleeping Stones"]
        }, {
            level: "60★★",
            name: "Gyr Abanian Alumen",
            zone: "The Fringes",
            locations: ["East End"]
        }, {
            level: "60★★",
            name: "Raw Triphane",
            zone: "The Fringes",
            locations: ["East End"]
        },
        //------------------------------------------------------- 61-65
        {
            level: "61",
            name: "Gyr Abanian Mineral Water",
            zone: "The Fringes",
            locations: ["The Striped Hills"]
        }, {
            level: "62",
            name: "Raw Kyanite",
            zone: "The Fringes",
            locations: ["The Striped Hills"]
        }, {
            level: "62",
            name: "Harpoon Head",
            zone: "The Fringes",
            locations: ["The Striped Hills"]
        }, {
            level: "63",
            name: "Koppranickel Ore",
            zone: "The Ruby Sea",
            locations: ["Sakazuki"]
        }, {
            level: "63",
            name: "Raw Star Spinel",
            zone: "The Ruby Sea",
            locations: ["Ten-Thousand-Year Pine"]
        }, {
            level: "63",
            name: "Phial of Thermal Fluid",
            zone: "Coerthas Western Highlands",
            locations: ["The Bed of Bones"]
        }, {
            level: "64",
            name: "Crescent Spring Water",
            zone: "Yanxia",
            locations: ["The Gensui Chain"]
        }, {
            level: "64",
            name: "Sparkstone",
            zone: "The Ruby Sea",
            locations: ["Hell's Lid"]
        }, {
            level: "65",
            name: "Doman Iron Ore",
            zone: "Yanxia",
            locations: ["The Gensui Chain"]
        }, {
            level: "65",
            name: "Malleable Still Material",
            zone: "Yanxia",
            locations: ["The Gensui Chain"]
        },
        //------------------------------------------------------- 66-70
        {
            level: "66",
            name: "Schorl",
            zone: "The Azim Steppe",
            locations: ["Onsal Hakair"]
        }, {
            level: "66",
            name: "Raw Azurite",
            zone: "The Azim Steppe",
            locations: ["The Towering Still"]
        }, {
            level: "68",
            name: "Durium Ore",
            zone: "Yanxia",
            locations: ["Unseen Spirits Laughing"]
        }, {
            level: "68",
            name: "Hard Place Furnishing Materials",
            zone: "The Lochs",
            locations: ["The High Bank"]
        }, {
            level: "68",
            name: "Raw Imperial Jade",
            zone: "Yanxia",
            locations: ["Valley of the Fallen Rainbow"]
        }, {
            level: "70",
            name: "Molybdenum Ore",
            zone: "The Lochs",
            locations: ["The High Bank"]
        }, {
            level: "70",
            name: "Raw Rhodonite",
            zone: "The Peaks",
            locations: ["Rustrock"]
        }, {
            level: "70",
            name: "Sturdy Vat Material",
            zone: "Yanxia",
            locations: ["Unseen Spirits Laughing"]
        }, {
            level: "70",
            name: "Clinquant Stones",
            zone: "Il Mheg",
            locations: ["Thysm Lran"]
        }, {
            level: "70★",
            name: "Almandine",
            zone: "The Lochs",
            locations: ["The High Bank"]
        }, {
            level: "70★★",
            name: "Yanxian Soil",
            zone: "Yanxia",
            locations: ["Unseen Spirits Laughing"]
        }, {
            level: "70★★",
            name: "Raw Hematite",
            zone: "Kholusia",
            locations: ["Governor's Row"]
        },
        //------------------------------------------------------- 71-75
        {
            level: "72",
            name: "Truegold Ore",
            zone: "Il Mheg",
            locations: ["The Bookman's Shelves"]
        }, {
            level: "72",
            name: "Raw Diaspore",
            zone: "Il Mheg",
            locations: ["Sextuplet Shallow"]
        }, {
            level: "73",
            name: "Highland Spring Water",
            zone: "Il Mheg",
            locations: ["The Bookman's Shelves"]
        }, {
            level: "73",
            name: "Animal Droppings",
            zone: "Lakeland",
            locations: ["Weed"]
        }, {
            level: "74",
            name: "Raw Lazurite",
            zone: "The Rak'tika Greatwood",
            locations: ["Cleric"]
        }, {
            level: "74",
            name: "Bluespirit Ore",
            zone: "Lakeland",
            locations: ["Weed"]
        }, {
            level: "75",
            name: "Megafauna Leftovers",
            zone: "Il Mheg",
            locations: ["The Bookman's Shelves"]
        },
        //------------------------------------------------------- 76-80
        {
            level: "76",
            name: "Raw Triplite",
            zone: "Amh Araeng",
            locations: ["Ladle"]
        }, {
            level: "76",
            name: "Gale Rock",
            zone: "The Rak'tika Greatwood",
            locations: ["The Wild Fete"]
        }, {
            level: "76",
            name: "Solarite",
            zone: "Lakeland",
            locations: ["The Church of the First Light"]
        }, {
            level: "76",
            name: "Extra Effervescent Water",
            zone: "The Rak'tika Greatwood",
            locations: ["The Wild Fete"]
        }, {
            level: "77",
            name: "Titancopper Ore",
            zone: "Lakeland",
            locations: ["The Church of the First Light"]
        }, {
            level: "78",
            name: "Raw Petalife",
            zone: "Lakeland",
            locations: ["Weed"]
        }, {
            level: "78",
            name: "Underground Spring Water",
            zone: "Lakeland",
            locations: ["The Church of the First Light"]
        }, {
            level: "78",
            name: "Megafauna Trace",
            zone: "The Rak'tika Greatwood",
            locations: ["The Wild Fete"]
        }, {
            level: "80",
            name: "Dimythrite Ore",
            zone: "Lakeland",
            locations: ["The Church of the First Light"]
        }, {
            level: "80",
            name: "Raw Onyx",
            zone: "The Tempest",
            locations: ["The Caliban Gorge"]
        },
    ]
};
