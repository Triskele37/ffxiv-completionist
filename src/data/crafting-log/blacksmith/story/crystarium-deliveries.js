import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Blacksmith_Story_Crystarium = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.crystarium-deliveries`;

    return {
        name: "Crystarium Deliveries",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: []
    };
};
