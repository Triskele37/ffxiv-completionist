import { DataGroup } from "../../DataGroup";

export const Travel_Shared_FATE_Il_Mheg = function(parent) {
    return new DataGroup("Il Mheg", parent).initializeTasks(tasks);
};

const tasks = [
    { name: "1", requirements: "Complete 1 FATE in Il Mheg" },
    { name: "2", requirements: "Complete 6 FATE in Il Mheg" },
    { name: "3", requirements: "Complete 60 FATE in Il Mheg" },
];
