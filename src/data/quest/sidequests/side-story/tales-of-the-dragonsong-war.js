import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Side_Story_Tales_Of_The_Dragonsong_War = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.tales-of-the-dragonsong-war`;

    return {
        name: "Tales of the Dragonsong War",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "60",
        	name: "The Paths We Walk",
        	npc: "House Fortemps Manservant",
        	unlock: ""
        }, {
        	level: "60",
        	name: "The Oaths We Swear",
        	npc: "Higiri",
        	unlock: ""
        }, {
        	level: "60",
        	name: "The Legacies We Leave",
        	npc: "Marcechamp",
        	unlock: ""
        }, {
        	level: "60",
        	name: "The Triumphs We Share",
        	npc: "Sultansworn Elite (NPC)",
        	unlock: ""
        }, {
        	level: "60",
        	name: "The Burdens We Bear",
        	npc: "Slowfix",
        	unlock: ""
        }]
    };
};
