import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Level_71_75 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-71-75`;

    return {
        name: "Levels 71-75",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "72",
                name: "Truegold Ore",
                zone: "Il Mheg",
                location: "The Bookman's Shelves"
            }, {
                level: "72",
                name: "Raw Diaspore",
                zone: "Il Mheg",
                location: "Sextuplet Shallow"
            }, {
                level: "73",
                name: "Highland Spring Water",
                zone: "Il Mheg",
                location: "The Bookman's Shelves"
            }, {
                level: "73",
                name: "Animal Droppings",
                zone: "Lakeland",
                location: "Weed"
            }, {
                level: "74",
                name: "Raw Lazurite",
                zone: "The Rak'tika Greatwood",
                location: "Cleric"
            }, {
                level: "74",
                name: "Bluespirit Ore",
                zone: "Lakeland",
                location: "Weed"
            }, {
                level: "75",
                name: "Megafauna Leftovers",
                zone: "Il Mheg",
                location: "The Bookman's Shelves"
            },
        ],
    };
};
