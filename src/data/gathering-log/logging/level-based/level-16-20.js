import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Level_16_20 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-16-20`;

    return {
        name: "Levels 16-20",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "16",
                name: "Faerie Apple",
                zone: "East Shroud",
                location: "Nine Ivies"
            }, {
                level: "16",
                name: "Faerie Apple Seeds",
                zone: "East Shroud",
                location: "Nine Ivies"
            }, {
                level: "17",
                name: "Sun Lemon",
                zone: "Lower La Noscea",
                location: "The Grey Fleet"
            }, {
                level: "17",
                name: "Sun Lemon Seeds",
                zone: "Lower La Noscea",
                location: "The Grey Fleet"
            }, {
                level: "18",
                name: "Nopales",
                zone: "Central Thanalan",
                location: "Black Brush"
            }, {
                level: "19",
                name: "Yew Log",
                zone: "East Shroud",
                location: "Nine Ivies"
            }, {
                level: "20",
                name: "Grade 1 Carbonized Matter",
                zone: "Western La Noscea",
                location: "Skull Valley"
            }, {
                level: "20",
                name: "Yew Branch",
                zone: "East Shroud",
                location: "Nine Ivies"
            },
        ],
    };
};
