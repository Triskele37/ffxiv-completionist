import { Goldsmith_Housing_1 } from "./housing-1";
import { Goldsmith_Housing_2 } from "./housing-2";

export const GoldsmithHousingRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-recipes`;

    return {
        name: "Housing Recipes",
        storageKey,
        subGroups: [
            Goldsmith_Housing_1(storageKey),
            Goldsmith_Housing_2(storageKey),
        ]
    };
};
