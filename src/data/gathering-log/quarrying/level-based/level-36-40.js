import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Level_36_40 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-36-40`;

    return {
        name: "Levels 36-40",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "40",
        name: "Grenade Ash",
        zone: "Northern Thanalan",
        location: "Bluefog"
    },
];
