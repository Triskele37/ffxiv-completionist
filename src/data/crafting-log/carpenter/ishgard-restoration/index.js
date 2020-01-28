import { Carpenter_Restoration } from "./restoration";
import { Carpenter_Other } from "./other";

export const Carpenter_IshgardRestoration_Recipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration-recipes`;

    return {
        name: "Ishgard Restoration Recipes",
        storageKey,
        subGroups: [
            Carpenter_Restoration(storageKey),
            Carpenter_Other(storageKey),
        ]
    };
};
