import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Level_41_45 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-41-45`;

    return {
        name: "Levels 41-45",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "41",
                name: "Sagolii Sage",
                zone: "Upper La Noscea",
                location: "Bronze Lake"
            }, {
                level: "42",
                name: "Black Scorpion",
                zone: "Upper La Noscea",
                location: "Bronze Lake"
            }, {
                level: "43",
                name: "Rolanberry",
                zone: "Upper La Noscea",
                location: "Bronze Lake"
            }, {
                level: "43",
                name: "Rolanberry Seeds",
                zone: "Upper La Noscea",
                location: "Bronze Lake"
            }, {
                level: "45",
                name: "Dart Frog",
                zone: "Upper La Noscea",
                location: "Bronze Lake"
            },
        ],
    };
};
