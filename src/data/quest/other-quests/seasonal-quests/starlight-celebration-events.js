import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Seasonal_Starlight_Celebration = function(parent) {
    return new DataGroup("Starlight Celebration", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "All I Want for Starlight"
    }, {
        level: "15",
        name: "A Chocobo Carol"
    }, {
        level: "15",
        name: "A Star Shines On"
    }
];
