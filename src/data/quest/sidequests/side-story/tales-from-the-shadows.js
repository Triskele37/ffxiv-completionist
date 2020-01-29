import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Side_Story_Tales_From_The_Shadows = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.tales-from-the-shadows`;

    return {
        name: "Tales from the Shadows",
    	storageKey,
        columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "80",
        name: "One Final Journey",
        npc: "F'lhaminn",
        unlock: ""
    }
];
