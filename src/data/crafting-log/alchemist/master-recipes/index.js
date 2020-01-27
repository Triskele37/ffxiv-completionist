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
        subGroups: [
            Alchemist_MasterRecipe_1(storageKey),
            Alchemist_MasterRecipe_2(storageKey),
            Alchemist_MasterRecipe_3(storageKey),
            Alchemist_MasterRecipe_4(storageKey),
            Alchemist_MasterRecipe_5(storageKey),
            Alchemist_MasterRecipe_6(storageKey),
            Alchemist_MasterRecipe_7(storageKey),
            Alchemist_MasterRecipe_Other(storageKey),
        ]
    };
};
