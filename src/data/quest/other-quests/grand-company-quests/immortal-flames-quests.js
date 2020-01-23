import { QuestColumnConfig } from "../../columnConfigs";

export const ImmortalFlamesQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.immortal-flames`;

    return {
        name: "Immortal Flames",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "30",
        	name: "A Pup No Longer (Immortal Flames)",
        	npc: "Swift",
        	unlock: ""
        }, {
        	level: "44",
        	name: "Shadows Uncast (Immortal Flames)",
        	npc: "Swift",
        	unlock: ""
        }, {
        	level: "47",
        	name: "Gilding the Bilious (Immortal Flames)",
        	npc: "Swift",
        	unlock: ""
        }, {
        	level: "47",
        	name: "Squadron and Commander (Immortal Flames)",
        	npc: "Flame Personnel Officer",
        	unlock: "Unlocks Adventurer Squadrons"
        }, {
        	level: "50",
        	name: "Like Civilized Men and Women (Immortal Flames)",
        	npc: "Mimio Mio",
        	unlock: "Unlocks Frontline"
        }, {
        	level: "50",
        	name: "Let the Hunt Begin (Immortal Flames)",
        	npc: "Mimio Mio",
        	unlock: "Unlocks The Hunt"
        }]
    };
};
