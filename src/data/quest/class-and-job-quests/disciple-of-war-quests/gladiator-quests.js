import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Disciple_Of_War_Gladiator = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gladiator`;

    return {
        name: "Gladiator",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "1",
        	name: "Way of the Gladiator"
        }, {
        	level: "1",
        	name: "My First Gladius"
        }, {
        	level: "5",
        	name: "Kicking the Hornet's Nest"
        }, {
        	level: "10",
        	name: "Ul'dah's Most Wanted"
        }, {
        	level: "15",
        	name: "That Old Familiar Feeling"
        }, {
        	level: "20",
        	name: "The Face of Thal"
        }, {
        	level: "25",
        	name: "On Holy Ground"
        }, {
        	level: "30",
        	name: "The Rematch"
        }]
    };
};
