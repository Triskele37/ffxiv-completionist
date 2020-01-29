import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Ul_Dahn_Northern_Thanalan = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.northern`;

    return {
        name: "Northern Thanalan",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "38",
        name: "Thieves and Robbers",
        npc: "Papawazu",
        unlock: ""
    }, {
        level: "38",
        name: "The Ceruleum Must Flow",
        npc: "Papawazu",
        unlock: ""
    }, {
        level: "40",
        name: "Leves of Camp Bluefog",
        npc: "Rurubana",
        unlock: ""
    }, {
        level: "49",
        name: "High Standards",
        npc: "Rafold",
        unlock: ""
    }, {
        level: "49",
        name: "Crate Expectations",
        npc: "Spiraling Path",
        unlock: ""
    }, {
        level: "49",
        name: "Jumping on a Grenade",
        npc: "Rafold",
        unlock: ""
    }, {
        level: "49",
        name: "The Life of the Party",
        npc: "Memezofu",
        unlock: ""
    }, {
        level: "49",
        name: "An Eye for Elixirs",
        npc: "Memezofu",
        unlock: ""
    }
];
