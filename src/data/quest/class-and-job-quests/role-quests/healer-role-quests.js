import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Role_Healer = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70",
        name: "Traditions and Travails"
    }, {
        level: "72",
        name: "Affronts and Allies"
    }, {
        level: "74",
        name: "The Scientific Method"
    }, {
        level: "76",
        name: "The Lost and the Found"
    }, {
        level: "78",
        name: "Never to Return"
    }, {
        level: "80",
        name: "The Soul of Temperence"
    }
];
