import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Disciple_of_Magic_Thaumaturge = function(parent) {
    return new DataGroup("Thaumaturge", parent).initializeTasks(tasks);
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
