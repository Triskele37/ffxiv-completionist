import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_61_65 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "61",
        name: "Gyr Abanian Mineral Water",
        zone: "The Fringes",
        location: "The Striped Hills",
        usage: "ALC, CUL, Collectable, Provisioning",
        special: "",
    }, {
        level: "62",
        name: "Raw Kyanite",
        zone: "The Fringes",
        location: "The Striped Hills",
        usage: "GSM, Provisioning",
        special: "",
    }, {
        level: "62",
        name: "Harpoon Head",
        zone: "The Fringes",
        location: "The Striped Hills",
        usage: "Collectable",
        special: "",
    }, {
        level: "63",
        name: "Koppranickel Ore",
        zone: "The Ruby Sea",
        location: "Sakazuki",
        usage: "ARM, BSM, GSM, Collectable, Provisioning",
        special: "",
    }, {
        level: "63",
        name: "Raw Star Spinel",
        zone: "The Ruby Sea",
        location: "Ten-Thousand-Year Pine",
        usage: "GSM, Collectable",
        special: "Unspoiled (12 AM/PM)",
    }, {
        level: "63",
        name: "Phial of Thermal Fluid",
        zone: "Coerthas Western Highlands",
        location: "The Bed of Bones",
        usage: "Collectable",
        special: "",
    }, {
        level: "64",
        name: "Crescent Spring Water",
        zone: "Yanxia",
        location: "The Gensui Chain",
        usage: "ALC, CUL, Provisioning",
        special: "",
    }, {
        level: "64",
        name: "Sparkstone",
        zone: "The Ruby Sea",
        location: "Hell's Lid",
        usage: "Collectable",
        special: "",
    }, {
        level: "65",
        name: "Doman Iron Ore",
        zone: "Yanxia",
        location: "The Gensui Chain",
        usage: "ARM, BSM, Provisioning",
        special: "",
    }, {
        level: "65",
        name: "Malleable Still Material",
        zone: "Yanxia",
        location: "The Gensui Chain",
        usage: "Collectable",
        special: "",
    },
];
