import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Seasonal_Egg_Hunts = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "Uneggseptable Losses"
    }, {
        level: "15",
        name: "Eggstreme Eggstrapolation"
    }, {
        level: "15",
        name: "A Shelltered Eggsistence"
    }, {
        level: "15",
        name: "Deus Eggs Machina"
    }
];
