import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Lominsan_Wolves_Den_Pier = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.wolves-den-pier`;

    return {
        name: "Wolves' Den Pier",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "1",
        	name: "It's Time to Duel",
        	npc: "Fainthearted Fighter",
        	unlock: ""
        }, {
        	level: "30",
        	name: "Earning Your Wings",
        	npc: "Softnox",
        	unlock: "Astragalos"
        }]
    };
};
