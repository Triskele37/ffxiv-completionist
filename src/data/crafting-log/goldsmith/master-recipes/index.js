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
        MasterRecipe_1: Goldsmith_MasterRecipe_1(storageKey),
        MasterRecipe_2: Goldsmith_MasterRecipe_2(storageKey),
        MasterRecipe_3: Goldsmith_MasterRecipe_3(storageKey),
        MasterRecipe_4: Goldsmith_MasterRecipe_4(storageKey),
        MasterRecipe_5: Goldsmith_MasterRecipe_5(storageKey),
        MasterRecipe_6: Goldsmith_MasterRecipe_6(storageKey),
        MasterRecipe_7: Goldsmith_MasterRecipe_7(storageKey),
        MasterRecipe_Other: Goldsmith_MasterRecipe_Other(storageKey),
    };
};
