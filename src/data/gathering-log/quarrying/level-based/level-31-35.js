import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Level_31_35 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-31-35`;

    return {
        name: "Levels 31-35",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "33",
                name: "Mythril Sand",
                zone: "Southern Thanalan",
                location: "The Red Labyrinth"
            },
        ],
    };
};
