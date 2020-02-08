import { DataGroup } from "../../DataGroup";

export const Travel_Shared_FATE_The_Rak_Tika_Greatwood = function(parent) {
    return new DataGroup("The Rak'Tika Greatwood", parent).initializeTasks(tasks);
};

const tasks = [
    { name: "1", requirements: "Complete 1 FATE in The Rak'Tika Greatwood" },
    { name: "2", requirements: "Complete 6 FATE in The Rak'Tika Greatwood" },
    { name: "3", requirements: "Complete 60 FATE in The Rak'Tika Greatwood" },
];
