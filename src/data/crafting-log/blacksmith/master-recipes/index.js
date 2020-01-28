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
        subGroups: [
            Blacksmith_MasterRecipe_1(storageKey),
            Blacksmith_MasterRecipe_2(storageKey),
            Blacksmith_MasterRecipe_3(storageKey),
            Blacksmith_MasterRecipe_4(storageKey),
            Blacksmith_MasterRecipe_5(storageKey),
            Blacksmith_MasterRecipe_6(storageKey),
            Blacksmith_MasterRecipe_7(storageKey),
            Blacksmith_MasterRecipe_Other(storageKey),
        ]
    };
};
