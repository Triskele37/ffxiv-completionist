import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Disciple_of_War_Job_Samurai = function(parent) {
    return new DataGroup("Samurai", parent).initializeTasks(tasks);
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
