import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Other_Grand_Company_Maelstrom = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.maelstrom`;

    return {
        name: "Maelstrom",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "30",
        	name: "A Pup No Longer (Maelstrom)",
        	npc: "R'ashaht Rhiki",
        	unlock: ""
        }, {
        	level: "44",
        	name: "Shadows Uncast (Maelstrom)",
        	npc: "R'ashaht Rhiki",
        	unlock: ""
        }, {
        	level: "47",
        	name: "Gilding the Bilious (Maelstrom)",
        	npc: "R'ashaht Rhiki",
        	unlock: ""
        }, {
        	level: "47",
        	name: "Squadron and Commander (Maelstrom)",
        	npc: "Storm Personnel Officer",
        	unlock: "Unlocks Adventurer Squadrons"
        }, {
        	level: "50",
        	name: "Like Civilized Men and Women (Maelstrom)",
        	npc: "Trachraet",
        	unlock: "Unlocks Frontline"
        }, {
        	level: "50",
        	name: "Let the Hunt Begin (Maelstrom)",
        	npc: "Trachraet",
        	unlock: "Unlocks the Hunt"
        }]
    };
};
