import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_11_15 = function(parent) {
    return new DataGroup("11-15", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "14",
        name: "Iron Ore",
        zone: "Western Thanalan",
        closestAetheryte: "Horizon",
        coordinates: "(x27,y17)",
        nodeTimer: ""
    },
];
