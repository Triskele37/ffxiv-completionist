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
        subGroups: [
            CulinarianLevelBased(storageKey),
            CulinarianMasterRecipe(storageKey),
            CulinarianStoryRecipe(storageKey),
            CulinarianHousingRecipe(storageKey),
            Culinarian_IshgardRestoration_Recipe(storageKey),
        ],
    };
};
