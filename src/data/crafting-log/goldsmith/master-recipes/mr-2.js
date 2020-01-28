import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Goldsmith_MasterRecipe_2 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-2`;

    return {
        name: "Master Recipe II",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
