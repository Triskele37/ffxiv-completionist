import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_61_65 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "61",
        name: "Stiperstone",
        zone: "The Peaks",
        location: "Rustrock"
    }, {
        level: "61",
        name: "Koppranickel Sand",
        zone: "The Peaks",
        location: "Rustrock"
    }, {
        level: "61",
        name: "Pinch of Active Ingredients",
        zone: "The Peaks",
        location: "Rustrock"
    }, {
        level: "62",
        name: "Slate",
        zone: "The Peaks",
        location: "Rustrock"
    }, {
        level: "63",
        name: "Diatomite",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo"
    }, {
        level: "64",
        name: "Shisui Jewel",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo"
    }, {
        level: "65",
        name: "Cloudkin Feather",
        zone: "The Churning Mists",
        location: "Landlord Colony"
    },
];
