import { Armorer_Housing_1 } from "./housing-1";
import { Armorer_Housing_2 } from "./housing-2";

export const ArmorerHousingRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-recipes`;

    return {
        name: "Housing Recipes",
        storageKey,
        subGroups: [
            Armorer_Housing_1(storageKey),
            Armorer_Housing_2(storageKey),
        ]
    };
};
