import { QuestColumnConfig } from "../../columnConfigs";

export const EasternLaNoscea = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.eastern`;

    return {
        name: "Eastern La Noscea",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "30",
        	name: "Leves of Costa del Sol",
        	npc: "Nahctahr",
        	unlock: ""
        }, {
        	level: "30",
        	name: "Costa Beach Party",
        	npc: "Gegeruju",
        	unlock: ""
        }, {
        	level: "32",
        	name: "Who Moved My Headcheese",
        	npc: "Kuzai Tazai",
        	unlock: ""
        }, {
        	level: "32",
        	name: "Get a Grip",
        	npc: "Kuzai Tazai",
        	unlock: ""
        }, {
        	level: "32",
        	name: "Unrefined Methods",
        	npc: "Fyrilsunn",
        	unlock: ""
        }, {
        	level: "32",
        	name: "Buffaloed All the Way",
        	npc: "P'ebaloh",
        	unlock: ""
        }, {
        	level: "32",
        	name: "Pests in the Pillars",
        	npc: "P'ebaloh",
        	unlock: ""
        }, {
        	level: "32",
        	name: "To You from Failing Hands We Throw",
        	npc: "Fyrilsunn",
        	unlock: ""
        }, {
        	level: "32",
        	name: "Raptor 'round Your Little Finger",
        	npc: "Etgar",
        	unlock: ""
        }, {
        	level: "32",
        	name: "Put a Cork in It",
        	npc: "Byrglaent",
        	unlock: ""
        }, {
        	level: "33",
        	name: "Mona Lisa Smile",
        	npc: "Etgar",
        	unlock: ""
        }, {
        	level: "33",
        	name: "Anise, Chocolate, and a Hint of Toad",
        	npc: "Etgar",
        	unlock: ""
        }, {
        	level: "33",
        	name: "The Wind, It Passes",
        	npc: "Gegeruju",
        	unlock: ""
        }, {
        	level: "33",
        	name: "Bird's Eye View",
        	npc: "Gegeruju",
        	unlock: ""
        }, {
        	level: "33",
        	name: "The Stench of Danger",
        	npc: "P'ebaloh",
        	unlock: ""
        }, {
        	level: "35",
        	name: "Leves of Wineport",
        	npc: "Aileen",
        	unlock: ""
        }, {
        	level: "36",
        	name: "Treasures and Tribulations",
        	npc: "H'loonh",
        	unlock: "Decipher, Dig"
        }]
    };
};
