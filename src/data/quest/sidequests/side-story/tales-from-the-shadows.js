import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Side_Story_Tales_from_the_Shadows = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80",
        name: "One Final Journey",
        npc: "F'lhaminn",
        unlock: ""
    }
];
