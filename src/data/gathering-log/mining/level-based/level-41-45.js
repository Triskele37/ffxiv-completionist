import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Level_41_45 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-41-45`;

    return {
        name: "Levels 41-45",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "41",
                name: "Raw Turquoise",
                zone: "Upper La Noscea",
                location: "Bronze Lake"
            }, {
                level: "43",
                name: "Electrum Ore",
                zone: "Upper La Noscea",
                location: "Bronze Lake"
            }, {
                level: "44",
                name: "Raw Amber",
                zone: "Eastern Thanalan",
                location: "Drybone"
            }, {
                level: "45",
                name: "Raw Rubellite",
                zone: "Eastern Thanalan",
                location: "Drybone"
            },
        ],
    };
};
