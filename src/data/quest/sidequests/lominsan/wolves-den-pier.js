import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Lominsan_Wolves_Den_Pier = function(name, parent) {
    const data = new DataGroup(name, parent).initializeTasks(tasks);
    data.name = "Wolves' Den Pier";
    return data;
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
