import { Goldsmith_MasterRecipe_1 } from "./mr-1";
import { Goldsmith_MasterRecipe_2 } from "./mr-2";
import { Goldsmith_MasterRecipe_3 } from "./mr-3";
import { Goldsmith_MasterRecipe_4 } from "./mr-4";
import { Goldsmith_MasterRecipe_5 } from "./mr-5";
import { Goldsmith_MasterRecipe_6 } from "./mr-6";
import { Goldsmith_MasterRecipe_7 } from "./mr-7";
import { Goldsmith_MasterRecipe_Other } from "./other";

export const GoldsmithMasterRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-recipes`;

    return {
        name: "Master Recipes",
        storageKey,
        subGroups: [
            Goldsmith_MasterRecipe_1(storageKey),
            Goldsmith_MasterRecipe_2(storageKey),
            Goldsmith_MasterRecipe_3(storageKey),
            Goldsmith_MasterRecipe_4(storageKey),
            Goldsmith_MasterRecipe_5(storageKey),
            Goldsmith_MasterRecipe_6(storageKey),
            Goldsmith_MasterRecipe_7(storageKey),
            Goldsmith_MasterRecipe_Other(storageKey),
        ]
    };
};
