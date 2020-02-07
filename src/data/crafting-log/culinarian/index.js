import { DataGroup } from "../../DataGroup";

import { Crafting_Log_Culinarian_Level_Based } from "./level-based";
import { Crafting_Log_Culinarian_Master_Recipes } from "./master-recipes";
import { Crafting_Log_Culinarian_Housing } from "./housing";
import { Crafting_Log_Culinarian_Others } from "./others";
import { Crafting_Log_Culinarian_Story } from "./story";
import { Crafting_Log_Culinarian_Ishgard_Restoration } from "./ishgard-restoration";

export const Crafting_Log_Culinarian = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Log_Culinarian_Level_Based,
        Crafting_Log_Culinarian_Master_Recipes,
        Crafting_Log_Culinarian_Housing,
        Crafting_Log_Culinarian_Others,
        Crafting_Log_Culinarian_Story,
        Crafting_Log_Culinarian_Ishgard_Restoration,
    ]);
};
