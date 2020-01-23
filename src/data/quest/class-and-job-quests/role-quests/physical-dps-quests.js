import { QuestColumnConfig } from "../../columnConfigs";

export const PhysicalDPSQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.physical-dps`;

    return {
        name: "Physical DPS",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "70",
        	name: "No Greater Sport"
        }, {
        	level: "72",
        	name: "Vengeance in Defeat"
        }, {
        	level: "74",
        	name: "Freedom from Privilege"
        }, {
        	level: "76",
        	name: "The Hunter's Legacy"
        }, {
        	level: "78",
        	name: "Fellowship Restored"
        }, {
        	level: "80",
        	name: "Courage Born of Fear"
        }]
    };
};
