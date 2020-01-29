import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Level_6_10 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-6-10`;

    return {
        name: "Levels 6-10",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [],
    };
};
