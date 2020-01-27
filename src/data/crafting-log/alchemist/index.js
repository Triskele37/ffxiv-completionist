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
        subGroups: [
            AlchemistLevelBased,
            AlchemistMasterRecipe,
            AlchemistStoryRecipe,
            AlchemistHousingRecipe,
            Alchemist_IshgardRestoration_Recipe,
            Alchemist_Others
        ],
    };
};
