import { Leatherworker_Housing_1 } from "./housing-1";
import { Leatherworker_Housing_2 } from "./housing-2";

export const LeatherworkerHousingRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-recipes`;

    return {
        name: "Housing Recipes",
        storageKey,
        subGroups: [
            Leatherworker_Housing_1(storageKey),
            Leatherworker_Housing_2(storageKey),
        ]
    };
};
