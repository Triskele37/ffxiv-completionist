import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Disciple_of_War_Lancer = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Way of the Lancer"
    }, {
        level: "1",
        name: "My First Spear"
    }, {
        level: "5",
        name: "Spear of the Fearless"
    }, {
        level: "10",
        name: "Courage of Stone"
    }, {
        level: "15",
        name: "A Dangerous Proposition"
    }, {
        level: "20",
        name: "Lance of Destiny"
    }, {
        level: "25",
        name: "Questions and Lancers"
    }, {
        level: "30",
        name: "Proof of Might"
    }
];
