import { DataGroup } from "../../DataGroup";

export const Travel_Shared_FATE_The_Tempest = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    { name: "1", requirements: "Complete 1 FATE in The Tempest" },
    { name: "2", requirements: "Complete 6 FATE in The Tempest" },
    { name: "3", requirements: "Complete 60 FATE in The Tempest" },
];
