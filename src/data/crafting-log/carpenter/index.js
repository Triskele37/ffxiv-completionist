import { CarpenterLevelBased } from "./level-based";
import { CarpenterMasterRecipe } from "./master-recipes";
import { CarpenterStoryRecipe } from "./story";
import { CarpenterHousingRecipe } from "./housing";
import { Carpenter_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Carpenter_Others } from "./others";


export const Carpenter = {
    name: "Carpenter",
    // storageKey: "crafting-log.carpenter.index",
    subGroups: [
      CarpenterLevelBased,
      CarpenterMasterRecipe,
      CarpenterStoryRecipe,
      CarpenterHousingRecipe,
      Carpenter_IshgardRestoration_Recipe,
      Carpenter_Others
    ],
}