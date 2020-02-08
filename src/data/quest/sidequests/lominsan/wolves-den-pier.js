import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Lominsan_Wolves_Den_Pier = function(parent) {
    return new DataGroup("Wolves' Den Pier", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "It's Time to Duel",
        npc: "Fainthearted Fighter",
        unlock: ""
    }, {
        level: "30",
        name: "Earning Your Wings",
        npc: "Softnox",
        unlock: "Astragalos"
    }
];
