import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Disciple_Of_War_Lancer = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.lancer`;

    return {
        name: "Lancer",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "1",
        	name: "Way of the Lancer"
        }, {
        	level: "1",
        	name: "My First Spear"
        }, {
        	level: "5",
        	name: "Spear of the Fearless"
        }, {
        	level: "10",
        	name: "Courage of Stone"
        }, {
        	level: "15",
        	name: "A Dangerous Proposition"
        }, {
        	level: "20",
        	name: "Lance of Destiny"
        }, {
        	level: "25",
        	name: "Questions and Lancers"
        }, {
        	level: "30",
        	name: "Proof of Might"
        }]
    };
};
