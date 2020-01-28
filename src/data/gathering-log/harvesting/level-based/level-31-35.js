import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Level_31_35 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-31-35`;

    return {
        name: "Levels 31-35",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
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
        ],
    };
};
