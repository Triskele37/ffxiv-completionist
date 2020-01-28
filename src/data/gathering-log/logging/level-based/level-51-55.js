import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Level_51_55 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-51-55`;

    return {
        name: "Levels 51-55",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "51",
                name: "Porcini",
                zone: "The Churning Mists",
                location: "Easton Eyes"
            }, {
                level: "54",
                name: "Dark Chestnut Log",
                zone: "The Dravanian Forelands",
                location: "The Smoldering Wastes"
            }, {
                level: "54",
                name: "Dravanian Mistletoe",
                zone: "The Churning Mists",
                location: "Easton Eyes"
            }, {
                level: "55",
                name: "Dark Chestnut",
                zone: "The Dravanian Forelands",
                location: "The Smoldering Wastes"
            }, {
                level: "55",
                name: "Dark Chestnut Branch",
                zone: "The Dravanian Forelands",
                location: "The Smoldering Wastes"
            },
        ],
    };
};
