import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Level_11_15 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-11-15`;

    return {
        name: "Levels 11-15",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "12",
        name: "Elm Log",
        zone: "Central Shroud",
        location: "Bentbranch"
    }, {
        level: "14",
        name: "Gridanian Chestnut",
        zone: "Central Shroud",
        location: "Bentbranch"
    },
];
