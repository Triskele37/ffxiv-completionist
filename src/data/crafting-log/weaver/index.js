import { WeaverLevelBased } from "./level-based";
import { WeaverMasterRecipe } from "./master-recipes";
import { WeaverStoryRecipe } from "./story";
import { WeaverHousingRecipe } from "./housing";
import { Weaver_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Weaver_Others } from "./others";

export const WeaverCraftingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.weaver`;

    return {
        name: "Weaver",
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
        LevelBased: WeaverLevelBased(storageKey),
        MasterRecipes: WeaverMasterRecipe(storageKey),
        Story: WeaverStoryRecipe(storageKey),
        Housing: WeaverHousingRecipe(storageKey),
        IshgardRestoration: Weaver_IshgardRestoration_Recipe(storageKey),
        Others: Weaver_Others(storageKey),
    };
};
