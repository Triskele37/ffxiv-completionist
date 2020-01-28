import { Leatherworker_MasterRecipe_1 } from "./mr-1";
import { Leatherworker_MasterRecipe_2 } from "./mr-2";
import { Leatherworker_MasterRecipe_3 } from "./mr-3";
import { Leatherworker_MasterRecipe_4 } from "./mr-4";
import { Leatherworker_MasterRecipe_5 } from "./mr-5";
import { Leatherworker_MasterRecipe_6 } from "./mr-6";
import { Leatherworker_MasterRecipe_7 } from "./mr-7";
import { Leatherworker_MasterRecipe_Other } from "./other";

export const LeatherworkerMasterRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-recipes`;

    return {
        name: "Master Recipes",
        storageKey,
        subGroups: [
            Leatherworker_MasterRecipe_1(storageKey),
            Leatherworker_MasterRecipe_2(storageKey),
            Leatherworker_MasterRecipe_3(storageKey),
            Leatherworker_MasterRecipe_4(storageKey),
            Leatherworker_MasterRecipe_5(storageKey),
            Leatherworker_MasterRecipe_6(storageKey),
            Leatherworker_MasterRecipe_7(storageKey),
            Leatherworker_MasterRecipe_Other(storageKey),
        ]
    };
};
