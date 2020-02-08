import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Role_Tank = function(parent) {
    return new DataGroup("Tank", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70",
        name: "The Man with Too Many Scars"
    }, {
        level: "72",
        name: "Shaped by Tragedy"
    }, {
        level: "74",
        name: "Defined By Loss"
    }, {
        level: "76",
        name: "The Princess and Her Knight"
    }, {
        level: "78",
        name: "The Hardened Heart"
    }, {
        level: "80",
        name: "To Have Loved and Lost"
    }
];
