import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Goldsmith_Housing_2 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-2`;

    return {
        name: "Housing 2",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
