import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Ul_Dahn_Chocobo_Square = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.chocobo-square`;

    return {
        name: "Chocobo Square",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "15",
        	name: "So You Want to Be a Jockey",
        	npc: "Race Chocobo Registrar",
        	unlock: ""
        }, {
        	level: "15",
        	name: "Like Sire Like Fledgling",
        	npc: "Chocobo Keep",
        	unlock: ""
        }]
    };
};
