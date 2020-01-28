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
        subGroups: [
            GoldsmithLevelBased(storageKey),
            GoldsmithMasterRecipe(storageKey),
            GoldsmithStoryRecipe(storageKey),
            GoldsmithHousingRecipe(storageKey),
            Goldsmith_IshgardRestoration_Recipe(storageKey),
            Goldsmith_Others(storageKey),
        ],
    };
};
