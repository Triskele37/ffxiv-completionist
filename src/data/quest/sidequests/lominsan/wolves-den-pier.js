import { QuestColumnConfig } from "../../columnConfigs";

export const WolvesDenPier = {
    name: "Wolves' Den Pier",
	storageKey: "quest.side-quest.lominsan",
	columns: QuestColumnConfig,
    tasks: [
        {
        	level: "1",
        	name: "It's Time to Duel",
        	npc: "Fainthearted Fighter",
        	unlock: ""
        }, {
        	level: "30",
        	name: "Earning Your Wings",
        	npc: "Softnox",
        	unlock: "Astragalos"
        },
    ]
};
