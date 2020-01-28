import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Level_16_20 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-16-20`;

    return {
        name: "Levels 16-20",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "16",
                name: "Galago Mint",
                zone: "East Shroud",
                location: "Nine Ivies"
            }, {
                level: "16",
                name: "Paprika",
                zone: "Western La Noscea",
                location: "Quarterstone"
            }, {
                level: "16",
                name: "Paprika Seeds",
                zone: "Western La Noscea",
                location: "Quarterstone"
            }, {
                level: "17",
                name: "Lalafellin Lentil",
                zone: "Western La Noscea",
                location: "Quarterstone"
            }, {
                level: "18",
                name: "Popoto",
                zone: "Eastern Thanalan",
                location: "Sandgate"
            }, {
                level: "18",
                name: "Popoto Set",
                zone: "Eastern Thanalan",
                location: "Sandgate"
            }, {
                level: "18",
                name: "Belladonna",
                zone: "East Shroud",
                location: "Nine Ivies"
            }, {
                level: "19",
                name: "Gil Bun",
                zone: "East Shroud",
                location: "Nine Ivies"
            }, {
                level: "20",
                name: "Desert Seedling",
                zone: "Eastern Thanalan",
                location: "Sandgate"
            }, {
                level: "20",
                name: "Island Seedling",
                zone: "Western La Noscea",
                location: "Quarterstone"
            }, {
                level: "20",
                name: "Shroud Seedling",
                zone: "East Shroud",
                location: "Nine Ivies"
            }, {
                level: "20",
                name: "White Scorpion",
                zone: "Eastern Thanalan",
                location: "Sandgate"
            },
        ],
    };
};
