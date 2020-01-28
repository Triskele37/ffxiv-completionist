import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Blacksmith_Other = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.other`;

    return {
        name: "Other",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
