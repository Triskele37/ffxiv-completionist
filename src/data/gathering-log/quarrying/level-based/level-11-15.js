import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_11_15 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "11",
        name: "Fine Sand",
        zone: "Central Thanalan",
        location: "Black Brush",
        usage: "ALC, CRP",
        special: "",
    }, {
        level: "11",
        name: "Copper Sand",
        zone: "Western Thanalan",
        location: "Horizon's Edge",
        usage: "ALC, Provisioning",
        special: "Buyable",
    }, {
        level: "12",
        name: "Rock Salt",
        zone: "Central Thanalan",
        location: "Black Brush",
        usage: "ALC, CUL, Provisioning",
        special: "Buyable",
    }, {
        level: "13",
        name: "Ragstone",
        zone: "Central Thanalan",
        location: "Black Brush",
        usage: "CRP, CUL, GSM, Provisioning",
        special: "Buyable",
    }, {
        level: "14",
        name: "Iron Sand",
        zone: "Western Thanalan",
        location: "Horizon's Edge",
        usage: "ALC, Provisioning",
        special: "Buyable",
    }, {
        level: "15",
        name: "Cinnabar",
        zone: "Western Thanalan",
        location: "Horizon's Edge",
        usage: "ALC, Provisioning",
        special: "Buyable",
    },
];
