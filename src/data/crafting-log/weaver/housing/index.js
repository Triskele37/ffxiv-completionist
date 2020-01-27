import { Weaver_Housing_1 } from "./housing-1";
import { Weaver_Housing_2 } from "./housing-2";

export const WeaverHousingRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-recipes`;

    return {
        name: "Housing Recipes",
        storageKey,
        subGroups: [
            Weaver_Housing_1(storageKey),
            Weaver_Housing_2(storageKey),
        ]
    };
};
