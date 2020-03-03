import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_61_65 = function(parent) {
    return new DataGroup("61-65", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "61",
        name: "Stiperstone",
        zone: "The Peaks",
        closestAetheryte: "Ala Gannha",
        coordinates: "(x21,y13)",
        usage: "CRP, BSM, GSM, Provisioning",
        special: ""
    }, {
        level: "61",
        name: "Koppranickel Sand",
        zone: "The Peaks",
        closestAetheryte: "Ala Aannha",
        coordinates: "(x21,y13)",
        usage: "ARM, BSM, GSM, ALC, Provisioning",
        special: ""
    }, {
        level: "61",
        name: "Pinch of Active Ingredients",
        zone: "The Peaks",
        closestAetheryte: "Ala Gannha",
        coordinates: "(x21,y13)",
        usage: "Collectable",
        special: ""
    }, {
        level: "62",
        name: "Slate",
        zone: "The Peaks",
        closestAetheryte: "Ala Gannha",
        coordinates: "(x21,y13)",
        usage: "CRP, GSM, FC Crafting, Provisioning",
        special: ""
    }, {
        level: "63",
        name: "Diatomite",
        zone: "The Ruby Sea",
        closestAetheryte: "Tamamizu",
        coordinates: "(x14,y16)",
        usage: "ALC, Provisioning",
        special: ""
    }, {
        level: "64",
        name: "Shisui Jewel",
        zone: "The Ruby Sea",
        closestAetheryte: "Tamamizu",
        coordinates: "(x14,y16)",
        usage: "Collectable",
        special: ""
    }, {
        level: "65",
        name: "Cloudkin Feather",
        zone: "The Churning Mists",
        closestAetheryte: "Moghome",
        coordinates: "(x34,25)",
        usage: "Collectable",
        special: ""
    },
];
