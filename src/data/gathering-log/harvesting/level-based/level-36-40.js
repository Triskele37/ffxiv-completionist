import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Level_36_40 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-36-40`;

    return {
        name: "Levels 36-40",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "36",
        name: "Blood Currant Seeds",
        zone: "South Shroud",
        location: "Lower Paths"
    }, {
        level: "36",
        name: "Blood Currants",
        zone: "South Shroud",
        location: "Lower Paths"
    }, {
        level: "37",
        name: "Mugwort",
        zone: "Eastern La Noscea",
        location: "Raincatcher Gully"
    }, {
        level: "38",
        name: "Maiden Artichoke",
        zone: "Eastern La Noscea",
        location: "Raincatcher Gully"
    }, {
        level: "39",
        name: "Ramhorn Zucchini",
        zone: "Eastern La Noscea",
        location: "Raincatcher Gully"
    }, {
        level: "39",
        name: "Thyme",
        zone: "South Shroud",
        location: "Lower Paths"
    },
];
