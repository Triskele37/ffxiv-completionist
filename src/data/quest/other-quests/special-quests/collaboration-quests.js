import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Special_Collaboration = function(parent) {
    return new DataGroup("Collaboration", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70",
        name: "The New King on the Block"
    }, {
        level: "70",
        name: "The Newer King on the Block"
    }, {
        level: "50",
        name: "The Man in Black"
    }, {
        level: "50",
        name: "In the Dark of Night"
    }, {
        level: "50",
        name: "Messenger of the Winds"
    }
];
