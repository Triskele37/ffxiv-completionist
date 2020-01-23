import { GatheringColumnConfig } from "../columnConfigs";

export const LevelBasedHarvestingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-based`;

    return {
        name: "Level Based",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
        //------------------------------------------------------- 1-5
        {
            level: "1",
            name: "Earth Shard",
            zone: "Lower La Noscea",
            location: "Moraby Bay"
        }, {
            level: "1",
            name: "Fire Shard",
            zone: "Middle La Noscea",
            location: "Summerford"
        }, {
            level: "1",
            name: "Ice Shard",
            zone: "Western La Noscea",
            location: "Quarterstone"
        }, {
            level: "1",
            name: "Lightning Shard",
            zone: "Central Thanalan",
            location: "The Clutch"
        }, {
            level: "1",
            name: "Water Shard",
            zone: "Western Thanalan",
            location: "Horizon's Edge"
        }, {
            level: "1",
            name: "Wind Shard",
            zone: "Central Shroud",
            location: "Bentbranch"
        }, {
            level: "1",
            name: "Firelight Seeds",
            zone: "Middle La Noscea",
            location: "Summerford"
        }, {
            level: "1",
            name: "Icelight Seeds",
            zone: "Western La Noscea",
            location: "Quarterstone"
        }, {
            level: "1",
            name: "Windlight Seeds",
            zone: "Central Shroud",
            location: "Bentbranch"
        }, {
            level: "1",
            name: "Earthlight Seeds",
            zone: "Lower La Noscea",
            location: "Moraby Bay"
        }, {
            level: "1",
            name: "Levinlight Seeds",
            zone: "Central Thanalan",
            location: "The Clutch"
        }, {
            level: "1",
            name: "Waterlight Seeds",
            zone: "Western Thanalan",
            location: "Horizon's Edge"
        },
        //------------------------------------------------------- 6-10
        //------------------------------------------------------- 11-15
        {
            level: "11",
            name: "Chanterelle",
            zone: "Central Shroud",
            location: "Bentbranch"
        }, {
            level: "11",
            name: "Garlean Garlic",
            zone: "Western Thanalan",
            location: "Nophica's Wells"
        }, {
            level: "11",
            name: "Garlic Cloves",
            zone: "Western Thanalan",
            location: "Nophica's Wells"
        }, {
            level: "11",
            name: "Lowland Grape Seeds",
            zone: "Lower La Noscea",
            location: "Moraby Bay"
        }, {
            level: "11",
            name: "Lowland Grapes",
            zone: "Lower La Noscea",
            location: "Moraby Bay"
        }, {
            level: "11",
            name: "Moko Grass",
            zone: "Western Thanalan",
            location: "Horizon's Edge"
        }, {
            level: "11",
            name: "Rye",
            zone: "Western Thanalan",
            location: "Horizon's Edge"
        }, {
            level: "11",
            name: "Sunset Wheat",
            zone: "Middle La Noscea",
            location: "Summerford"
        }, {
            level: "11",
            name: "Tree Toad",
            zone: "Central Shroud",
            location: "Bentbranch"
        }, {
            level: "11",
            name: "Yellow Ginseng",
            zone: "Central Thanalan",
            location: "The Clutch"
        }, {
            level: "12",
            name: "Buffalo Beans",
            zone: "Central Shroud",
            location: "Bentbranch"
        }, {
            level: "12",
            name: "Grass Viper",
            zone: "Western Thanalan",
            location: "Horizon's Edge"
        }, {
            level: "12",
            name: "Lavender",
            zone: "Central Shroud",
            location: "Bentbranch"
        }, {
            level: "12",
            name: "Lavender Seeds",
            zone: "Central Shroud",
            location: "Bentbranch"
        }, {
            level: "12",
            name: "Straw",
            zone: "Middle La Noscea",
            location: "Summerford"
        }, {
            level: "12",
            name: "Wild Onion",
            zone: "Western Thanalan",
            location: "Nophica's Wells"
        }, {
            level: "12",
            name: "Wild Onion Set",
            zone: "Western Thanalan",
            location: "Nophica's Wells"
        }, {
            level: "13",
            name: "Carnation",
            zone: "Central Shroud",
            location: "Bentbranch"
        }, {
            level: "13",
            name: "Cinderfoot Olive",
            zone: "Lower La Noscea",
            location: "Moraby Bay"
        }, {
            level: "13",
            name: "Coerthan Carrot",
            zone: "Western Thanalan",
            location: "Horizon's Edge"
        }, {
            level: "13",
            name: "Coerthan Carrot Seeds",
            zone: "Western Thanalan",
            location: "Horizon's Edge"
        }, {
            level: "13",
            name: "Humus",
            zone: "Central Shroud",
            location: "Bentbranch"
        }, {
            level: "13",
            name: "La Noscean Lettuce",
            zone: "Middle La Noscea",
            location: "Summerford"
        }, {
            level: "13",
            name: "La Noscean Lettuce Seeds",
            zone: "Middle La Noscea",
            location: "Summerford"
        }, {
            level: "13",
            name: "Ogre Pumpkin",
            zone: "Western Thanalan",
            location: "Nophica's Wells"
        }, {
            level: "13",
            name: "Olive Seeds",
            zone: "Lower La Noscea",
            location: "Moraby Bay"
        }, {
            level: "14",
            name: "Black Pepper",
            zone: "Central Thanalan",
            location: "The Clutch"
        }, {
            level: "14",
            name: "Black Pepper Seeds",
            zone: "Central Thanalan",
            location: "The Clutch"
        }, {
            level: "14",
            name: "Cieldalaes Spinach",
            zone: "Lower La Noscea",
            location: "Moraby Bay"
        }, {
            level: "14",
            name: "Cotton Boll",
            zone: "Central Shroud",
            location: "Bentbranch"
        }, {
            level: "15",
            name: "Alpine Parsnip",
            zone: "Central Thanalan",
            location: "The Clutch"
        }, {
            level: "15",
            name: "Highland Parsley",
            zone: "Lower La Noscea",
            location: "Moraby Bay"
        }, {
            level: "15",
            name: "Marjoram",
            zone: "Central Shroud",
            location: "Bentbranch"
        }, {
            level: "15",
            name: "Ruby Tomato",
            zone: "Middle La Noscea",
            location: "Summerford"
        },
        //------------------------------------------------------- 16-20
        {
            level: "16",
            name: "Galago Mint",
            zone: "East Shroud",
            location: "Nine Ivies"
        }, {
            level: "16",
            name: "Paprika",
            zone: "Western La Noscea",
            location: "Quarterstone"
        }, {
            level: "16",
            name: "Paprika Seeds",
            zone: "Western La Noscea",
            location: "Quarterstone"
        }, {
            level: "17",
            name: "Lalafellin Lentil",
            zone: "Western La Noscea",
            location: "Quarterstone"
        }, {
            level: "18",
            name: "Popoto",
            zone: "Eastern Thanalan",
            location: "Sandgate"
        }, {
            level: "18",
            name: "Popoto Set",
            zone: "Eastern Thanalan",
            location: "Sandgate"
        }, {
            level: "18",
            name: "Belladonna",
            zone: "East Shroud",
            location: "Nine Ivies"
        }, {
            level: "19",
            name: "Gil Bun",
            zone: "East Shroud",
            location: "Nine Ivies"
        }, {
            level: "20",
            name: "Desert Seedling",
            zone: "Eastern Thanalan",
            location: "Sandgate"
        }, {
            level: "20",
            name: "Island Seedling",
            zone: "Western La Noscea",
            location: "Quarterstone"
        }, {
            level: "20",
            name: "Shroud Seedling",
            zone: "East Shroud",
            location: "Nine Ivies"
        }, {
            level: "20",
            name: "White Scorpion",
            zone: "Eastern Thanalan",
            location: "Sandgate"
        },
        //------------------------------------------------------- 21-25
        {
            level: "21",
            name: "Pixie Plum Seeds",
            zone: "Upper La Noscea",
            location: "Oakwood"
        }, {
            level: "21",
            name: "Pixie Plums",
            zone: "Upper La Noscea",
            location: "Oakwood"
        }, {
            level: "22",
            name: "Button Mushroom",
            zone: "Eastern Thanalan",
            location: "Drybone"
        }, {
            level: "22",
            name: "Noble Grapes",
            zone: "Upper La Noscea",
            location: "Oakwood"
        }, {
            level: "23",
            name: "Ala Mhigan Mustard",
            zone: "Eastern Thanalan",
            location: "Drybone"
        }, {
            level: "23",
            name: "Ala Mhigan Mustard Seeds",
            zone: "Eastern Thanalan",
            location: "Drybone"
        }, {
            level: "24",
            name: "Chamomile",
            zone: "Upper La Noscea",
            location: "Oakwood"
        }, {
            level: "24",
            name: "Chamomile Seeds",
            zone: "Upper La Noscea",
            location: "Oakwood"
        }, {
            level: "24",
            name: "Pearl Ginger",
            zone: "Eastern Thanalan",
            location: "Drybone"
        }, {
            level: "24",
            name: "Pearl Ginger Root",
            zone: "Eastern Thanalan",
            location: "Drybone"
        }, {
            level: "25",
            name: "Millioncorn",
            zone: "Eastern Thanalan",
            location: "Drybone"
        }, {
            level: "25",
            name: "Millioncorn Seeds",
            zone: "Eastern Thanalan",
            location: "Drybone"
        }, {
            level: "25",
            name: "Sticky Rice",
            zone: "Upper La Noscea",
            location: "Oakwood"
        },
        //------------------------------------------------------- 26-30
        {
            level: "26",
            name: "Jade Peas",
            zone: "North Shroud",
            location: "Alder Springs"
        }, {
            level: "26",
            name: "Fire Crystal",
            zone: "The Dravanian Forelands",
            location: "Chocobo Forest"
        }, {
            level: "26",
            name: "Ice Crystal",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "26",
            name: "Wind Crystal",
            zone: "The Dravanian Hinterlands",
            location: "The Answering Quarter"
        }, {
            level: "26",
            name: "Earth Crystal",
            zone: "The Churning Mists",
            location: "Landlord Colony"
        }, {
            level: "26",
            name: "Lightning Crystal",
            zone: "The Sea of Clouds",
            location: "The Blue Window"
        }, {
            level: "26",
            name: "Water Crystal",
            zone: "The Ruby Sea",
            location: "The Isle of Bekko"
        }, {
            level: "27",
            name: "Wizard Eggplant",
            zone: "North Shroud",
            location: "Alder Springs"
        }, {
            level: "27",
            name: "Wizard Eggplant Seeds",
            zone: "North Shroud",
            location: "Alder Springs"
        }, {
            level: "28",
            name: "Midland Cabbage",
            zone: "North Shroud",
            location: "Alder Springs"
        }, {
            level: "28",
            name: "Midland Cabbage Seeds",
            zone: "North Shroud",
            location: "Alder Springs"
        }, {
            level: "30",
            name: "Moor Leech",
            zone: "North Shroud",
            location: "Alder Springs"
        },
        //------------------------------------------------------- 31-35
        {
            level: "31",
            name: "Flax",
            zone: "South Shroud",
            location: "Lower Paths"
        }, {
            level: "31",
            name: "Linseed",
            zone: "South Shroud",
            location: "Lower Paths"
        }, {
            level: "31",
            name: "Yafaem Wildgrass",
            zone: "Southern Thanalan",
            location: "Broken Water"
        }, {
            level: "32",
            name: "Aloe",
            zone: "Southern Thanalan",
            location: "Broken Water"
        }, {
            level: "32",
            name: "Midland Basil",
            zone: "Eastern La Noscea",
            location: "Bloodshore"
        }, {
            level: "32",
            name: "Midland Basil Seeds",
            zone: "Eastern La Noscea",
            location: "Bloodshore"
        }, {
            level: "33",
            name: "Bloodgrass",
            zone: "Southern Thanalan",
            location: "Broken Water"
        }, {
            level: "33",
            name: "Mandrake",
            zone: "Eastern La Noscea",
            location: "Bloodshore"
        }, {
            level: "33",
            name: "Mandrake Seeds",
            zone: "Eastern La Noscea",
            location: "Bloodshore"
        }, {
            level: "33",
            name: "White Truffle",
            zone: "South Shroud",
            location: "Lower Paths"
        }, {
            level: "34",
            name: "Laurel",
            zone: "Southern Thanalan",
            location: "Broken Water"
        }, {
            level: "34",
            name: "Salt Leek",
            zone: "Eastern La Noscea",
            location: "Bloodshore"
        }, {
            level: "34",
            name: "Wildfowl Feather",
            zone: "South Shroud",
            location: "Lower Paths"
        }, {
            level: "35",
            name: "Desert Saffron",
            zone: "Southern Thanalan",
            location: "Broken Water"
        }, {
            level: "35",
            name: "Dragon Pepper",
            zone: "Eastern La Noscea",
            location: "Bloodshore"
        },
        //------------------------------------------------------- 36-40
        {
            level: "36",
            name: "Blood Currant Seeds",
            zone: "South Shroud",
            location: "Lower Paths"
        }, {
            level: "36",
            name: "Blood Currants",
            zone: "South Shroud",
            location: "Lower Paths"
        }, {
            level: "37",
            name: "Mugwort",
            zone: "Eastern La Noscea",
            location: "Raincatcher Gully"
        }, {
            level: "38",
            name: "Maiden Artichoke",
            zone: "Eastern La Noscea",
            location: "Raincatcher Gully"
        }, {
            level: "39",
            name: "Ramhorn Zucchini",
            zone: "Eastern La Noscea",
            location: "Raincatcher Gully"
        }, {
            level: "39",
            name: "Thyme",
            zone: "South Shroud",
            location: "Lower Paths"
        },
        //------------------------------------------------------- 41-45
        {
            level: "41",
            name: "Sagolii Sage",
            zone: "Upper La Noscea",
            location: "Bronze Lake"
        }, {
            level: "42",
            name: "Black Scorpion",
            zone: "Upper La Noscea",
            location: "Bronze Lake"
        }, {
            level: "43",
            name: "Rolanberry",
            zone: "Upper La Noscea",
            location: "Bronze Lake"
        }, {
            level: "43",
            name: "Rolanberry Seeds",
            zone: "Upper La Noscea",
            location: "Bronze Lake"
        }, {
            level: "45",
            name: "Dart Frog",
            zone: "Upper La Noscea",
            location: "Bronze Lake"
        },
        //------------------------------------------------------- 46-50
        {
            level: "48",
            name: "Thanalan Tea Leaves",
            zone: "Southern Thanalan",
            location: "Sagolii Desert"
        }, {
            level: "49",
            name: "Lava Toad",
            zone: "Southern Thanalan",
            location: "Sagolii Desert"
        }, {
            level: "50",
            name: "Maiden Grass",
            zone: "Southern Thanalan",
            location: "Sagolii Desert"
        }, {
            level: "50",
            name: "Fire Cluster",
            zone: "The Dravanian Forelands",
            location: "Avalonia Fallen"
        }, {
            level: "50",
            name: "Ice Cluster",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "50",
            name: "Wind Cluster",
            zone: "The Dravanian Hinterlands",
            location: "The Answering Quarter"
        }, {
            level: "50",
            name: "Earth Cluster",
            zone: "The Dravanian Forelands",
            location: "Avalonia Fallen"
        }, {
            level: "50★",
            name: "Black Truffle",
            zone: "Eastern Thanalan",
            location: "Drybone"
        }, {
            level: "50★",
            name: "Dzemael Tomato",
            zone: "Eastern La Noscea",
            location: "Raincatcher Gully"
        }, {
            level: "50★",
            name: "Dzemael Tomato Seeds",
            zone: "Eastern La Noscea",
            location: "Raincatcher Gully"
        }, {
            level: "50★",
            name: "Honey Lemon",
            zone: "Eastern La Noscea",
            location: "Bloodshore"
        }, {
            level: "50★",
            name: "Honey Lemon Seeds",
            zone: "Eastern La Noscea",
            location: "Bloodshore"
        }, {
            level: "50★",
            name: "Kidragora",
            zone: "East Shroud",
            location: "The Honey Yard"
        }, {
            level: "50★",
            name: "Mazlaya Greens",
            zone: "Eastern Thanalan",
            location: "Drybone"
        }, {
            level: "50★",
            name: "Silkworm Cocoon",
            zone: "East Shroud",
            location: "Nine Ivies"
        }, {
            level: "50★",
            name: "Trilium Bulb",
            zone: "East Shroud",
            location: "The Honey Yard"
        }, {
            level: "50★",
            name: "Trillium",
            zone: "East Shroud",
            location: "The Bramble Patch"
        }, {
            level: "50★",
            name: "Unaspected Crystal",
            zone: "East Shroud",
            location: "Little Solace"
        }, {
            level: "50★★",
            name: "Dark Matter Cluster",
            zone: "The Dravanian Forelands",
            location: "Chocobo Forest"
        }, {
            level: "50★★",
            name: "La Noscean Leek",
            zone: "Western La Noscea",
            location: "Quarterstone"
        }, {
            level: "50★★",
            name: "Shroud Tea Leaves",
            zone: "Central Shroud",
            location: "Sorrel Haven"
        }, {
            level: "50★★",
            name: "Waterfowl Feather",
            zone: "Western La Noscea",
            location: "Quarterstone"
        }, {
            level: "50★★",
            name: "Young Cieldalaes Spinach",
            zone: "Lower La Noscea",
            location: "Cedarwood"
        }, {
            level: "50★★★",
            name: "Old World Fig",
            zone: "The Dravanian Forelands",
            location: "Chocobo Forest"
        }, {
            level: "50★★★",
            name: "Old World Fig Seeds",
            zone: "The Dravanian Forelands",
            location: "Chocobo Forest"
        }, {
            level: "50★★★",
            name: "Rosemary",
            zone: "East Shroud",
            location: "Nine Ivies"
        },
        //------------------------------------------------------- 51-55
        {
            level: "51",
            name: "Rainbow Cotton Boll",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "52",
            name: "Pearl Sprout Seeds",
            zone: "Coerthas Western Highlands",
            location: "Riversmeet"
        }, {
            level: "52",
            name: "Pearl Sprouts",
            zone: "Coerthas Western Highlands",
            location: "Riversmeet"
        }, {
            level: "52",
            name: "Mist Dill",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "53",
            name: "Coerthan Tea Leaves",
            zone: "Coerthas Western Highlands",
            location: "Riversmeet"
        }, {
            level: "53",
            name: "Coerthan Tea Seeds",
            zone: "Coerthas Western Highlands",
            location: "Riversmeet"
        }, {
            level: "53",
            name: "Cyclops Onion",
            zone: "The Dravanian Forelands",
            location: "Chocobo Forest"
        }, {
            level: "53",
            name: "Highland Wheat",
            zone: "The Dravanian Forelands",
            location: "Chocobo Forest"
        }, {
            level: "54",
            name: "Stalk of Ramie",
            zone: "The Dravanian Forelands",
            location: "Chocobo Forest"
        }, {
            level: "55",
            name: "Chives",
            zone: "Coerthas Western Highlands",
            location: "Riversmeet"
        }, {
            level: "55",
            name: "Emerald Beans",
            zone: "The Churning Mists",
            location: "Landlord Colony"
        }, {
            level: "55",
            name: "Magma Beet",
            zone: "The Churning Mists",
            location: "Landlord Colony"
        },
        //------------------------------------------------------- 56-60
        {
            level: "56",
            name: "Coneflower",
            zone: "The Dravanian Forelands",
            location: "Avalonia Fallen"
        }, {
            level: "56",
            name: "Granular Clay",
            zone: "The Dravanian Forelands",
            location: "Avalonia Fallen"
        }, {
            level: "56",
            name: "Highland Oregano",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "57",
            name: "Cow Bitter",
            zone: "The Dravanian Hinterlands",
            location: "The Answering Quarter"
        }, {
            level: "57",
            name: "Dated Radz-At-Han Coin",
            zone: "The Dravanian Hinterlands",
            location: "The Answering Quarter"
        }, {
            level: "57",
            name: "Sesame Seeds",
            zone: "The Sea of Clouds",
            location: "The Blue Window"
        }, {
            level: "58",
            name: "Furymint",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "58",
            name: "Ice Stalagmite",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "58",
            name: "Peat Moss",
            zone: "The Dravanian Forelands",
            location: "Avalonia Fallen"
        }, {
            level: "58",
            name: "Rue",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "59",
            name: "Coriander",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "59",
            name: "Dandelion",
            zone: "The Churning Mists",
            location: "Four Arms"
        }, {
            level: "59",
            name: "Duskfall Moss",
            zone: "The Churning Mists",
            location: "Four Arms"
        }, {
            level: "60",
            name: "Bitter Foxglove",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "60",
            name: "Black Soil",
            zone: "The Dravanian Forelands",
            location: "Avalonia Fallen"
        }, {
            level: "60",
            name: "Black Swan Feather",
            zone: "The Dravanian Hinterlands",
            location: "The Answering Quarter"
        }, {
            level: "60",
            name: "Bladeleaf",
            zone: "The Dravanian Forelands",
            location: "Avalonia Fallen"
        }, {
            level: "60",
            name: "Chysahl Greens",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "60",
            name: "Clary Sage",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "60",
            name: "Cloud Cotton Boll",
            zone: "The Diadem",
            location: "The Diadem"
        }, {
            level: "60",
            name: "Cotter Dynasty Relic",
            zone: "The Fringes",
            location: "East End"
        }, {
            level: "60",
            name: "Foxglove",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "60",
            name: "Gaelicatnip",
            zone: "The Dravanian Hinterlands",
            location: "The Answering Quarter"
        }, {
            level: "60",
            name: "Glass Eye",
            zone: "The Sea of Clouds",
            location: "The Blue Window"
        }, {
            level: "60",
            name: "Periwinkle",
            zone: "The Dravanian Hinterlands",
            location: "The Answering Quarter"
        }, {
            level: "60",
            name: "Shishu Koban",
            zone: "The Ruby Sea",
            location: "The Isle of Bekko"
        }, {
            level: "60",
            name: "Starcrack Sand",
            zone: "The Fringes",
            location: "East End"
        }, {
            level: "60★",
            name: "Lover's Laurel",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "60★",
            name: "Mute Swan Feather",
            zone: "The Dravanian Hinterlands",
            location: "The Answering Quarter"
        }, {
            level: "60★",
            name: "Peaks Pigment",
            zone: "The Peaks",
            location: "The Last Forest"
        }, {
            level: "60★",
            name: "Rainbow Pigment",
            zone: "The Dravanian Forelands",
            location: "Avalonia Fallen"
        }, {
            level: "60★",
            name: "Whitefrost Cotton Boll",
            zone: "Coerthas Western Highlands",
            location: "Twinpools"
        }, {
            level: "60★",
            name: "Yellow Kudzu Root",
            zone: "The Peaks",
            location: "The Last Forest"
        }, {
            level: "60★★",
            name: "Bloodhemp",
            zone: "The Fringes",
            location: "East End"
        }, {
            level: "60★★",
            name: "Gyr Abanian Wheat",
            zone: "The Fringes",
            location: "East End"
        },
        //------------------------------------------------------- 61-65
        {
            level: "61",
            name: "Pinch of Active Ingredients",
            zone: "The Peaks",
            location: "The Last Forest"
        }, {
            level: "62",
            name: "Mountain Popoto",
            zone: "The Peaks",
            location: "The Last Forest"
        }, {
            level: "62",
            name: "Buckwheat Kernels",
            zone: "The Peaks",
            location: "The Last Forest"
        }, {
            level: "62",
            name: "Gem Algae",
            zone: "The Ruby Sea",
            location: "Rasen Kaiko"
        }, {
            level: "62",
            name: "Harpoon Head",
            zone: "The Fringes",
            location: "Dimwold"
        }, {
            level: "63",
            name: "Ruby Cotton Boll",
            zone: "The Ruby Sea",
            location: "Rasen Kaiko"
        }, {
            level: "63",
            name: "Holy Basil",
            zone: "The Fringes",
            location: "Dimwold"
        }, {
            level: "63",
            name: "Phial of Thermal Fluid",
            zone: "Coerthas Western Highlands",
            location: "Gorgagne Holding"
        }, {
            level: "64",
            name: "Sugar Beet",
            zone: "The Peaks",
            location: "The Last Forest"
        }, {
            level: "64",
            name: "Green Leek",
            zone: "The Peaks",
            location: "The Last Forest"
        }, {
            level: "64",
            name: "Soybeans",
            zone: "The Ruby Sea",
            location: "East Othard Coastline"
        }, {
            level: "64",
            name: "Ama Nori",
            zone: "The Ruby Sea",
            location: "Rasen Kaikyo"
        }, {
            level: "64",
            name: "Shisui Jewel",
            zone: "The Ruby Sea",
            location: "Rasen Kaikyo"
        }, {
            level: "65",
            name: "Kudzu Root",
            zone: "The Fringes",
            location: "Dimwold"
        }, {
            level: "65",
            name: "Cumin Seeds",
            zone: "The Ruby Sea",
            location: "East Othard Coastline"
        }, {
            level: "65",
            name: "Kudzu Vine",
            zone: "The Fringes",
            location: "Dimwold"
        }, {
            level: "65",
            name: "Cloudkin Feather",
            zone: "The Churning Mists",
            location: "Ohl Than"
        },
        //------------------------------------------------------- 66-70
        {
            level: "66",
            name: "Daikon Radish",
            zone: "Yanxia",
            location: "Doma"
        }, {
            level: "66",
            name: "Gyr Abanian Carrot",
            zone: "The Peaks",
            location: "Mount Yorn"
        }, {
            level: "66",
            name: "Lotus Root",
            zone: "Yanxia",
            location: "Doma"
        }, {
            level: "66",
            name: "Sun Cabbage",
            zone: "The Azim Steppe",
            location: "Nhaama's Retreat"
        }, {
            level: "66",
            name: "Fennel",
            zone: "The Azim Steppe",
            location: "Nhaama's Retreat"
        }, {
            level: "66",
            name: "Strong Steppe Spice",
            zone: "The Azim Steppe",
            location: "Nhaama's Retreat"
        }, {
            level: "66",
            name: "Doman Yellow",
            zone: "The Azim Steppe",
            location: "Nhaama's Retreat"
        }, {
            level: "66",
            name: "Windtea Leaves",
            zone: "Yanxia",
            location: "Doma"
        }, {
            level: "67",
            name: "Ruby Tide Kelp",
            zone: "The Ruby Sea",
            location: "Rasen Kaikyo"
        }, {
            level: "68",
            name: "Jhammel Ginger",
            zone: "The Lochs",
            location: "The Royal Hunting Grounds"
        }, {
            level: "68",
            name: "Yanxian Parsley",
            zone: "Yanxia",
            location: "Doma"
        }, {
            level: "68",
            name: "Alyssum",
            zone: "The Peaks",
            location: "Mount Yorn"
        }, {
            level: "68",
            name: "Nagxian Cudweed",
            zone: "Yanxia",
            location: "Doma"
        }, {
            level: "68",
            name: "Chickweed",
            zone: "The Azim Steppe",
            location: "Nhaama's Retreat"
        }, {
            level: "68",
            name: "Nipplewort",
            zone: "The Azim Steppe",
            location: "Nhaama's Retreat"
        }, {
            level: "69",
            name: "Doman Eggplant",
            zone: "Yanxia",
            location: "Doma"
        }, {
            level: "69",
            name: "Twincoon",
            zone: "The Peaks",
            location: "Mount Yorn"
        }, {
            level: "70",
            name: "Animal Trace",
            zone: "Amh Araeng",
            location: "Snitch"
        }, {
            level: "70",
            name: "Kholusian Seasonings",
            zone: "Amh Araeng",
            location: "Snitch"
        }, {
            level: "70",
            name: "Clinquant Stones",
            zone: "Il Mheg",
            location: "Thysm Lran"
        },  {
            level: "70★",
            name: "Hallowed Basil",
            zone: "The Peaks",
            location: "Mount Yorn"
        }, {
            level: "70★",
            name: "Airship Fitting Components",
            zone: "Amh Araeng",
            location: "Snitch"
        }, {
            level: "70★★",
            name: "Yanxian Verbena",
            zone: "Yanxia",
            location: "Doma"
        }, {
            level: "70★★",
            name: "Night Pepper",
            zone: "Amh Araeng",
            location: "Snitch"
        },
        //------------------------------------------------------- 71-75
        {
            level: "71",
            name: "Purple Carrot",
            zone: "Lakeland",
            location: "The Forest of the Lost Shepherd"
        }, {
            level: "71",
            name: "Curly Parsley",
            zone: "Il Mheg",
            location: "The Woolen Way"
        }, {
            level: "71",
            name: "Blood Tomato",
            zone: "Il Mheg",
            location: "The Woolen Way"
        }, {
            level: "71",
            name: "Bright Flax",
            zone: "Lakeland",
            location: "The Forest of the Lost Shepherd"
        }, {
            level: "72",
            name: "Garden Beet",
            zone: "Il Mheg",
            location: "The Woolen Way"
        }, {
            level: "72",
            name: "Broad Beans",
            zone: "Il Mheg",
            location: "Phisor Lran"
        }, {
            level: "72",
            name: "Iridescent Cocoon",
            zone: "Il Mheg",
            location: "The Woolen Way"
        }, {
            level: "73",
            name: "Upland Wheat",
            zone: "Kholusia",
            location: "Seagazer"
        }, {
            level: "73",
            name: "Animal Droppings",
            zone: "Lakeland",
            location: "The Forest of the Lost Shepherd"
        }, {
            level: "74",
            name: "Peppermint",
            zone: "Lakeland",
            location: "Embrasure"
        }, {
            level: "74",
            name: "Pixie Floss Boll",
            zone: "The Rak'tika Greatwood",
            location: "The Deliberating Doll"
        }, {
            level: "75",
            name: "Creamtop Mushroom",
            zone: "The Rak'tika Greatwood",
            location: "The Deliberating Doll"
        }, {
            level: "75",
            name: "Royal Grapes",
            zone: "The Rak'tika Greatwood",
            location: "The Deliberating Doll"
        }, {
            level: "75",
            name: "Megafauna Leftovers",
            zone: "Il Mheg",
            location: "The Woolen Way"
        },
        //------------------------------------------------------- 76-80
        {
            level: "76",
            name: "Russet Popoto",
            zone: "Amh Araeng",
            location: "The Dragging Tail"
        }, {
            level: "76",
            name: "White Clay",
            zone: "Kholusia",
            location: "Scree"
        }, {
            level: "76",
            name: "Sweet Alyssum",
            zone: "The Rak'tika Greatwood",
            location: "The Wild Fete"
        }, {
            level: "76",
            name: "Sweet Marjoram",
            zone: "The Rak'tika Greatwood",
            location: "The Wild Fete"
        }, {
            level: "77",
            name: "Fernleaf Lavender",
            zone: "The Rak'tika Greatwood",
            location: "The Wild Fete"
        }, {
            level: "78",
            name: "Mist Spinach",
            zone: "The Rak'tika Greatwood",
            location: "Bowrest"
        }, {
            level: "78",
            name: "Coffee Beans",
            zone: "Kholusia",
            location: "Scree"
        }, {
            level: "78",
            name: "Bomba Rice",
            zone: "Kholusia",
            location: "Scree"
        }, {
            level: "78",
            name: "Lime Basil",
            zone: "Lakeland",
            location: "Weed"
        }, {
            level: "78",
            name: "Megafauna Trace",
            zone: "The Rak'tika Greatwood",
            location: "The Wild Fete"
        }, {
            level: "79",
            name: "Dwarven Cotton Boll",
            zone: "Kholusia",
            location: "Scree"
        }, {
            level: "79",
            name: "Tiger Lily",
            zone: "Lakeland",
            location: "Weed"
        }, {
            level: "79",
            name: "Light Gerbera",
            zone: "Lakeland",
            location: "Weed"
        }, {
            level: "80",
            name: "Bog Sage",
            zone: "Lakeland",
            location: "Weed"
        }]
    };
};
