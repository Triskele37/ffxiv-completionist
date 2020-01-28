import { Carpenter_Restoration } from "./restoration";
import { Carpenter_Other } from "./other";

export const Carpenter_IshgardRestoration_Recipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration-recipes`;

    return {
        name: "Ishgard Restoration",
        storageKey,
        groupKeys: [
            "Restoration",
            "Other",
        ],
        // Groups
        Restoration: Carpenter_Restoration(storageKey),
        Other: Carpenter_Other(storageKey),
    };
};
