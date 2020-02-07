import { DataGroup } from "../../DataGroup";

export const Travel_Shared_FATE_The_Rak_Tika_Greatwood = function(name, parent) {
    const data = new DataGroup(name, parent).initializeTasks(tasks);
    data.name = "The Rak'Tika Greatwood";
    return data;
};

const tasks = [
    { name: "1", requirements: "Complete 1 FATE in The Rak'Tika Greatwood" },
    { name: "2", requirements: "Complete 6 FATE in The Rak'Tika Greatwood" },
    { name: "3", requirements: "Complete 60 FATE in The Rak'Tika Greatwood" },
];
