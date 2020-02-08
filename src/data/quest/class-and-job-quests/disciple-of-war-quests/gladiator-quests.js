import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Disciple_of_War_Gladiator = function(parent) {
    return new DataGroup("Gladiator", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Way of the Gladiator"
    }, {
        level: "1",
        name: "My First Gladius"
    }, {
        level: "5",
        name: "Kicking the Hornet's Nest"
    }, {
        level: "10",
        name: "Ul'dah's Most Wanted"
    }, {
        level: "15",
        name: "That Old Familiar Feeling"
    }, {
        level: "20",
        name: "The Face of Thal"
    }, {
        level: "25",
        name: "On Holy Ground"
    }, {
        level: "30",
        name: "The Rematch"
    }
];
