import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Seasonal_Gold_Saucer_Festivities = function(parent) {
    return new DataGroup("Gold Saucer Festivities", parent).initializeTasks(tasks);
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
