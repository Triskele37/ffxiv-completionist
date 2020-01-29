import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Disciple_Of_War_Job_Gunbreaker = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gunbreaker`;

    return {
        name: "Gunbreaker",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "60",
        name: "The Makings of a Gunbreaker"
    }, {
        level: "60",
        name: "Hired Gunblades"
    }, {
        level: "63",
        name: "For Better or Worse"
    }, {
        level: "65",
        name: "Confessions of a Flaming Mongrel"
    }, {
        level: "68",
        name: "Of Defectors and Defenders"
    }, {
        level: "70",
        name: "Steel against Steel"
    }, {
        level: "80",
        name: "Gunblades of the Patriots"
    }
];
