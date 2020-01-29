import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Level_61_65 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-61-65`;

    return {
        name: "Levels 61-65",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "61",
        name: "Gyr Abanian Mineral Water",
        zone: "The Fringes",
        location: "The Striped Hills"
    }, {
        level: "62",
        name: "Raw Kyanite",
        zone: "The Fringes",
        location: "The Striped Hills"
    }, {
        level: "62",
        name: "Harpoon Head",
        zone: "The Fringes",
        location: "The Striped Hills"
    }, {
        level: "63",
        name: "Koppranickel Ore",
        zone: "The Ruby Sea",
        location: "Sakazuki"
    }, {
        level: "63",
        name: "Raw Star Spinel",
        zone: "The Ruby Sea",
        location: "Ten-Thousand-Year Pine"
    }, {
        level: "63",
        name: "Phial of Thermal Fluid",
        zone: "Coerthas Western Highlands",
        location: "The Bed of Bones"
    }, {
        level: "64",
        name: "Crescent Spring Water",
        zone: "Yanxia",
        location: "The Gensui Chain"
    }, {
        level: "64",
        name: "Sparkstone",
        zone: "The Ruby Sea",
        location: "Hell's Lid"
    }, {
        level: "65",
        name: "Doman Iron Ore",
        zone: "Yanxia",
        location: "The Gensui Chain"
    }, {
        level: "65",
        name: "Malleable Still Material",
        zone: "Yanxia",
        location: "The Gensui Chain"
    },
];
