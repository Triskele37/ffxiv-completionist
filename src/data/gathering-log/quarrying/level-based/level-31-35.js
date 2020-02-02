import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_31_35 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "33",
        name: "Mythril Sand",
        zone: "Southern Thanalan",
        location: "The Red Labyrinth"
    },
];
