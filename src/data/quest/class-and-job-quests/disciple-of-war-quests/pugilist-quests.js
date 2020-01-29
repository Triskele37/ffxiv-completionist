import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Disciple_Of_War_Pugilist = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.pugilist`;

    return {
        name: "Pugilist",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "1",
        name: "Way of the Pugilist"
    }, {
        level: "1",
        name: "My First Hora"
    }, {
        level: "5",
        name: "Harder than Rock"
    }, {
        level: "10",
        name: "Burning Up the Quarter Malm"
    }, {
        level: "15",
        name: "The Spirit Is Willing"
    }, {
        level: "20",
        name: "Keeping the Spirit Alive"
    }, {
        level: "25",
        name: "Star-crossed Rivals"
    }, {
        level: "30",
        name: "Return of the Holyfist"
    }
];
