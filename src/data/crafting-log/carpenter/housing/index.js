import { Carpenter_Housing_1 } from "./housing-1";
import { Carpenter_Housing_2 } from "./housing-2";

export const CarpenterHousingRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-recipes`;

    return {
        name: "Housing Recipes",
        storageKey,
        subGroups: [
            Carpenter_Housing_1(storageKey),
            Carpenter_Housing_2(storageKey),
        ]
    };
};
