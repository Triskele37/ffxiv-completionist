import { BlacksmithLevelBased } from "./level-based";
import { BlacksmithMasterRecipe } from "./master-recipes";
import { BlacksmithStoryRecipe } from "./story";
import { BlacksmithHousingRecipe } from "./housing";
import { Blacksmith_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Blacksmith_Others } from "./others";

export const BlacksmithCraftingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.blacksmith`;

    return {
        name: "Blacksmith",
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
        LevelBased: BlacksmithLevelBased(storageKey),
        MasterRecipes: BlacksmithMasterRecipe(storageKey),
        Story: BlacksmithStoryRecipe(storageKey),
        Housing: BlacksmithHousingRecipe(storageKey),
        IshgardRestoration: Blacksmith_IshgardRestoration_Recipe(storageKey),
        Others: Blacksmith_Others(storageKey),
    };
};
