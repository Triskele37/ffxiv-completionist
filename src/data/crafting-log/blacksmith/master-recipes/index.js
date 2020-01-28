import { Blacksmith_MasterRecipe_1 } from "./mr-1";
import { Blacksmith_MasterRecipe_2 } from "./mr-2";
import { Blacksmith_MasterRecipe_3 } from "./mr-3";
import { Blacksmith_MasterRecipe_4 } from "./mr-4";
import { Blacksmith_MasterRecipe_5 } from "./mr-5";
import { Blacksmith_MasterRecipe_6 } from "./mr-6";
import { Blacksmith_MasterRecipe_7 } from "./mr-7";
import { Blacksmith_MasterRecipe_Other } from "./other";

export const BlacksmithMasterRecipe = function(parentStorageKey) {
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
        MasterRecipe_1: Blacksmith_MasterRecipe_1(storageKey),
        MasterRecipe_2: Blacksmith_MasterRecipe_2(storageKey),
        MasterRecipe_3: Blacksmith_MasterRecipe_3(storageKey),
        MasterRecipe_4: Blacksmith_MasterRecipe_4(storageKey),
        MasterRecipe_5: Blacksmith_MasterRecipe_5(storageKey),
        MasterRecipe_6: Blacksmith_MasterRecipe_6(storageKey),
        MasterRecipe_7: Blacksmith_MasterRecipe_7(storageKey),
        MasterRecipe_Other: Blacksmith_MasterRecipe_Other(storageKey),
    };
};
