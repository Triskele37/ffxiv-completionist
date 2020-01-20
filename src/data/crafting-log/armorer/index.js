import { ArmorerLevelBased } from "./level-based";
import { ArmorerMasterRecipe } from "./master-recipes";
import { ArmorerStoryRecipe } from "./story";
import { ArmorerHousingRecipe } from "./housing";
import { Armorer_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Armorer_Others } from "./others";


export const Armorer = {
    name: "Armorer",
    // storageKey: "crafting-log.armorer.index",
    subGroups: [
      ArmorerLevelBased,
      ArmorerMasterRecipe,
      ArmorerStoryRecipe,
      ArmorerHousingRecipe,
      Armorer_IshgardRestoration_Recipe,
      Armorer_Others
    ],
}