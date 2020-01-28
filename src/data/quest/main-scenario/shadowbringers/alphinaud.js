import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Main_Scenario_Shadowbringers_Alphinaud = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.alphinaud`;

    return {
        name: "Alphinaud",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "70",
        	name: "In Search of Alphinaud",
        	npc: "Crystal Exarch",
        	unlock: "Kholusia"
        }, {
        	level: "70",
        	name: "A Still Tide",
        	npc: "Szem Dzenmai",
        	unlock: ""
        }, {
        	level: "70",
        	name: "Open Arms, Closed Gate",
        	npc: "Alphinaud Leveilleur",
        	unlock: ""
        }, {
        	level: "70",
        	name: "A Fickle Existence",
        	npc: "Alphinaud Leveilleur",
        	unlock: ""
        }, {
        	level: "70",
        	name: "City of Final Pleasures",
        	npc: "Alphinaud Leveilleur",
        	unlock: "Eulmore"
        }, {
        	level: "70",
        	name: "Free to Sightsee",
        	npc: "Alphinaud Leveilleur",
        	unlock: ""
        }, {
        	level: "70",
        	name: "A Taste of Honey",
        	npc: "Amiable Maiden",
        	unlock: ""
        }, {
        	level: "70",
        	name: "A Blessed Instrument",
        	npc: "Alphinaud Leveilleur",
        	unlock: ""
        }, {
        	level: "70",
        	name: "Emergent Splendor",
        	npc: "Alphinaud Leveilleur",
        	unlock: ""
        }]
    };
};
