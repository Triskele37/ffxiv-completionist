import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Ul_Dahn_Northern_Thanalan = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
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
