import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_16_20 = function(parent) {
    return new DataGroup("16-20", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "17",
        name: "Limestone",
        zone: "Western La Noscea",
        location: "Skull Valley",
        usage: "ALC, ARM, BSM, CRP, GSM, FC Crafting",
        special: "",
    }, {
        level: "20",
        name: "Mudstone",
        zone: "Western La Noscea",
        location: "Skull Valley",
        usage: "ALC, CRP, GSM, FC Crafting, Provisioning",
        special: "Buyable",
    }, {
        level: "20",
        name: "Grade 1 Carbonized Matter",
        zone: "Middle La Noscea",
        location: "Three-malm Bend",
        usage: "Catalyst",
        special: "",
    },
];
