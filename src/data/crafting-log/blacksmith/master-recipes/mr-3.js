import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Blacksmith_MasterRecipe_3 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-3`;

    return {
        name: "Master Recipe III",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
