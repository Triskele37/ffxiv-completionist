import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Level_26_30 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-26-30`;

    return {
        name: "Levels 26-30",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "26",
        name: "Ice Crystal",
        zone: "Coerthas Western Highlands",
        location: "Riversmeet"
    }, {
        level: "26",
        name: "Fire Crystal",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest"
    }, {
        level: "26",
        name: "Wind Crystal",
        zone: "The Dravanian Hinterlands",
        location: "The Makers' Quarter"
    }, {
        level: "26",
        name: "Lightning Crystal",
        zone: "The Sea of Clouds",
        location: "Voor Sian Siran"
    }, {
        level: "26",
        name: "Earth Crystal",
        zone: "The Peaks",
        location: "Sleeping Stones"
    }, {
        level: "26",
        name: "Water Crystal",
        zone: "The Sea of Clouds",
        location: "Voor Sian Siran"
    }, {
        level: "28",
        name: "Wyvern Obsidian",
        zone: "Eastern Thanalan",
        location: "Wellwick Wood"
    }, {
        level: "30",
        name: "Saltpeter",
        zone: "Eastern Thanalan",
        location: "Wellwick Wood"
    },
];
