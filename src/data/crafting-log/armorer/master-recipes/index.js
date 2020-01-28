import { Armorer_MasterRecipe_1 } from "./mr-1";
import { Armorer_MasterRecipe_2 } from "./mr-2";
import { Armorer_MasterRecipe_3 } from "./mr-3";
import { Armorer_MasterRecipe_4 } from "./mr-4";
import { Armorer_MasterRecipe_5 } from "./mr-5";
import { Armorer_MasterRecipe_6 } from "./mr-6";
import { Armorer_MasterRecipe_7 } from "./mr-7";
import { Armorer_MasterRecipe_Other } from "./other";

export const ArmorerMasterRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-recipes`;

    return {
        name: "Master Recipes",
        storageKey,
        subGroups: [
            Armorer_MasterRecipe_1(storageKey),
            Armorer_MasterRecipe_2(storageKey),
            Armorer_MasterRecipe_3(storageKey),
            Armorer_MasterRecipe_4(storageKey),
            Armorer_MasterRecipe_5(storageKey),
            Armorer_MasterRecipe_6(storageKey),
            Armorer_MasterRecipe_7(storageKey),
            Armorer_MasterRecipe_Other(storageKey),
        ]
    };
};
