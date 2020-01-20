import { AlchemistLevelBased } from "./level-based";
import { AlchemistMasterRecipe } from "./master-recipes";
import { AlchemistStoryRecipe } from "./story";
import { AlchemistHousingRecipe } from "./housing";
import { Alchemist_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Alchemist_Others } from "./others";


export const Alchemist = {
    name: "Alchemist",
    // storageKey: "crafting-log.alchemist.index",
    subGroups: [
      AlchemistLevelBased,
      AlchemistMasterRecipe,
      AlchemistStoryRecipe,
      AlchemistHousingRecipe,
      Alchemist_IshgardRestoration_Recipe,
      Alchemist_Others
    ],
}