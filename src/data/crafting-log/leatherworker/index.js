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
        groupKeys: [
            "LevelBased",
            "MasterRecipes",
            "Story",
            "Housing",
            "IshgardRestoration",
            "Others",
        ],
        // Groups
        LevelBased: LeatherworkerLevelBased(storageKey),
        MasterRecipes: LeatherworkerMasterRecipe(storageKey),
        Story: LeatherworkerStoryRecipe(storageKey),
        Housing: LeatherworkerHousingRecipe(storageKey),
        IshgardRestoration: Leatherworker_IshgardRestoration_Recipe(storageKey),
        Others: Leatherworker_Others(storageKey),
    };
};
