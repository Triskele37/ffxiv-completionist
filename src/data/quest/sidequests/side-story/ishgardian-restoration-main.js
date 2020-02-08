import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Side_Story_Ishgardian_Restoration_Main = function(parent) {
    return new DataGroup("Ishgardian Restoration Main", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60",
        name: "Towards the Firmament",
        npc: "Recruitment Notice",
        unlock: "The Firmament"
    }
];
