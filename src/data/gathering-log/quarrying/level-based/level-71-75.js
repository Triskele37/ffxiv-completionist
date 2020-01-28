import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Level_71_75 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-71-75`;

    return {
        name: "Levels 71-75",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "71",
                name: "Hard Mudstone",
                zone: "Kholusia",
                location: "Slowroad"
            }, {
                level: "71",
                name: "Truegold Sand",
                zone: "Kholusia",
                location: "Slowroad"
            }, {
                level: "75",
                name: "Manasilver Sand",
                zone: "The Rak'tika Greatwood",
                location: "Lozatl's Conquest"
            },
        ],
    };
};
