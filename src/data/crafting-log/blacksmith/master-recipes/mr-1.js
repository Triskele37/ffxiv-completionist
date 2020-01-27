import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Blacksmith_MasterRecipe_1 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-1`;

    return {
        name: "Master Recipe I",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
