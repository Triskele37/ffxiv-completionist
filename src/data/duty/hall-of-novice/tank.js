import { DataGroup } from "../../DataGroup";

export const Duty_Hall_of_the_Novice_Tank = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "Avoid Area of Effect Attacks",
        role: "Tank"
    }, {
        level: "15",
        name: "Execute a Combo to Increase Enmity",
        role: "Tank"
    }, {
        level: "15",
        name: "Execute a Combo in Battle",
        role: "Tank"
    }, {
        level: "15",
        name: "Accrue Enmity from Multiple Targets",
        role: "Tank"
    }, {
        level: "15",
        name: "Engage Multiple Targets",
        role: "Tank"
    }, {
        level: "15",
        name: "Execute a Ranged Attack to Increase Enmity",
        role: "Tank"
    }, {
        level: "15",
        name: "Engage Enemy Reinforcements",
        role: "Tank"
    }, {
        level: "15",
        name: "Final Exercise",
        role: "Tank"
    }
];
