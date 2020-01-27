import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Blacksmith_MasterRecipe_4 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-4`;

    return {
        name: "Master Recipe IV",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
