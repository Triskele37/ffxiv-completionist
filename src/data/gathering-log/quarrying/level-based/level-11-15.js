import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_11_15 = function(parent) {
    return new DataGroup("11-15", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "11",
        name: "Fine Sand",
        zone: "Central Thanalan",
        closestAetheryte: "Black Brush Station",
        coordinates: "(x14,y23)",
        usage: "ALC, CRP",
        special: ""
    }, {
        level: "11",
        name: "Copper Sand",
        zone: "Western Thanalan",
        closestAetheryte: "Horizon",
        coordinates: "(x24,y18)",
        usage: "ALC, Provisioning",
        special: "Buyable"
    }, {
        level: "12",
        name: "Rock Salt",
        zone: "Central Thanalan",
        closestAetheryte: "Black Brush Station",
        coordinates: "(x14,y23)",
        usage: "ALC, CUL, Provisioning",
        special: "Buyable"
    }, {
        level: "13",
        name: "Ragstone",
        zone: "Central Thanalan",
        closestAetheryte: "Black Brush Station",
        coordinates: "(x14,y23)",
        usage: "CRP, CUL, GSM, Provisioning",
        special: "Buyable"
    }, {
        level: "14",
        name: "Iron Sand",
        zone: "Western Thanalan",
        closestAetheryte: "Horizon",
        coordinates: "(x24,y18)",
        usage: "ALC, Provisioning",
        special: "Buyable"
    }, {
        level: "15",
        name: "Cinnabar",
        zone: "Western Thanalan",
        closestAetheryte: "Horizon",
        coordinates: "(x24,y18)",
        usage: "ALC, Provisioning",
        special: "Buyable"
    },
];
