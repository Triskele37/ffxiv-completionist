import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Side_Story_Even_Further_Hildibrand_Adventures = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.hildibrand-3`;

    return {
        name: "Even Further Hildibrand Adventures",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "70",
        	name: "A Hingan Tale: Nashu Goes East",
        	npc: "Conspicuously Inconspicuous Man",
        	unlock: ""
        }, {
        	level: "70",
        	name: "Life Imitates Art Imitates Life",
        	npc: "Nashu Mhakaracca",
        	unlock: ""
        }, {
        	level: "70",
        	name: "Of Wolves and Gentlemen",
        	npc: "Shigure",
        	unlock: ""
        }, {
        	level: "70",
        	name: "In the Eye of the Hingan",
        	npc: "Shigure",
        	unlock: ""
        }, {
        	level: "70",
        	name: "The Blade Mislaid",
        	npc: "Shigure",
        	unlock: ""
        }, {
        	level: "70",
        	name: "The Black Heart Beneath",
        	npc: "Shigure",
        	unlock: ""
        }, {
        	level: "70",
        	name: "Good Swords, Good Dogs",
        	npc: "Hildibrand",
        	unlock: ""
        }, {
        	level: "70",
        	name: "The Past Is Never Past",
        	npc: "Nashu Mhakaracca",
        	unlock: ""
        }, {
        	level: "70",
        	name: "Don't Do the Dewprism",
        	npc: "Hildibrand",
        	unlock: "Manderville Mambo Emote"
        }]
    };
};
