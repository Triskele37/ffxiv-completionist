import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Disciple_of_War_Rogue = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "My First Daggers"
    }, {
        level: "1",
        name: "Stabbers in Yer Fambles"
    }, {
        level: "5",
        name: "A Dainty Dilemma"
    }, {
        level: "10",
        name: "Stray into the Shadows"
    }, {
        level: "15",
        name: "Stifled Screams"
    }, {
        level: "15",
        name: "Slave to the Code"
    }, {
        level: "20",
        name: "Grinners in the Mist"
    }, {
        level: "25",
        name: "Sweet Sorrows"
    }, {
        level: "30",
        name: "Market for Death"
    }, {
        level: "30",
        name: "Cloying Victory"
    }
];
