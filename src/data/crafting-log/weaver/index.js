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
        subGroups: [
            WeaverLevelBased(storageKey),
            WeaverMasterRecipe(storageKey),
            WeaverStoryRecipe(storageKey),
            WeaverHousingRecipe(storageKey),
            Weaver_IshgardRestoration_Recipe(storageKey),
            Weaver_Others(storageKey),
        ],
    };
};
