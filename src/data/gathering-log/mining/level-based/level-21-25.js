import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Level_21_25 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-21-25`;

    return {
        name: "Levels 21-25",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "24",
                name: "Effervescent Water",
                zone: "South Shroud",
                location: "Upper Paths"
            }, {
                level: "25",
                name: "Silver Ore",
                zone: "South Shroud",
                location: "Upper Paths"
            },
        ],
    };
};
