import { Armorer_Restoration } from "./restoration";
import { Armorer_Other } from "./other";

export const Armorer_IshgardRestoration_Recipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration-recipes`;

    return {
        name: "Ishgard Restoration",
        storageKey,
        groupKeys: [
            "Restoration",
            "Other",
        ],
        // Groups
        Restoration: Armorer_Restoration(storageKey),
        Other: Armorer_Other(storageKey),
    };
};
