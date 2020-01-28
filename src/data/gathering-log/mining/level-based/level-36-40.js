import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Level_36_40 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-36-40`;

    return {
        name: "Levels 36-40",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "36",
                name: "Raw Tourmaline",
                zone: "South Shroud",
                location: "Urth's Gift"
            }, {
                level: "37",
                name: "Raw Spinel",
                zone: "South Shroud",
                location: "Urth's Gift"
            }, {
                level: "38",
                name: "Raw Zircon",
                zone: "Coerthas Central Highlands",
                location: "Dragonhead"
            }, {
                level: "39",
                name: "Jade",
                zone: "Coerthas Central Highlands",
                location: "Dragonhead"
            }, {
                level: "40",
                name: "Black Alumen",
                zone: "South Shroud",
                location: "Urth's Gift"
            },
        ],
    };
};
