import { Blacksmith_Housing_1 } from "./housing-1";
import { Blacksmith_Housing_2 } from "./housing-2";

export const BlacksmithHousingRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-recipes`;

    return {
        name: "Housing Recipes",
        storageKey,
        subGroups: [
            Blacksmith_Housing_1(storageKey),
            Blacksmith_Housing_2(storageKey),
        ]
    };
};
