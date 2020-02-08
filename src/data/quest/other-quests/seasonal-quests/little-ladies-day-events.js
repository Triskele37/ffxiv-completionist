import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Seasonal_Little_Ladies_Day = function(parent) {
    return new DataGroup("Little Ladies' Day", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "A Colorful Affair"
    }, {
        level: "15",
        name: "Untended Dreams"
    }
];
