/*
https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=12&columns=ID,Name&limit=11

api contains 2 "Legacy of Allag"s?
*/
import { QuestColumnConfig } from "../columnConfigs";

export const Quest_COANE_The_Crystal_Tower = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.the-crystal-tower`;

    return {
        name: "The Crystal Tower",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "50",
        name: "Legacy of Allag",
        npc: "Outlandish Man",
        unlock: ""
    }, {
        level: "50",
        name: "Sanding It Down",
        npc: "Rammbroes",
        unlock: ""
    }, {
        level: "50",
        name: "A Performance for the Ages",
        npc: "Rammbroes",
        unlock: ""
    }, {
        level: "50",
        name: "Labyrinth of the Ancients (Quest)",
        npc: "G'raha Tia",
        unlock: "Labyrinth of the Ancients"
    }, {
        level: "50",
        name: "For Prosperity",
        npc: "G'raha Tia",
        unlock: ""
    }, {
        level: "50",
        name: "Syrcus Tower (Quest)",
        npc: "Rammbroes",
        unlock: "Syrcus Tower"
    }, {
        level: "50",
        name: "The World of Darkness (Quest)",
        npc: "Rammbroes",
        unlock: "The World of Darkness"
    }, {
        level: "50",
        name: "The Light of Hope",
        npc: "Rammbroes",
        unlock: ""
    }, {
        level: "50",
        name: "But I Hardly Noah",
        npc: "Syele",
        unlock: ""
    }, {
        level: "50",
        name: "The Gift of the Archmagus",
        npc: "Koh Rabntah",
        unlock: ""
    }
];
