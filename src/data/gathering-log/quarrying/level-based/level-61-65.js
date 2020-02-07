import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_61_65 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "61",
        name: "Stiperstone",
        zone: "The Peaks",
        location: "Rustrock",
        usage: "CRP, BSM, GSM, Provisioning",
        special: "",
    }, {
        level: "61",
        name: "Koppranickel Sand",
        zone: "The Peaks",
        location: "Rustrock",
        usage: "ARM, BSM, GSM, ALC, Provisioning",
        special: "",
    }, {
        level: "61",
        name: "Pinch of Active Ingredients",
        zone: "The Peaks",
        location: "Rustrock",
        usage: "Collectable",
        special: "",
    }, {
        level: "62",
        name: "Slate",
        zone: "The Peaks",
        location: "Rustrock",
        usage: "CRP, GSM, FC Crafting, Provisioning",
        special: "",
    }, {
        level: "63",
        name: "Diatomite",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo",
        usage: "ALC, Provisioning",
        special: "",
    }, {
        level: "64",
        name: "Shisui Jewel",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo",
        usage: "Collectable",
        special: "",
    }, {
        level: "65",
        name: "Cloudkin Feather",
        zone: "The Churning Mists",
        location: "Landlord Colony",
        usage: "Collectable",
        special: "",
    },
];
