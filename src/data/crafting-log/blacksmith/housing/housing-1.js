import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Blacksmith_Housing_1 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-1`;

    return {
        name: "Housing 1",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
