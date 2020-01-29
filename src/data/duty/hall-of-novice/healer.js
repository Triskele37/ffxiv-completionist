import { DataGroup } from "../../DataGroup";

export const Duty_Hall_of_the_Novice_Healer = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "Avoid Area of Effect Attacks",
        role: "Healer"
    }, {
        level: "15",
        name: "Heal an Ally",
        role: "Healer"
    }, {
        level: "15",
        name: "Heal Multiple Allies",
        role: "Healer"
    }, {
        level: "15",
        name: "Avoid Engaged Targets",
        role: "Healer"
    }, {
        level: "15",
        name: "Final Exercise",
        role: "Healer"
    }
];
