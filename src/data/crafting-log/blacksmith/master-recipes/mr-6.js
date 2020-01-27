import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Blacksmith_MasterRecipe_6 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-6`;

    return {
        name: "Master Recipe VI",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
