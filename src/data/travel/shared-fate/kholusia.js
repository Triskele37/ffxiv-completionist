import { DataGroup } from "../../DataGroup";

export const Travel_Shared_FATE_Kholusia = function(parent) {
    return new DataGroup("Kholusia", parent).initializeTasks(tasks);
};

const tasks = [
    { name: "1", requirements: "Complete 1 FATE in Kholusia" },
    { name: "2", requirements: "Complete 6 FATE in Kholusia" },
    { name: "3", requirements: "Complete 60 FATE in Kholusia" },
];
