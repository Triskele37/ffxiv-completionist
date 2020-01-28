import { CraftingLogColumnConfig } from "../columnConfigs";

export const Goldsmith_Others = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.other-recipes`;

    return {
        name: "Other",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
