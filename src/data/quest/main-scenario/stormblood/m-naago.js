import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Main_Scenario_Stormblood_M_Naago = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.m-naago`;

    return {
        name: "M'Naago",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "60",
        	name: "A Friend of a Friend in Need",
        	npc: "M'naago Rahz",
        	unlock: ""
        }, {
        	level: "60",
        	name: "Signed, Sealed, to Be Delivered",
        	npc: "M'naago Rahz",
        	unlock: ""
        }, {
        	level: "60",
        	name: "Best Served with Cold Steel",
        	npc: "Raubahn",
        	unlock: ""
        }, {
        	level: "60",
        	name: "Let Fill Your Hearts with Pride",
        	npc: "M'naago Rahz",
        	unlock: ""
        }]
    };
};
