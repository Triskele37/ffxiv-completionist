import { QuestColumnConfig } from "../../columnConfigs";

export const AzysLla = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.azys-lla`;

    return {
        name: "Azys Lla",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "59",
        	name: "Basic Training",
        	npc: "Training Node",
        	unlock: ""
        }, {
        	level: "59",
        	name: "Good Clean Fun",
        	npc: "Sterilization Node",
        	unlock: ""
        }, {
        	level: "59",
        	name: "General Protection Fault",
        	npc: "Safeguard Node",
        	unlock: ""
        }, {
        	level: "59",
        	name: "Excessive Force",
        	npc: "Suppression Node",
        	unlock: ""
        }, {
        	level: "59",
        	name: "Chimerical Abominations",
        	npc: "Research Node",
        	unlock: ""
        }, {
        	level: "59",
        	name: "Pollution Solution",
        	npc: "Life Support Node",
        	unlock: ""
        }, {
        	level: "59",
        	name: "Good Hunting",
        	npc: "Tracking Node",
        	unlock: ""
        }, {
        	level: "59",
        	name: "Defense Protocols",
        	npc: "Expulsion Node",
        	unlock: ""
        }, {
        	level: "59",
        	name: "Snikt",
        	npc: "Logistics Node",
        	unlock: ""
        }, {
        	level: "59",
        	name: "A Crude Facsimile",
        	npc: "Auditing Node",
        	unlock: ""
        }, {
        	level: "59",
        	name: "Recycling",
        	npc: "Assembly Node",
        	unlock: ""
        }, {
        	level: "59",
        	name: "Inadequate Safety Measures",
        	npc: "Restrainment Node",
        	unlock: ""
        }, {
        	level: "59",
        	name: "Environmental Unbalance",
        	npc: "Administrative Node",
        	unlock: ""
        }, {
        	level: "59",
        	name: "Elevated Aggression Levels",
        	npc: "Enhancement Node",
        	unlock: ""
        }]
    };
};
