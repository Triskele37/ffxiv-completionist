import { CulinarianLevelBased } from "./level-based";
import { CulinarianMasterRecipe } from "./master-recipes";
import { CulinarianStoryRecipe } from "./story";
import { CulinarianHousingRecipe } from "./housing";
import { Culinarian_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Culinarian_Others } from "./others";


export const Culinarian = {
    name: "Culinarian",
    // storageKey: "crafting-log.culinarian.index",
    subGroups: [
      CulinarianLevelBased,
      CulinarianMasterRecipe,
      CulinarianStoryRecipe,
      CulinarianHousingRecipe,
      Culinarian_IshgardRestoration_Recipe,
      Culinarian_Others
    ],
}