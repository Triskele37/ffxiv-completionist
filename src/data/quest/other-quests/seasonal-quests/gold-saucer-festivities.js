import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Seasonal_Gold_Saucer_Festivities = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "Trouble in Paradise"
    }, {
        level: "15",
        name: "The Sabotender Shimmy"
    }
];
