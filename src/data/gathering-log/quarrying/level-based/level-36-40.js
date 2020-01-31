import { DataGroup } from "../../../DataGroup";

export const Gathering_Logs_Quarrying_Level_36_40 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "40",
        name: "Grenade Ash",
        zone: "Northern Thanalan",
        location: "Bluefog"
    },
];
