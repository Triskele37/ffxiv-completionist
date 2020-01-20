import { LeatherworkerLevelBased } from "./level-based";
import { LeatherworkerMasterRecipe } from "./master-recipes";
import { LeatherworkerStoryRecipe } from "./story";
import { LeatherworkerHousingRecipe } from "./housing";
import { Leatherworker_IshgardRestoration_Recipe } from "./ishgard-restoration";
import { Leatherworker_Others } from "./others";


export const Leatherworker = {
    name: "Leatherworker",
    // storageKey: "crafting-log.leatherworker.index",
    subGroups: [
      LeatherworkerLevelBased,
      LeatherworkerMasterRecipe,
      LeatherworkerStoryRecipe,
      LeatherworkerHousingRecipe,
      Leatherworker_IshgardRestoration_Recipe,
      Leatherworker_Others
    ],
}