import { Blacksmith_Restoration } from "./restoration";
import { Blacksmith_Other } from "./other";

export const Blacksmith_IshgardRestoration_Recipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration-recipes`;

    return {
        name: "Ishgard Restoration Recipes",
        storageKey,
        subGroups: [
            Blacksmith_Restoration(storageKey),
            Blacksmith_Other(storageKey),
        ]
    };
};
