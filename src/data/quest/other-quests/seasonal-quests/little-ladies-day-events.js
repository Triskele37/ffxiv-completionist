import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Seasonal_Little_Ladies_Day = function(name, parent) {
    const data = new DataGroup(name, parent).initializeTasks(tasks);
    data.name = "Little Ladies' Day";
    return data;
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
