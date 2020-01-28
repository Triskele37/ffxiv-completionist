import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Goldsmith_MasterRecipe_Other = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-other`;

    return {
        name: "Other Master Recipes",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
