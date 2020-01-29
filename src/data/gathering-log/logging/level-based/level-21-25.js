import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Level_21_25 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-21-25`;

    return {
        name: "Levels 21-25",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "21",
        name: "Gridanian Walnut",
        zone: "South Shroud",
        location: "Upper Paths"
    }, {
        level: "23",
        name: "Matron's Mistletoe",
        zone: "South Shroud",
        location: "Upper Paths"
    }, {
        level: "24",
        name: "Walnut Log",
        zone: "South Shroud",
        location: "Upper Paths"
    },
];
