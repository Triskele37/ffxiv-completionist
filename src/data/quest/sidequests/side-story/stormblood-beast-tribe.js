import { QuestColumnConfig } from "../../columnConfigs";

export const StormbloodBeastTribe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.stormblood-beast-tribe`;

    return {
        name: "Stormblood Beast Tribe",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "70",
        	name: "The Ananta Maid's Tail",
        	npc: "East Aldenard Assistant",
        	rep: "2nd Highest Rep Level With All Stormblood Tribes"
        }, {
        	level: "70",
        	name: "Ruby Seas under Ruby Skies",
        	npc: "  J'olhmyn",
        	rep: "2nd Highest Rep Level With All Stormblood Tribes"
        }, {
        	level: "70",
        	name: "Fish in a Barrel",
        	npc: "  J'olhmyn",
        	rep: "2nd Highest Rep Level With All Stormblood Tribes"
        }, {
        	level: "70",
        	name: "What a Wonder-full World",
        	npc: "Kabuto",
        	rep: "2nd Highest Rep Level With All Stormblood Tribes"
        }]
    };
};
