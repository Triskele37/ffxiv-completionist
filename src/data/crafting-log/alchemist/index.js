import { AlchemistLevelBased } from "./level-based";
import { AlchemistMasterRecipe } from "./master-recipes";
import { AlchemistStoryRecipe } from "./story";
import { AlchemistHousingRecipe } from "./housing";
import { Alchemist_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Alchemist_Others } from "./others";

export const AlchemistCraftingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.alchemist`;

    return {
        name: "Alchemist",
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
        LevelBased: AlchemistLevelBased(storageKey),
        MasterRecipes: AlchemistMasterRecipe(storageKey),
        Story: AlchemistStoryRecipe(storageKey),
        Housing: AlchemistHousingRecipe(storageKey),
        IshgardRestoration: Alchemist_IshgardRestoration_Recipe(storageKey),
        Others: Alchemist_Others(storageKey),
    };
};
