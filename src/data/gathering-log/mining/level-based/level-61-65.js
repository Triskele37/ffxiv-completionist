import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_61_65 = function(parent) {
    return new DataGroup("61-65", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "61",
        name: "Gyr Abanian Mineral Water",
        zone: "The Fringes",
        closestAetheryte: "Castrum Oriens",
        coordinates: "(x23,y13)",
        usage: "ALC, CUL, Collectable, Provisioning",
        special: ""
    }, {
        level: "62",
        name: "Raw Kyanite",
        zone: "The Fringes",
        closestAetheryte: "Castrum Oriens",
        coordinates: "(x23,y13)",
        usage: "GSM, Provisioning",
        special: ""
    }, {
        level: "62",
        name: "Harpoon Head",
        zone: "The Fringes",
        closestAetheryte: "Castrum Oriens",
        coordinates: "(x23,y13)",
        usage: "Collectable",
        special: ""
    }, {
        level: "63",
        name: "Koppranickel Ore",
        zone: "The Ruby Sea",
        closestAetheryte: "Tamamizu",
        coordinates: "(x25,y35)",
        usage: "ARM, BSM, GSM, Collectable, Provisioning",
        special: ""
    }, {
        level: "63",
        name: "Raw Star Spinel",
        zone: "The Ruby Sea",
        closestAetheryte: "Tamamizu",
        coordinates: "(x15,y4)",
        usage: "GSM, Collectable",
        special: "Unspoiled (12AM/PM)"
    }, {
        level: "63",
        name: "Phial of Thermal Fluid",
        zone: "Coerthas Western Highlands",
        closestAetheryte: "Falcon's Nest",
        coordinates: "(x22,y34)",
        usage: "Collectable",
        special: ""
    }, {
        level: "64",
        name: "Crescent Spring Water",
        zone: "Yanxia",
        closestAetheryte: "Namai",
        coordinates: "(x33,y22)",
        usage: "ALC, CUL, Provisioning",
        special: ""
    }, {
        level: "64",
        name: "Sparkstone",
        zone: "The Ruby Sea",
        closestAetheryte: "Tamamizu",
        coordinates: "(x25,y35)",
        usage: "Collectable",
        special: ""
    }, {
        level: "65",
        name: "Doman Iron Ore",
        zone: "Yanxia",
        closestAetheryte: "Namai",
        coordinates: "(x33,y22)",
        usage: "ARM, BSM, Provisioning",
        special: ""
    }, {
        level: "65",
        name: "Malleable Still Material",
        zone: "Yanxia",
        closestAetheryte: "Namai",
        coordinates: "(x33,y22)",
        usage: "Collectable",
        special: ""
    },
];
