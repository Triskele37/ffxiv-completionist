import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Seasonal_Valentiones_Day = function(name, parent) {
    const data = new DataGroup(name, parent).initializeTasks(tasks);
    data.name = "Valentione's Day";
    return data;
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
