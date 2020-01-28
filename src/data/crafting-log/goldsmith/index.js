import { GoldsmithLevelBased } from "./level-based";
import { GoldsmithMasterRecipe } from "./master-recipes";
import { GoldsmithStoryRecipe } from "./story";
import { GoldsmithHousingRecipe } from "./housing";
import { Goldsmith_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Goldsmith_Others } from "./others";

export const GoldsmithCraftingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.goldsmith`;

    return {
        name: "Goldsmith",
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
        LevelBased: GoldsmithLevelBased(storageKey),
        MasterRecipes: GoldsmithMasterRecipe(storageKey),
        Story: GoldsmithStoryRecipe(storageKey),
        Housing: GoldsmithHousingRecipe(storageKey),
        IshgardRestoration: Goldsmith_IshgardRestoration_Recipe(storageKey),
        Others: Goldsmith_Others(storageKey),
    };
};
