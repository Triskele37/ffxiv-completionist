import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Level_71_75 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-71-75`;

    return {
        name: "Levels 71-75",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "71",
        name: "Pixie Apple",
        zone: "Il Mheg",
        location: "The Church at Dammroen Field"
    }, {
        level: "71",
        name: "Frantoio",
        zone: "Lakeland",
        location: "The Chiliad"
    }, {
        level: "71",
        name: "White Oak Log",
        zone: "Kholusia",
        location: "The Bright Cliff"
    }, {
        level: "72",
        name: "Miracle Apple Log",
        zone: "Il Mheg",
        location: "The Church at Dammroen Field"
    }, {
        level: "74",
        name: "White Ash Log",
        zone: "The Rak'tika Greatwood",
        location: "Woven Oath"
    }, {
        level: "75",
        name: "Gianthive Chip",
        zone: "The Rak'tika Greatwood",
        location: "Woven Oath"
    },
];
