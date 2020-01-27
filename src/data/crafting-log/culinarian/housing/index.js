import { Culinarian_Housing_1 } from "./housing-1";
import { Culinarian_Housing_2 } from "./housing-2";

export const CulinarianHousingRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-recipes`;

    return {
        name: "Housing Recipes",
        storageKey,
        subGroups: [
            Culinarian_Housing_1(storageKey),
            Culinarian_Housing_2(storageKey),
        ]
    };
};
