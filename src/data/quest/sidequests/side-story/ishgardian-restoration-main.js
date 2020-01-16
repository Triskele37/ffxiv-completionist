import { QuestColumnConfig } from "../../columnConfigs";

export const IshgardianRestorationMain = {
    name: "Ishgardian Restoration Main",
	storageKey: "quest.side-quest.side-story.ishgardian-restoration",
    columns: QuestColumnConfig,
    tasks: [
        {
        	level: "60",
        	name: "Towards the Firmament",
        	npc: "Recruitment Notice",
        	unlock: "The Firmament"
        },
    ]
};
