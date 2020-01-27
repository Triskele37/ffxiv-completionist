import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Goldsmith_MasterRecipe_7 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-7`;

    return {
        name: "Master Recipe VII",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
