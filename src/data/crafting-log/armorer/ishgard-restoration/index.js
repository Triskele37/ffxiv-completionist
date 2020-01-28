import { Armorer_Restoration } from "./restoration";
import { Armorer_Other } from "./other";

export const Armorer_IshgardRestoration_Recipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration-recipes`;

    return {
        name: "Ishgard Restoration Recipes",
        storageKey,
        subGroups: [
            Armorer_Restoration(storageKey),
            Armorer_Other(storageKey),
        ]
    };
};
