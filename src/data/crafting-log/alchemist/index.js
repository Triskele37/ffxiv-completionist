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
            AlchemistLevelBased(storageKey),
            AlchemistMasterRecipe(storageKey),
            AlchemistStoryRecipe(storageKey),
            AlchemistHousingRecipe(storageKey),
            Alchemist_IshgardRestoration_Recipe(storageKey),
            Alchemist_Others(storageKey),
        ],
    };
};
