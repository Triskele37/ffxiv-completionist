import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Main_Scenario_Heavensward_Emmanellain = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.emmanellain`;

    return {
        name: "Emmanellain",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "50",
        	name: "Onwards and Upwards",
        	npc: "Emmanellain",
        	unlock: "The Sea of Clouds"
        }, {
        	level: "50",
        	name: "An Indispensable Ally",
        	npc: "Laniaitte de Haillenarte",
        	unlock: ""
        }, {
        	level: "50",
        	name: "Meeting the Neighbors",
        	npc: "Laniaitte de Haillenarte",
        	unlock: ""
        }, {
        	level: "50",
        	name: "Sense of Urgency",
        	npc: "Marielle",
        	unlock: ""
        }, {
        	level: "50",
        	name: "Hope Springs Eternal",
        	npc: "Marielle",
        	unlock: ""
        }, {
        	level: "50",
        	name: "A Series of Unfortunate Events",
        	npc: "Honoroit",
        	unlock: ""
        }, {
        	level: "50",
        	name: "A Reward Long in Coming",
        	npc: "Emmanellain",
        	unlock: ""
        }]
    };
};
