import { Weaver_Restoration } from "./restoration";
import { Weaver_Other } from "./other";

export const Weaver_IshgardRestoration_Recipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration-recipes`;

    return {
        name: "Ishgard Restoration",
        storageKey,
        groupKeys: [
            "Restoration",
            "Other",
        ],
        // Groups
        Restoration: Weaver_Restoration(storageKey),
        Other: Weaver_Other(storageKey),
    };
};
