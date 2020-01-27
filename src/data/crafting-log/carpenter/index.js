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
        subGroups: [
            CarpenterLevelBased(storageKey),
            CarpenterMasterRecipe(storageKey),
            CarpenterStoryRecipe(storageKey),
            CarpenterHousingRecipe(storageKey),
            Carpenter_IshgardRestoration_Recipe(storageKey),
            Carpenter_Others(storageKey),
        ],
    };
};
