import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Level_11_15 = function(parentStorageKey) {
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
        level: "14",
        name: "Iron Ore",
        zone: "Western Thanalan",
        location: "Horizon's Edge"
    },
];
