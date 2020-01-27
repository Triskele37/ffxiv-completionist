import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Blacksmith_Story_ClassQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.class-quests`;

    return {
        name: "Class Quests",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
