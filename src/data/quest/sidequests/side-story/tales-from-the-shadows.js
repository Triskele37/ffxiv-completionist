import { QuestColumnConfig } from "../../columnConfigs";

export const TalesFromTheShadows = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.tales-from-the-shadows`;

    return {
        name: "Tales from the Shadows",
    	storageKey,
        columns: QuestColumnConfig,
        tasks: [{
        	level: "80",
        	name: "One Final Journey",
        	npc: "F'lhaminn",
        	unlock: ""
        }]
    };
};
