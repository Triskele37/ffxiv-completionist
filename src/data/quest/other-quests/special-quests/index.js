import { SimpleQuestColumnConfig } from "../../columnConfigs";
import { CollaborationQuests } from "./collaboration-quests";

export const SpecialQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.special`;

    return {
        name: "Special",
        storageKey,
        subGroups: [
            CollaborationQuests(storageKey),
        ],
        columns: SimpleQuestColumnConfig,
        tasks: [{
            level: "1",
            name: "The Ties That Bind"
        }]
    };
};
