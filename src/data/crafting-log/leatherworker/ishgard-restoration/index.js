import { Leatherworker_Restoration } from "./restoration";
import { Leatherworker_Other } from "./other";

export const Leatherworker_IshgardRestoration_Recipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration-recipes`;

    return {
        name: "Ishgard Restoration Recipes",
        storageKey,
        subGroups: [
            Leatherworker_Restoration(storageKey),
            Leatherworker_Other(storageKey),
        ]
    };
};
