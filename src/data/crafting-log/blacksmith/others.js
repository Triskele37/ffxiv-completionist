import { CraftingLogColumnConfig } from "../columnConfigs";

export const Blacksmith_Others = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.other-recipes`;

    return {
        name: "Other",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
