import { Carpenter_MasterRecipe_1 } from "./mr-1";
import { Carpenter_MasterRecipe_2 } from "./mr-2";
import { Carpenter_MasterRecipe_3 } from "./mr-3";
import { Carpenter_MasterRecipe_4 } from "./mr-4";
import { Carpenter_MasterRecipe_5 } from "./mr-5";
import { Carpenter_MasterRecipe_6 } from "./mr-6";
import { Carpenter_MasterRecipe_7 } from "./mr-7";
import { Carpenter_MasterRecipe_Other } from "./other";

export const CarpenterMasterRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-recipes`;

    return {
        name: "Master Recipes",
        storageKey,
        subGroups: [
            Carpenter_MasterRecipe_1(storageKey),
            Carpenter_MasterRecipe_2(storageKey),
            Carpenter_MasterRecipe_3(storageKey),
            Carpenter_MasterRecipe_4(storageKey),
            Carpenter_MasterRecipe_5(storageKey),
            Carpenter_MasterRecipe_6(storageKey),
            Carpenter_MasterRecipe_7(storageKey),
            Carpenter_MasterRecipe_Other(storageKey),
        ]
    };
};
