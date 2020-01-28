import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Level_41_45 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-41-45`;

    return {
        name: "Levels 41-45",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "42",
                name: "Mirror Apple",
                zone: "Coerthas Central Highlands",
                location: "Whitebrim"
            }, {
                level: "42",
                name: "Mirror Apple Seeds",
                zone: "Coerthas Central Highlands",
                location: "Whitebrim"
            }, {
                level: "44",
                name: "Mistletoe",
                zone: "Coerthas Central Highlands",
                location: "Whitebrim"
            },
        ],
    };
};
