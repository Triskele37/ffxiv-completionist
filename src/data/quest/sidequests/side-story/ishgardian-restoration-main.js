import { QuestColumnConfig } from "../../columnConfigs";

export const IshgardianRestorationMain = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgardian-restoration-main`;

    return {
        name: "Ishgardian Restoration Main",
    	storageKey,
        columns: QuestColumnConfig,
        tasks: [{
        	level: "60",
        	name: "Towards the Firmament",
        	npc: "Recruitment Notice",
        	unlock: "The Firmament"
        }]
    };
};
