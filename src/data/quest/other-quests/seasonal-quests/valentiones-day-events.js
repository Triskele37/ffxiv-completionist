import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Seasonal_Valentiones_Day = function(parent) {
    return new DataGroup("Valentione's Day", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "Lessons in Love"
    }, {
        level: "15",
        name: "In Fortune with the Times"
    }
];
