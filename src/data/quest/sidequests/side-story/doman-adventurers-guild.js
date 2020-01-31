import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Side_Story_Doman_Adventurers_Guild = function(name, parent) {
    const data = new DataGroup(name, parent).initializeTasks(tasks);
    data.name = "Doman Adventurers' Guild";
    return data;
};

const tasks = [
    {
        level: "54",
        name: "Toll Booty",
        npc: "Rhesh Polaali",
        unlock: ""
    }, {
        level: "54",
        name: "Li'l Rascals",
        npc: "Yozan",
        unlock: ""
    }, {
        level: "54",
        name: "Short Arms of the Law",
        npc: "Yozan",
        unlock: ""
    }
];
