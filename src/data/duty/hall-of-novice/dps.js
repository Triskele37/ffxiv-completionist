import { DataGroup } from "../../DataGroup";

export const Duty_Hall_of_the_Novice_DPS = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "Avoid Area of Effect Attacks",
        role: "DPS"
    }, {
        level: "15",
        name: "Assist Allies in Defeating a Target",
        role: "DPS"
    }, {
        level: "15",
        name: "Defeat an Occupied Target",
        role: "DPS"
    }, {
        level: "15",
        name: "Avoid Engaged Targets",
        role: "DPS"
    }, {
        level: "15",
        name: "Engage Enemy Reinforcements",
        role: "DPS"
    }, {
        level: "15",
        name: "Interact with the Battlefield",
        role: "DPS"
    }, {
        level: "15",
        name: "Final Exercise",
        role: "DPS"
    }
];
