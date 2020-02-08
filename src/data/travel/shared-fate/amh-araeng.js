import { DataGroup } from "../../DataGroup";

export const Travel_Shared_FATE_Amh_Araeng = function(parent) {
    return new DataGroup("Amh Araeng", parent).initializeTasks(tasks);
};

const tasks = [
    { name: "1", requirements: "Complete 1 FATE in Amh Araeng" },
    { name: "2", requirements: "Complete 6 FATE in Amh Araeng" },
    { name: "3", requirements: "Complete 60 FATE in Amh Araeng" },
];
