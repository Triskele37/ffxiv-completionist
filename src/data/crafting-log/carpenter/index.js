import { CarpenterLevelBased } from "./level-based";
import { CarpenterMasterRecipe } from "./master-recipes";
import { CarpenterStoryRecipe } from "./story";
import { CarpenterHousingRecipe } from "./housing";
import { Carpenter_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Carpenter_Others } from "./others";

export const CarpenterCraftingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.carpenter`;

    return {
        name: "Carpenter",
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
        LevelBased: CarpenterLevelBased(storageKey),
        MasterRecipes: CarpenterMasterRecipe(storageKey),
        Story: CarpenterStoryRecipe(storageKey),
        Housing: CarpenterHousingRecipe(storageKey),
        IshgardRestoration: Carpenter_IshgardRestoration_Recipe(storageKey),
        Others: Carpenter_Others(storageKey),
    };
};
