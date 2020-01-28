import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Disciple_Of_Magic_Job_Blue_Mage = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.blue-mage`;

    return {
        name: "Blue Mage",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "50",
        	name: "Out of the Blue"
        }, {
        	level: "1",
        	name: "Blue Leading the Blue"
        }, {
        	level: "10",
        	name: "Blue Collar Work"
        }, {
        	level: "20",
        	name: "Why They Call it the Blues"
        }, {
        	level: "30",
        	name: "Scream Blue Murder"
        }, {
        	level: "40",
        	name: "Blue Gold"
        }, {
        	level: "50",
        	name: "The Real Folk Blues"
        }, {
        	level: "50",
        	name: "Turning Over a Blue Leaf"
        }]
    };
};
