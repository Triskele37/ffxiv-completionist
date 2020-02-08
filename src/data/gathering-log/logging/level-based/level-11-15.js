import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Level_11_15 = function(parent) {
    return new DataGroup("11-15", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "12",
        name: "Elm Log",
        zone: "Central Shroud",
        location: "Bentbranch",
        usage: "ALC, CRP",
        special: "",
    }, {
        level: "14",
        name: "Gridanian Chestnut",
        zone: "Central Shroud",
        location: "Bentbranch",
        usage: "CUL, Provisioning",
        special: "",
    },
];
