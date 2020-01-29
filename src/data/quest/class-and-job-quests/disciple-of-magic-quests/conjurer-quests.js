import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Disciple_Of_Magic_Conjurer = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.conjurer`;

    return {
        name: "Conjurer",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "1",
        name: "Way of the Conjurer"
    }, {
        level: "1",
        name: "My First Cane"
    }, {
        level: "5",
        name: "Trial by Earth"
    }, {
        level: "10",
        name: "Trial by Wind"
    }, {
        level: "15",
        name: "Trial by Water"
    }, {
        level: "20",
        name: "Sylphie's Trials"
    }, {
        level: "25",
        name: "Like Mother, Like Daughter"
    }, {
        level: "30",
        name: "In Nature's Embrace"
    }
];
