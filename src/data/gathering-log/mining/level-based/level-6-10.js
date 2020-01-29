import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Level_6_10 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-6-10`;

    return {
        name: "Levels 6-10",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "6",
        name: "Tin Ore",
        zone: "Western Thanalan",
        location: "Hammerlea"
    }, {
        level: "7",
        name: "Raw Lapis Lazuli",
        zone: "North Shroud",
        location: "Treespeak"
    }, {
        level: "7",
        name: "Raw Sunstone",
        zone: "Lower La Noscea",
        location: "Cedarwood"
    }, {
        level: "8",
        name: "Soiled Femur",
        zone: "Western Thanalan",
        location: "Hammerlea"
    }, {
        level: "9",
        name: "Zinc Ore",
        zone: "Western Thanalan",
        location: "Hammerlea"
    }, {
        level: "10",
        name: "Obsidian",
        zone: "Western Thanalan",
        location: "Hammerlea"
    }, {
        level: "10",
        name: "Potter's Clay",
        zone: "North Shroud",
        location: "Treespeak"
    },
];
