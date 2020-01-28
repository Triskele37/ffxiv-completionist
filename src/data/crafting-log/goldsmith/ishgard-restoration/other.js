import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Goldsmith_Other = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.other`;

    return {
        name: "Other",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
