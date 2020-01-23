import { QuestColumnConfig } from "../../columnConfigs";

export const MarauderQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.marauder`;

    return {
        name: "Marauder",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "1",
        	name: "Way of the Marauder"
        }, {
        	level: "1",
        	name: "My First Axe"
        }, {
        	level: "5",
        	name: "Axe in the Stone"
        }, {
        	level: "10",
        	name: "Wake of Destruction"
        }, {
        	level: "15",
        	name: "Brutal Strength"
        }, {
        	level: "20",
        	name: "The Mountain that Strides"
        }, {
        	level: "25",
        	name: "Bleeder of the Pack"
        }, {
        	level: "30",
        	name: "Bringing Down the Mountain"
        }]
    };
};
