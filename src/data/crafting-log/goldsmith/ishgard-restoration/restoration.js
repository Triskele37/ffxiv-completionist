import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Goldsmith_Restoration = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.restoration`;

    return {
        name: "Restoration",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
