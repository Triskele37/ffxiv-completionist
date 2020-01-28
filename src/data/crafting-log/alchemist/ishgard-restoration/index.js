import { Alchemist_Restoration } from "./restoration";

export const Alchemist_IshgardRestoration_Recipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration-recipes`;

    return {
        name: "Ishgard Restoration",
        storageKey,
        groupKeys: [
            "Restoration",
        ],
        // Groups
        Restoration: Alchemist_Restoration(storageKey),
    };
};
