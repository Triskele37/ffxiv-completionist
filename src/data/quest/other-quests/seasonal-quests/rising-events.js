import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Seasonal_Rising = function(parent) {
    return new DataGroup("Rising", parent).initializeTasks(tasks);
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
