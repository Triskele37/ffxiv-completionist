import { LeatherworkerLevelBased } from "./level-based";
import { LeatherworkerMasterRecipe } from "./master-recipes";
import { LeatherworkerStoryRecipe } from "./story";
import { LeatherworkerHousingRecipe } from "./housing";
import { Leatherworker_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Leatherworker_Others } from "./others";

export const LeatherworkerCraftingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.leatherworker`;

    return {
        name: "Leatherworker",
        storageKey,
        subGroups: [
            LeatherworkerLevelBased(storageKey),
            LeatherworkerMasterRecipe(storageKey),
            LeatherworkerStoryRecipe(storageKey),
            LeatherworkerHousingRecipe(storageKey),
            Leatherworker_IshgardRestoration_Recipe(storageKey),
            Leatherworker_Others(storageKey),
        ],
    };
};
