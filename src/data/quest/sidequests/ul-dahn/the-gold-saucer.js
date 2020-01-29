import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Ul_Dahn_The_Gold_Saucer = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.the-gold-saucer`;

    return {
        name: "The Gold Saucer",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "15",
        name: "World of Wonders",
        npc: "Airship Ticketer",
        unlock: ""
    }, {
        level: "15",
        name: "Triple Triad Trial",
        npc: "Triple Triad Master",
        unlock: "Triple Triad"
    }, {
        level: "15",
        name: "Scratch It Rich",
        npc: "Mini Cactpot Broker",
        unlock: "Mini Cactpot"
    }, {
        level: "15",
        name: "Hitting the Cactpot",
        npc: "Jumbo Cactpot Broker",
        unlock: "Jumbo Cactpot"
    }, {
        level: "15",
        name: "Passion for Fashion",
        npc: "Lewena",
        unlock: "The Fashion Report"
    }, {
        level: "15",
        name: "Every Little Thing She Does Is Mahjong",
        npc: "Lewena",
        unlock: "Mahjong"
    }
];
