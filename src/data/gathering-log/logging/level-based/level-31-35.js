import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Level_31_35 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-31-35`;

    return {
        name: "Levels 31-35",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "31",
                name: "Oak Branch",
                zone: "South Shroud",
                location: "Lower Paths"
            }, {
                level: "32",
                name: "Oak Log",
                zone: "South Shroud",
                location: "Lower Paths"
            }, {
                level: "35",
                name: "Tarantula",
                zone: "South Shroud",
                location: "Lower Paths"
            },
        ],
    };
};
