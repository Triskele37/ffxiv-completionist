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
        subGroups: [
            BlacksmithLevelBased(storageKey),
            BlacksmithMasterRecipe(storageKey),
            BlacksmithStoryRecipe(storageKey),
            BlacksmithHousingRecipe(storageKey),
            Blacksmith_IshgardRestoration_Recipe(storageKey),
            Blacksmith_Others(storageKey),
        ],
    };
};
