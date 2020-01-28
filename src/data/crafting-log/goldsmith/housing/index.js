import { Goldsmith_Housing_1 } from "./housing-1";
import { Goldsmith_Housing_2 } from "./housing-2";

export const GoldsmithHousingRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-recipes`;

    return {
        name: "Housing Recipes",
        storageKey,
        groupKeys: [
            "Housing_1",
            "Housing_2",
        ],
        // Groups
        Housing_1: Goldsmith_Housing_1(storageKey),
        Housing_2: Goldsmith_Housing_2(storageKey),
    };
};
