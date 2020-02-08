import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Disciple_of_War_Archer = function(parent) {
    return new DataGroup("Archer", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Way of the Archer"
    }, {
        level: "1",
        name: "My First Bow"
    }, {
        level: "5",
        name: "A Matter of Perspective"
    }, {
        level: "10",
        name: "Training with Leih"
    }, {
        level: "15",
        name: "Violators Will Be Shot"
    }, {
        level: "20",
        name: "To Catch a Poacher"
    }, {
        level: "25",
        name: "Homecoming"
    }, {
        level: "30",
        name: "The One that Got Away"
    }
];
