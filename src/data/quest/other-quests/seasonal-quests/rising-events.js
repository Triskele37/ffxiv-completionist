import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Seasonal_Rising = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "In Adventurers We Trust"
    }, {
        level: "30",
        name: "Message in a Bottle"
    }, {
        level: "30",
        name: "Messages from Distant Shores"
    }
];
