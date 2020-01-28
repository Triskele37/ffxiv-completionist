import { Alchemist_MasterRecipe_1 } from "./mr-1";
import { Alchemist_MasterRecipe_2 } from "./mr-2";
import { Alchemist_MasterRecipe_3 } from "./mr-3";
import { Alchemist_MasterRecipe_4 } from "./mr-4";
import { Alchemist_MasterRecipe_5 } from "./mr-5";
import { Alchemist_MasterRecipe_6 } from "./mr-6";
import { Alchemist_MasterRecipe_7 } from "./mr-7";
import { Alchemist_MasterRecipe_Other } from "./other";

export const AlchemistMasterRecipe = function(parentStorageKey) {
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
            "MasterRecipe_Other",
        ],
        // Groups
        MasterRecipe_1: Alchemist_MasterRecipe_1(storageKey),
        MasterRecipe_2: Alchemist_MasterRecipe_2(storageKey),
        MasterRecipe_3: Alchemist_MasterRecipe_3(storageKey),
        MasterRecipe_4: Alchemist_MasterRecipe_4(storageKey),
        MasterRecipe_5: Alchemist_MasterRecipe_5(storageKey),
        MasterRecipe_6: Alchemist_MasterRecipe_6(storageKey),
        MasterRecipe_7: Alchemist_MasterRecipe_7(storageKey),
        MasterRecipe_Other: Alchemist_MasterRecipe_Other(storageKey),
    };
};
