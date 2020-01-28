import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Level_36_40 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-36-40`;

    return {
        name: "Levels 36-40",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "36",
                name: "Iron Acorn",
                zone: "Eastern La Noscea",
                location: "Raincatcher Gully"
            }, {
                level: "37",
                name: "Mahogany Log",
                zone: "Eastern La Noscea",
                location: "Raincatcher Gully"
            }, {
                level: "39",
                name: "Nutmeg",
                zone: "Eastern La Noscea",
                location: "Raincatcher Gully"
            }, {
                level: "40",
                name: "Almond Seeds",
                zone: "Eastern La Noscea",
                location: "Raincatcher Gully"
            }, {
                level: "40",
                name: "Almonds",
                zone: "Eastern La Noscea",
                location: "Raincatcher Gully"
            },
        ],
    };
};
