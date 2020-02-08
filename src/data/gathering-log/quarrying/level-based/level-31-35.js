import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_31_35 = function(parent) {
    return new DataGroup("31-35", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "33",
        name: "Mythril Sand",
        zone: "Southern Thanalan",
        location: "The Red Labyrinth",
        usage: "ALC, Provisioning",
        special: "",
    },
];
