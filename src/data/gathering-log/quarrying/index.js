import { QuarryingLogSpecial } from "./special";

export const QuarryingLog = {
    name: "Quarrying",
    subGroups: [
		QuarryingLogSpecial,
    ],
    tableConfig: {
        headers: ["Level", "Name", "Zone", "Locations"],
        columnKeys: ["level", "name", "zone", "locations"]
    },
    tasks: [
        //------------------------------------------------------- 1-5
        {
        	level: "1",
        	name: "Earth Shard",
        	zone: "Upper La Noscea",
        	locations: ["Oakwood"]
        }, {
        	level: "1",
        	name: "Fire Shard",
        	zone: "Middle La Noscea",
        	locations: ["Three-malm Bend"]
        }, {
        	level: "1",
        	name: "Ice Shard",
        	zone: "Western La Noscea",
        	locations: ["Skull Valley"]
        }, {
        	level: "1",
        	name: "Lightning Shard",
        	zone: "Central Thanalan",
        	locations: ["Black Brush"]
        }, {
        	level: "1",
        	name: "Water Shard",
        	zone: "Western Thanalan",
        	locations: ["Horizon's Edge"]
        }, {
        	level: "1",
        	name: "Wind Shard",
        	zone: "East Shroud",
        	locations: ["Nine Ivies"]
        },
        //------------------------------------------------------- 6-10
        //------------------------------------------------------- 11-15
        {
        	level: "11",
        	name: "Copper Sand",
        	zone: "Western Thanalan",
        	locations: ["Horizon's Edge"]
        }, {
        	level: "11",
        	name: "Fine Sand",
        	zone: "Central Thanalan",
        	locations: ["Black Brush"]
        }, {
        	level: "12",
        	name: "Rock Salt",
        	zone: "Central Thanalan",
        	locations: ["Black Brush"]
        }, {
        	level: "13",
        	name: "Ragstone",
        	zone: "Central Thanalan",
        	locations: ["Black Brush"]
        }, {
        	level: "14",
        	name: "Iron Sand",
        	zone: "Western Thanalan",
        	locations: ["Horizon's Edge"]
        }, {
        	level: "15",
        	name: "Cinnabar",
        	zone: "Western Thanalan",
        	locations: ["Horizon's Edge"]
        },
        //------------------------------------------------------- 16-20
        {
        	level: "17",
        	name: "Limestone",
        	zone: "Western La Noscea",
        	locations: ["Skull Valley"]
        }, {
        	level: "20",
        	name: "Grade 1 Carbonized Matter",
        	zone: "Middle La Noscea",
        	locations: ["Three-malm Bend"]
        }, {
        	level: "20",
        	name: "Mudstone",
        	zone: "Western La Noscea",
        	locations: ["Skull Valley"]
        },
        //------------------------------------------------------- 21-25
        {
        	level: "21",
        	name: "Earth Rock",
        	zone: "South Shroud",
        	locations: ["Upper Paths"]
        }, {
        	level: "22",
        	name: "Silver Sand",
        	zone: "South Shroud",
        	locations: ["Upper Paths"]
        }, {
        	level: "23",
        	name: "Fire Rock",
        	zone: "Upper La Noscea",
        	locations: ["Oakwood"]
        }, {
        	level: "23",
        	name: "Ice Rock",
        	zone: "South Shroud",
        	locations: ["Upper Paths"]
        }, {
        	level: "24",
        	name: "Lightning Rock",
        	zone: "Upper La Noscea",
        	locations: ["Oakwood"]
        }, {
        	level: "24",
        	name: "Wind Rock",
        	zone: "South Shroud",
        	locations: ["Upper Paths"]
        }, {
        	level: "25",
        	name: "Water Rock",
        	zone: "Upper La Noscea",
        	locations: ["Oakwood"]
        },
        //------------------------------------------------------- 26-30
        {
        	level: "26",
        	name: "Bomb Ash",
        	zone: "Southern Thanalan",
        	locations: ["Sagolii Desert"]
        }, {
        	level: "26",
        	name: "Earth Crystal",
        	zone: "Lower La Noscea",
        	locations: ["Blind Iron Mines"]
        }, {
        	level: "26",
        	name: "Fire Crystal",
        	zone: "Eastern Thanalan",
        	locations: ["Wellwick Wood"]
        }, {
        	level: "26",
        	name: "Ice Crystal",
        	zone: "Western La Noscea",
        	locations: ["Quarterstone"]
        }, {
        	level: "26",
        	name: "Lightning Crystal",
        	zone: "Southern Thanalan",
        	locations: ["Broken Water"]
        }, {
        	level: "26",
        	name: "Water Crystal",
        	zone: "Western Thanalan",
        	locations: ["Nophica's Wells"]
        }, {
        	level: "26",
        	name: "Wind Crystal",
        	zone: "East Shroud",
        	locations: ["Nine Ivies"]
        }, {
        	level: "27",
        	name: "Silex",
        	zone: "Southern Thanalan",
        	locations: ["Sagolii Desert"]
        }, {
        	level: "28",
        	name: "Blue Pigment",
        	zone: "Western Thanalan",
        	locations: ["Nophica's Wells"]
        }, {
        	level: "28",
        	name: "Brown Pigment",
        	zone: "Lower La Noscea",
        	locations: ["Blind Iron Mines"]
        }, {
        	level: "28",
        	name: "Green Pigment",
        	zone: "East Shroud",
        	locations: ["Nine Ivies"]
        }, {
        	level: "28",
        	name: "Grey Pigment",
        	zone: "Western La Noscea",
        	locations: ["Quarterstone"]
        }, {
        	level: "28",
        	name: "Purple Pigment",
        	zone: "Southern Thanalan",
        	locations: ["Broken Water"]
        }, {
        	level: "28",
        	name: "Red Pigment",
        	zone: "Eastern Thanalan",
        	locations: ["Wellwick Wood"]
        }, {
        	level: "28",
        	name: "Yellow Pigment",
        	zone: "Lower La Noscea",
        	locations: ["Blind Iron Mines"]
        }, {
        	level: "29",
        	name: "Brimstone",
        	zone: "Upper La Noscea",
        	locations: ["Oakwood"]
        }, {
        	level: "30",
        	name: "Grade 1 La Noscean Topsoil",
        	zone: "Lower La Noscea",
        	locations: ["Cedarwood"]
        }, {
        	level: "30",
        	name: "Grade 1 Shroud Topsoil",
        	zone: "East Shroud",
        	locations: ["Nine Ivies"]
        }, {
        	level: "30",
        	name: "Grade 1 Thanalan Topsoil",
        	zone: "Eastern Thanalan",
        	locations: ["Wellwick Wood"]
        }, {
        	level: "30",
        	name: "Siltstone",
        	zone: "Upper La Noscea",
        	locations: ["Oakwood"]
        },
        //------------------------------------------------------- 31-35
        {
        	level: "33",
        	name: "Mythril Sand",
        	zone: "Southern Thanalan",
        	locations: ["The Red Labyrinth"]
        },
        //------------------------------------------------------- 36-40
        {
        	level: "40",
        	name: "Grenade Ash",
        	zone: "Northern Thanalan",
        	locations: ["Bluefog"]
        },
        //------------------------------------------------------- 41-45
        {
        	level: "42",
        	name: "Electrum Sand",
        	zone: "Upper La Noscea",
        	locations: ["Bronze Lake"]
        }, {
        	level: "45",
        	name: "Marble",
        	zone: "Upper La Noscea",
        	locations: ["Bronze Lake"]
        },
        //------------------------------------------------------- 46-50
        {
        	level: "46",
        	name: "Grade 2 La Noscean Topsoil",
        	zone: "Lower La Noscea",
        	locations: ["The Gods' Grip"]
        }, {
        	level: "46",
        	name: "Grade 2 Shroud Topsoil",
        	zone: "East Shroud",
        	locations: ["The Bramble Patch"]
        }, {
        	level: "46",
        	name: "Grade 2 Thanalan Topsoil",
        	zone: "Western Thanalan",
        	locations: ["Nophica's Wells"]
        }, {
        	level: "50",
        	name: "Black Limestone",
        	zone: "Western La Noscea",
        	locations: ["Quarterstone"]
        }, {
        	level: "50",
        	name: "Earth Cluster",
        	zone: "Mor Dhona",
        	locations: ["North Silvertear"]
        }, {
        	level: "50",
        	name: "Fire Cluster",
        	zone: "Mor Dhona",
        	locations: ["North Silvertear"]
        }, {
        	level: "50",
        	name: "Ice Cluster",
        	zone: "Mor Dhona",
        	locations: ["North Silvertear"]
        }, {
        	level: "50",
        	name: "Lightning Cluster",
        	zone: "Mor Dhona",
        	locations: ["North Silvertear"]
        }, {
        	level: "50",
        	name: "Water Cluster",
        	zone: "Mor Dhona",
        	locations: ["North Silvertear"]
        }, {
        	level: "50",
        	name: "Wind Cluster",
        	zone: "Mor Dhona",
        	locations: ["North Silvertear"]
        }, {
        	level: "50★",
        	name: "Astral Rock",
        	zone: "Coerthas Central Highlands",
        	locations: ["Dragonhead"]
        }, {
        	level: "50★",
        	name: "Gold Sand",
        	zone: "Eastern Thanalan",
        	locations: ["Wellwick Wood"]
        }, {
        	level: "50★",
        	name: "Grade 3 La Noscean Topsoil",
        	zone: "Middle La Noscea",
        	locations: ["Zephyr Drift"]
        }, {
        	level: "50★",
        	name: "Grade 3 Shroud Topsoil",
        	zone: "South Shroud",
        	locations: ["Rootslake"]
        }, {
        	level: "50★",
        	name: "Grade 3 Thanalan Topsoil",
        	zone: "Western Thanalan",
        	locations: ["Hammerlea"]
        }, {
        	level: "50★",
        	name: "Umbral Rock",
        	zone: "South Shroud",
        	locations: ["Rootslake"]
        }, {
        	level: "50★",
        	name: "Unaspected Crystal",
        	zone: "Mor Dhona",
        	locations: ["North Silvertear"]
        }, {
        	level: "50★",
        	name: "Volcanic Rock Salt",
        	zone: "Eastern La Noscea",
        	locations: ["Raincatcher Gully"]
        }, {
        	level: "50★★",
        	name: "Antumbral Rock",
        	zone: "Eastern Thanalan",
        	locations: ["Wellwick Wood"]
        }, {
        	level: "50★★",
        	name: "Dark Matter Cluster",
        	zone: "Eastern Thanalan",
        	locations: ["Wellwick Wood"]
        }, {
        	level: "50★★★",
        	name: "Pumice",
        	zone: "Eastern La Noscea",
        	locations: ["Raincatcher Gully"]
        },
        //------------------------------------------------------- 51-55
        {
        	level: "51",
        	name: "Mythrite Sand",
        	zone: "Coerthas Western Highlands",
        	locations: ["Twinpools"]
        }, {
        	level: "52",
        	name: "Yellow Quartz",
        	zone: "The Churning Mists",
        	locations: ["The House of Letters"]
        }, {
        	level: "55",
        	name: "Green Quartz",
        	zone: "The Churning Mists",
        	locations: ["The House of Letters"]
        },
        //------------------------------------------------------- 56-60
        {
        	level: "56",
        	name: "Abalathian Rock Salt",
        	zone: "The Sea of Clouds",
        	locations: ["The Blue Window"]
        }, {
        	level: "56",
        	name: "Fire Moraine",
        	zone: "The Dravanian Forelands",
        	locations: ["Avalonia Fallen"]
        }, {
        	level: "56",
        	name: "Fossilized Dragon Bone",
        	zone: "The Churning Mists",
        	locations: ["Landlord Colony"]
        }, {
        	level: "56",
        	name: "Hardsilver Sand",
        	zone: "The Churning Mists",
        	locations: ["Landlord Colony"]
        }, {
        	level: "56",
        	name: "Lightning Moraine",
        	zone: "The Sea of Clouds",
        	locations: ["Voor Sian Siran"]
        }, {
        	level: "58",
        	name: "Bright Fire Rock",
        	zone: "The Dravanian Forelands",
        	locations: ["Avalonia Fallen"]
        }, {
        	level: "58",
        	name: "Bright Lightning Rock",
        	zone: "The Sea of Clouds",
        	locations: ["Voor Sian Siran"]
        }, {
        	level: "58",
        	name: "Cloud Mica",
        	zone: "The Churning Mists",
        	locations: ["Landlord Colony"]
        }, {
        	level: "58",
        	name: "Red Quartz",
        	zone: "The Sea of Clouds",
        	locations: ["The Blue Window"]
        }, {
        	level: "59",
        	name: "Tektite",
        	zone: "The Churning Mists",
        	locations: ["Landlord Colony"]
        }, {
        	level: "59",
        	name: "Duskfall Moss",
        	zone: "The Churning Mists",
        	locations: ["Landlord Colony"]
        }, {
        	level: "60",
        	name: "Radiant Fire Moraine",
        	zone: "The Dravanian Forelands",
        	locations: ["Avalonia Fallen"]
        }, {
        	level: "60",
        	name: "Radiant Lightning Moraine",
        	zone: "The Sea of Clouds",
        	locations: ["Voor Sian Siran"]
        }, {
        	level: "60★",
        	name: "Lumythrite Sand",
        	zone: "The Churning Mists",
        	locations: ["Landlord Colony"]
        }, {
        	level: "60★",
        	name: "Radiant Astral Moraine",
        	zone: "Coerthas Western Highlands",
        	locations: ["Red Rim"]
        },
        //------------------------------------------------------- 61-65
        {
        	level: "61",
        	name: "Stiperstone",
        	zone: "The Peaks",
        	locations: ["Rustrock"]
        }, {
        	level: "61",
        	name: "Koppranickel Sand",
        	zone: "The Peaks",
        	locations: ["Rustrock"]
        }, {
        	level: "61",
        	name: "Pinch of Active Ingredients",
        	zone: "The Peaks",
        	locations: ["Rustrock"]
        }, {
        	level: "62",
        	name: "Slate",
        	zone: "The Peaks",
        	locations: ["Rustrock"]
        }, {
        	level: "63",
        	name: "Diatomite",
        	zone: "The Ruby Sea",
        	locations: ["Rasen Kaikyo"]
        }, {
        	level: "64",
        	name: "Shisui Jewel",
        	zone: "The Ruby Sea",
        	locations: ["Rasen Kaikyo"]
        }, {
        	level: "65",
        	name: "Cloudkin Feather",
        	zone: "The Churning Mists",
        	locations: ["Landlord Colony"]
        },
        //------------------------------------------------------- 66-70
        {
        	level: "66",
        	name: "Perlite",
        	zone: "Yanxia",
        	locations: ["Unseen Spirits Laughing"]
        }, {
        	level: "66",
        	name: "Durium Sand",
        	zone: "The Azim Steppe",
        	locations: ["Onsal Hakair"]
        }, {
        	level: "66",
        	name: "Strong Steppe Spice",
        	zone: "The Azim Steppe",
        	locations: ["Onsal Hakair"]
        }, {
        	level: "67",
        	name: "Doman Iron Sand",
        	zone: "The Azim Steppe",
        	locations: ["Onsal Hakair"]
        }, {
        	level: "69",
        	name: "Palladium Sand",
        	zone: "The Azim Steppe",
        	locations: ["Onsal Hakair"]
        }, {
        	level: "69",
        	name: "Ala Mhigan Salt Crystal",
        	zone: "The Lochs",
        	locations: ["Loch Seld"]
        }, {
        	level: "70",
        	name: "Animal Trace",
        	zone: "Amh Araeng",
        	locations: ["The Inn at Journey's Head"]
        }, {
        	level: "70",
        	name: "Raven Coal",
        	zone: "Kholusia",
        	locations: ["Shadow Fruit"]
        }, {
        	level: "70",
        	name: "Kholusian Seasonings",
        	zone: "Amh Araeng",
        	locations: ["The Inn at Journey's Head"]
        }, {
        	level: "70★",
        	name: "Airship Fitting Components",
        	zone: "Amh Araeng",
        	locations: ["The Inn at Journey's Head"]
        }, {
        	level: "70★",
        	name: "Kholusian Miscellany",
        	zone: "Kholusia",
        	locations: ["Shadow Fruit"]
        }, {
        	level: "70★★",
        	name: "Yanxian Soil",
        	zone: "Yanxia",
        	locations: ["Unseen Spirits Laughing"]
        }, {
        	level: "70★★",
        	name: "Coarse Saltpeter",
        	zone: "Amh Araeng",
        	locations: ["The Inn at Journey's Head"]
        }, {
        	level: "70★★",
        	name: "Yellow Alumen",
        	zone: "Amh Araeng",
        	locations: ["The Inn at Journey's Head"]
        },
        //------------------------------------------------------- 71-75
        {
        	level: "71",
        	name: "Hard Mudstone",
        	zone: "Kholusia",
        	locations: ["Slowroad"]
        }, {
        	level: "71",
        	name: "Truegold Sand",
        	zone: "Kholusia",
        	locations: ["Slowroad"]
        }, {
        	level: "75",
        	name: "Manasilver Sand",
        	zone: "The Rak'tika Greatwood",
        	locations: ["Lozatl's Conquest"]
        },
        //------------------------------------------------------- 76-80
        {
        	level: "76",
        	name: "Volcanic Tuff",
        	zone: "Kholusia",
        	locations: ["Amity"]
        }, {
        	level: "76",
        	name: "Titancopper Sand",
        	zone: "Amh Araeng",
        	locations: ["Mount Biran Mines"]
        }, {
        	level: "79",
        	name: "Dimythrite Sand",
        	zone: "Amh Araeng",
        	locations: ["Mount Biran Mines"]
        }, {
        	level: "80",
        	name: "Shade Quartz",
        	zone: "Kholusia",
        	locations: ["Amity"]
        },
    ]
};
