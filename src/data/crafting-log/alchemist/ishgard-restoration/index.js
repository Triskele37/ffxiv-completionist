import { Alchemist_Restoration } from "./restoration";

export const Alchemist_IshgardRestoration_Recipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration-recipes`;

    return {
        name: "Ishgard Restoration Recipes",
        storageKey,
        subGroups: [
            Alchemist_Restoration(storageKey),
        ]
    };
};
