import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Disciple_of_War_Job_Gunbreaker = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
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
