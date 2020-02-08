import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Ul_Dahn_The_Waking_Sands = function(parent) {
    return new DataGroup("The Waking Sands", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "46",
        name: "Primal Fear",
        npc: "Urianger",
        unlock: ""
    }, {
        level: "47",
        name: "A Kobold Initiative",
        npc: "Slafswys",
        unlock: ""
    }, {
        level: "47",
        name: "Can't Do It without U",
        npc: "Arenvald",
        unlock: ""
    }, {
        level: "48",
        name: "Into the Valley of the Skull",
        npc: "Radolf",
        unlock: ""
    }
];
