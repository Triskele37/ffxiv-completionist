import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Side_Story_Doman_Adventurers_Guild = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.doman-adventurers-guild`;

    return {
        name: "Doman Adventurers' Guild",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
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
