import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Disciple_Of_War_Job_Samurai = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.samurai`;

    return {
        name: "Samurai",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "50",
        name: "The Way of the Samurai"
    }, {
        level: "50",
        name: "Master Musosai"
    }, {
        level: "52",
        name: "The Sands of Debt"
    }, {
        level: "54",
        name: "Blood on the Deck"
    }, {
        level: "56",
        name: "A Fraudster in the Forest"
    }, {
        level: "58",
        name: "Tears in the Snow"
    }, {
        level: "60",
        name: "The Face of True Evil"
    }, {
        level: "60",
        name: "A Dignified Visitor"
    }, {
        level: "63",
        name: "Trials of the Sekiseigumi"
    }, {
        level: "65",
        name: "Matsuba Mayhem"
    }, {
        level: "68",
        name: "The Hunt for Ugetsu"
    }, {
        level: "70",
        name: "The Battle on Bekko"
    }, {
        level: "80",
        name: "The Legend of Musosai"
    }
];
