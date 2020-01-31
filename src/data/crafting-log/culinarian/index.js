import { DataGroup } from "../../DataGroup";

import { Crafting_Logs_Culinarian_Level_Based } from "./level-based";
import { Crafting_Logs_Culinarian_Master_Recipes } from "./master-recipes";
import { Crafting_Logs_Culinarian_Story } from "./story";
import { Crafting_Logs_Culinarian_Housing } from "./housing";
import { Crafting_Logs_Culinarian_Ishgard_Restoration } from "./ishgard-restoration";
import { Crafting_Logs_Culinarian_Others } from "./others";

export const Crafting_Logs_Culinarian = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Logs_Culinarian_Level_Based,
        Crafting_Logs_Culinarian_Master_Recipes,
        Crafting_Logs_Culinarian_Story,
        Crafting_Logs_Culinarian_Housing,
        Crafting_Logs_Culinarian_Ishgard_Restoration,
        Crafting_Logs_Culinarian_Others,
    ]);
};
