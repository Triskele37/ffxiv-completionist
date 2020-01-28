import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Blacksmith_MasterRecipe_5 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-5`;

    return {
        name: "Master Recipe V",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
