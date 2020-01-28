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
        name: "Master Recipes",
        storageKey,
        groupKeys: [
            "MasterRecipe_1",
            "MasterRecipe_2",
            "MasterRecipe_3",
            "MasterRecipe_4",
            "MasterRecipe_5",
            "MasterRecipe_6",
            "MasterRecipe_7",
        ],
        // Groups
        MasterRecipe_1: Culinarian_MasterRecipe_1(storageKey),
        MasterRecipe_2: Culinarian_MasterRecipe_2(storageKey),
        MasterRecipe_3: Culinarian_MasterRecipe_3(storageKey),
        MasterRecipe_4: Culinarian_MasterRecipe_4(storageKey),
        MasterRecipe_5: Culinarian_MasterRecipe_5(storageKey),
        MasterRecipe_6: Culinarian_MasterRecipe_6(storageKey),
        MasterRecipe_7: Culinarian_MasterRecipe_7(storageKey),
    };
};
