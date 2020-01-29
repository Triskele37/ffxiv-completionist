import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Side_Story_Ishgardian_Restoration_Main = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgardian-restoration-main`;

    return {
        name: "Ishgardian Restoration Main",
    	storageKey,
        columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "60",
        name: "Towards the Firmament",
        npc: "Recruitment Notice",
        unlock: "The Firmament"
    }
];
