import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Lominsan_Middle_La_Noscea = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.middle`;

    return {
        name: "Middle La Noscea",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "5",
        	name: "Rocks in a Hard Place",
        	npc: "Grynewyda",
        	unlock: ""
        }, {
        	level: "6",
        	name: "The Time Is Ripe",
        	npc: "Bhirdraeg",
        	unlock: ""
        }, {
        	level: "7",
        	name: "Yarzon, Yarzoff",
        	npc: "Ostfyr",
        	unlock: ""
        }, {
        	level: "7",
        	name: "Orange Crush",
        	npc: "Bhirdraeg",
        	unlock: ""
        }, {
        	level: "8",
        	name: "A Pound of Cure",
        	npc: "Khanmhar",
        	unlock: ""
        }, {
        	level: "10",
        	name: "Out to Dry",
        	npc: "W'dhovaka",
        	unlock: ""
        }, {
        	level: "10",
        	name: "Keeping It Fresh",
        	npc: "Kazai Buoyzai",
        	unlock: ""
        }, {
        	level: "10",
        	name: "Baiting Buzzards",
        	npc: "Kazai Buoyzai",
        	unlock: ""
        }]
    };
};
