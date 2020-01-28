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
        groupKeys: [
            "LevelBased",
            "MasterRecipes",
            "Story",
            "Housing",
            "IshgardRestoration",
            "Others",
        ],
        // Groupsv
        LevelBased: ArmorerLevelBased(storageKey),
        MasterRecipes: ArmorerMasterRecipe(storageKey),
        Story: ArmorerStoryRecipe(storageKey),
        Housing: ArmorerHousingRecipe(storageKey),
        IshgardRestoration: Armorer_IshgardRestoration_Recipe(storageKey),
        Others: Armorer_Others(storageKey),
    };
};
