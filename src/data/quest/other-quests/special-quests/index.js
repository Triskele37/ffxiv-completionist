import { SimpleQuestColumnConfig } from "../../columnConfigs";

import { Quest_Other_Special_Collaboration } from "./collaboration-quests";

export const Quest_Other_Special = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.special`;

    return {
        name: "Special",
        storageKey,
        groupKeys: [
            "Collaboration",
        ],
        // Groups
        Collaboration: Quest_Other_Special_Collaboration(storageKey),
        // Tasks
        columns: SimpleQuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "1",
        name: "The Ties That Bind"
    }
];
