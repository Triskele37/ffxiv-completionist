import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Level_21_25 = function(parent) {
    return new DataGroup("21-25", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "21",
        name: "Gridanian Walnut",
        zone: "South Shroud",
        closestAetheryte: "Quarrymill",
        coordinates: "(x23,y21)",
        usage: "CUL, Provisioning",
        special: ""
    }, {
        level: "23",
        name: "Matron's Mistletoe",
        zone: "South Shroud",
        closestAetheryte: "Quarrymill",
        coordinates: "(x23,y21)",
        usage: "ALC, CRP, Provisioning",
        special: ""
    }, {
        level: "24",
        name: "Walnut Log",
        zone: "South Shroud",
        closestAetheryte: "Quarrymill",
        coordinates: "(x23,y21)",
        usage: "ALC, CRP, Provisioning",
        special: ""
    },
];
