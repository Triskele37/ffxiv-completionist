import { Carpenter_Housing_1 } from "./housing-1";
import { Carpenter_Housing_2 } from "./housing-2";

export const CarpenterHousingRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-recipes`;

    return {
        name: "Housing Recipes",
        storageKey,
        groupKeys: [
            "Housing_1",
            "Housing_2",
        ],
        // Groups
        Housing_1: Carpenter_Housing_1(storageKey),
        Housing_2: Carpenter_Housing_2(storageKey),
    };
};
