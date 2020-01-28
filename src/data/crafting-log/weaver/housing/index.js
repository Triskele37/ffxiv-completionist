import { Weaver_Housing_1 } from "./housing-1";
import { Weaver_Housing_2 } from "./housing-2";

export const WeaverHousingRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-recipes`;

    return {
        name: "Housing Recipes",
        storageKey,
        groupKeys: [
            "Housing_1",
            "Housing_2",
        ],
        // Groups
        Housing_1: Weaver_Housing_1(storageKey),
        Housing_2: Weaver_Housing_2(storageKey),
    };
};
