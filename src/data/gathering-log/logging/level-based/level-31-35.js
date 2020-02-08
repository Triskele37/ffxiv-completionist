import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Level_31_35 = function(parent) {
    return new DataGroup("31-35", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "31",
        name: "Oak Branch",
        zone: "South Shroud",
        location: "Lower Paths",
        usage: "ALC, CRP, Provisioning",
        special: "Buyable",
    }, {
        level: "32",
        name: "Oak Log",
        zone: "South Shroud",
        location: "Lower Paths",
        usage: "ALC, CRP",
        special: "",
    }, {
        level: "35",
        name: "Tarantula",
        zone: "South Shroud",
        location: "Lower Paths",
        usage: "ALC, Provisioning",
        special: "",
    },
];
