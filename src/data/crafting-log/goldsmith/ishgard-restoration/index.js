import { Goldsmith_Restoration } from "./restoration";
import { Goldsmith_Other } from "./other";

export const Goldsmith_IshgardRestoration_Recipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration-recipes`;

    return {
        name: "Ishgard Restoration",
        storageKey,
        groupKeys: [
            "Restoration",
            "Other",
        ],
        // Groups
        Restoration: Goldsmith_Restoration(storageKey),
        Other: Goldsmith_Other(storageKey),
    };
};
