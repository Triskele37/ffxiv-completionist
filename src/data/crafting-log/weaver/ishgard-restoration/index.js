import { Weaver_Restoration } from "./restoration";
import { Weaver_Other } from "./other";

export const Weaver_IshgardRestoration_Recipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration-recipes`;

    return {
        name: "Ishgard Restoration Recipes",
        storageKey,
        subGroups: [
            Weaver_Restoration(storageKey),
            Weaver_Other(storageKey),
        ]
    };
};
