import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_11_15 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "14",
        name: "Iron Ore",
        zone: "Western Thanalan",
        location: "Horizon's Edge"
    },
];
