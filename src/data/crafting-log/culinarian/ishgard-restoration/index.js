import { Culinarian_Restoration } from "./restoration";

export const Culinarian_IshgardRestoration_Recipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration-recipes`;

    return {
        name: "Ishgard Restoration Recipes",
        storageKey,
        subGroups: [
            Culinarian_Restoration(storageKey),
        ]
    };
};
