import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Side_Story_Ishgardian_Restoration_Main = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60",
        name: "Towards the Firmament",
        npc: "Recruitment Notice",
        unlock: "The Firmament"
    }
];
