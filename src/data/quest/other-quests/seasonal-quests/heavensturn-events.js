import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Seasonal_Heavensturn = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "More Bark and Mochi Bite"
    }, {
        level: "15",
        name: "Mochi to Be Desired"
    }
];
