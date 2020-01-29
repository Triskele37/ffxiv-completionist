import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Gyr_Abanian_The_Lochs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.the-lochs`;

    return {
        name: "The Lochs",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "69",
        name: "It's a Zu Out There",
        npc: "Munifrid",
        unlock: "Aether Current"
    }, {
        level: "69",
        name: "Send in the Armor",
        npc: "Dantounuel",
        unlock: ""
    }, {
        level: "69",
        name: "A Fletching Suggestion",
        npc: "Supriya",
        unlock: ""
    }, {
        level: "69",
        name: "A Rite to Rest",
        npc: "Betha",
        unlock: "Aether Current"
    }, {
        level: "69",
        name: "If I Were a Fish",
        npc: "Dorothe",
        unlock: "Aether Current"
    }, {
        level: "69",
        name: "Necessities of War",
        npc: "Pamisolaux",
        unlock: ""
    }, {
        level: "69",
        name: "Are They Ill Tempered",
        npc: "J'zula Tia",
        unlock: "Aether Current"
    }, {
        level: "69",
        name: "At the Top of the Stairs",
        npc: "Topher",
        unlock: ""
    }, {
        level: "70",
        name: "Those We Hold Dear",
        npc: "Bertliana",
        unlock: ""
    }
];
