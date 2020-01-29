import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Role_Healer = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.healer`;

    return {
        name: "Healer Role",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "70",
        name: "Traditions and Travails"
    }, {
        level: "72",
        name: "Affronts and Allies"
    }, {
        level: "74",
        name: "The Scientific Method"
    }, {
        level: "76",
        name: "The Lost and the Found"
    }, {
        level: "78",
        name: "Never to Return"
    }, {
        level: "80",
        name: "The Soul of Temperence"
    }
];
