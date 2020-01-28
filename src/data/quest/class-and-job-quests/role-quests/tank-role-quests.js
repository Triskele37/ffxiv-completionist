import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Role_Tank = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.tank`;

    return {
        name: "Tank Role",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "70",
        	name: "The Man with Too Many Scars"
        }, {
        	level: "72",
        	name: "Shaped by Tragedy"
        }, {
        	level: "74",
        	name: "Defined By Loss"
        }, {
        	level: "76",
        	name: "The Princess and Her Knight"
        }, {
        	level: "78",
        	name: "The Hardened Heart"
        }, {
        	level: "80",
        	name: "To Have Loved and Lost"
        }]
    };
};
