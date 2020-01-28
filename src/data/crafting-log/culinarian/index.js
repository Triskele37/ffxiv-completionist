import { CulinarianLevelBased } from "./level-based";
import { CulinarianMasterRecipe } from "./master-recipes";
import { CulinarianStoryRecipe } from "./story";
import { CulinarianHousingRecipe } from "./housing";
import { Culinarian_IshgardRestoration_Recipe } from "./ishgard-restoration";

export const CulinarianCraftingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.culinarian`;

    return {
        name: "Culinarian",
        storageKey,
        groupKeys: [
            "LevelBased",
            "MasterRecipes",
            "Story",
            "Housing",
            "IshgardRestoration",
        ],
        // Groups
        LevelBased: CulinarianLevelBased(storageKey),
        MasterRecipes: CulinarianMasterRecipe(storageKey),
        Story: CulinarianStoryRecipe(storageKey),
        Housing: CulinarianHousingRecipe(storageKey),
        IshgardRestoration: Culinarian_IshgardRestoration_Recipe(storageKey),
    };
};
