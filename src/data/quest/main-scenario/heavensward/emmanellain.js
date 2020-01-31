import { DataGroup } from "../../../DataGroup";

export const Quests_Main_Scenario_Heavensward_Emmanellain = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "50",
        name: "Onwards and Upwards",
        npc: "Emmanellain",
        unlock: "The Sea of Clouds"
    }, {
        level: "50",
        name: "An Indispensable Ally",
        npc: "Laniaitte de Haillenarte",
        unlock: ""
    }, {
        level: "50",
        name: "Meeting the Neighbors",
        npc: "Laniaitte de Haillenarte",
        unlock: ""
    }, {
        level: "50",
        name: "Sense of Urgency",
        npc: "Marielle",
        unlock: ""
    }, {
        level: "50",
        name: "Hope Springs Eternal",
        npc: "Marielle",
        unlock: ""
    }, {
        level: "50",
        name: "A Series of Unfortunate Events",
        npc: "Honoroit",
        unlock: ""
    }, {
        level: "50",
        name: "A Reward Long in Coming",
        npc: "Emmanellain",
        unlock: ""
    }
];
