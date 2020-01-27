import { Weaver_MasterRecipe_1 } from "./mr-1";
import { Weaver_MasterRecipe_2 } from "./mr-2";
import { Weaver_MasterRecipe_3 } from "./mr-3";
import { Weaver_MasterRecipe_4 } from "./mr-4";
import { Weaver_MasterRecipe_5 } from "./mr-5";
import { Weaver_MasterRecipe_6 } from "./mr-6";
import { Weaver_MasterRecipe_7 } from "./mr-7";
import { Weaver_MasterRecipe_Other } from "./other";

export const WeaverMasterRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-recipes`;

    return {
        name: "Master Recipes",
        storageKey,
        subGroups: [
            Weaver_MasterRecipe_1(storageKey),
            Weaver_MasterRecipe_2(storageKey),
            Weaver_MasterRecipe_3(storageKey),
            Weaver_MasterRecipe_4(storageKey),
            Weaver_MasterRecipe_5(storageKey),
            Weaver_MasterRecipe_6(storageKey),
            Weaver_MasterRecipe_7(storageKey),
            Weaver_MasterRecipe_Other(storageKey),
        ]
    };
};
