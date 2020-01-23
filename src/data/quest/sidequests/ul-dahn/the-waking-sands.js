import { QuestColumnConfig } from "../../columnConfigs";

export const TheWakingSands = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.the-waking-sands`;

    return {
        name: "The Waking Sands",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "46",
        	name: "Primal Fear",
        	npc: "Urianger",
        	unlock: ""
        }, {
        	level: "47",
        	name: "A Kobold Initiative",
        	npc: "Slafswys",
        	unlock: ""
        }, {
        	level: "47",
        	name: "Can't Do It without U",
        	npc: "Arenvald",
        	unlock: ""
        }, {
        	level: "48",
        	name: "Into the Valley of the Skull",
        	npc: "Radolf",
        	unlock: ""
        }]
    };
};
