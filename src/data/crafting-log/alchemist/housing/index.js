import { Alchemist_Housing_1 } from "./housing-1";
import { Alchemist_Housing_2 } from "./housing-2";

export const AlchemistHousingRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-recipes`;

    return {
        name: "Housing Recipes",
        storageKey,
        groupKeys: [
            "Housing_1",
            "Housing_2",
        ],
        // Groups
        Housing_1: Alchemist_Housing_1(storageKey),
        Housing_2: Alchemist_Housing_2(storageKey),
    };
};
