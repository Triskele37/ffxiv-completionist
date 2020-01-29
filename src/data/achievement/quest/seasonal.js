import { DataGroup } from "../../DataGroup";

export const Achievements_Quests_Seasonal_Events = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        name: "Sitting with the Dog",
        points: "10",
        description: "Complete the quest \"More Bark and Mochi Bite\"",
        reward: "",
    }
];
