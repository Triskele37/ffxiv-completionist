import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Disciple_Of_Magic_Thaumaturge = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.thaumaturge`;

    return {
        name: "Thaumaturge",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "1",
        name: "Way of the Thaumaturge"
    }, {
        level: "1",
        name: "My First Scepter"
    }, {
        level: "5",
        name: "The Threat of Intimacy"
    }, {
        level: "10",
        name: "The Threat of Paucity"
    }, {
        level: "15",
        name: "The Threat of Superiority"
    }, {
        level: "20",
        name: "The Threat of Perplexity"
    }, {
        level: "25",
        name: "The Hidden Chapter"
    }, {
        level: "30",
        name: "Facing Your Demons"
    }
];
