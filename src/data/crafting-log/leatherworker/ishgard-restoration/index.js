import { Leatherworker_Restoration } from "./restoration";
import { Leatherworker_Other } from "./other";

export const Leatherworker_IshgardRestoration_Recipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration-recipes`;

    return {
        name: "Ishgard Restoration",
        storageKey,
        groupKeys: [
            "Restoration",
            "Other",
        ],
        // Groups
        Restoration: Leatherworker_Restoration(storageKey),
        Other: Leatherworker_Other(storageKey),
    };
};
