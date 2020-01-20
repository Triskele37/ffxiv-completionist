import { GoldsmithLevelBased } from "./level-based";
import { GoldsmithMasterRecipe } from "./master-recipes";
import { GoldsmithStoryRecipe } from "./story";
import { GoldsmithHousingRecipe } from "./housing";
import { Goldsmith_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Goldsmith_Others } from "./others";


export const Goldsmith = {
    name: "Goldsmith",
    // storageKey: "crafting-log.goldsmith.index",
    subGroups: [
      GoldsmithLevelBased,
      GoldsmithMasterRecipe,
      GoldsmithStoryRecipe,
      GoldsmithHousingRecipe,
      Goldsmith_IshgardRestoration_Recipe,
      Goldsmith_Others
    ],
}