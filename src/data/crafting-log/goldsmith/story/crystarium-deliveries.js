import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Goldsmith_Story_Crystarium = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.crystarium-deliveries`;

    return {
        name: "Crystarium Deliveries",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
