import { BlacksmithLevelBased } from "./level-based";
import { BlacksmithMasterRecipe } from "./master-recipes";
import { BlacksmithStoryRecipe } from "./story";
import { BlacksmithHousingRecipe } from "./housing";
import { Blacksmith_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Blacksmith_Others } from "./others";


export const Blacksmith = {
    name: "Blacksmith",
    // storageKey: "crafting-log.blacksmith.index",
    subGroups: [
      BlacksmithLevelBased,
      BlacksmithMasterRecipe,
      BlacksmithStoryRecipe,
      BlacksmithHousingRecipe,
      Blacksmith_IshgardRestoration_Recipe,
      Blacksmith_Others
    ],
}