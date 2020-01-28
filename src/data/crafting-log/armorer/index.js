import { ArmorerLevelBased } from "./level-based";
import { ArmorerMasterRecipe } from "./master-recipes";
import { ArmorerStoryRecipe } from "./story";
import { ArmorerHousingRecipe } from "./housing";
import { Armorer_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Armorer_Others } from "./others";

export const ArmorerCraftingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.armorer`;

    return {
        name: "Armorer",
        storageKey,
        subGroups: [
            ArmorerLevelBased(storageKey),
            ArmorerMasterRecipe(storageKey),
            ArmorerStoryRecipe(storageKey),
            ArmorerHousingRecipe(storageKey),
            Armorer_IshgardRestoration_Recipe(storageKey),
            Armorer_Others(storageKey),
        ],
    };
};
