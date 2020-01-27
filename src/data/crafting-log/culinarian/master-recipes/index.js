import { Culinarian_MasterRecipe_1 } from "./mr-1";
import { Culinarian_MasterRecipe_2 } from "./mr-2";
import { Culinarian_MasterRecipe_3 } from "./mr-3";
import { Culinarian_MasterRecipe_4 } from "./mr-4";
import { Culinarian_MasterRecipe_5 } from "./mr-5";
import { Culinarian_MasterRecipe_6 } from "./mr-6";
import { Culinarian_MasterRecipe_7 } from "./mr-7";

export const CulinarianMasterRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-recipes`;

    return {
        name: 'Master Recipes',
        storageKey,
        subGroups: [
            Culinarian_MasterRecipe_1(storageKey),
            Culinarian_MasterRecipe_2(storageKey),
            Culinarian_MasterRecipe_3(storageKey),
            Culinarian_MasterRecipe_4(storageKey),
            Culinarian_MasterRecipe_5(storageKey),
            Culinarian_MasterRecipe_6(storageKey),
            Culinarian_MasterRecipe_7(storageKey),
        ]
    };
};
