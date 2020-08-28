import { DataGroup } from "../../DataGroup";

import { Crafting_Log_Alchemist_Level_Based } from "./level-based";
import { Crafting_Log_Alchemist_Master_Recipes } from "./master-recipes";
import { Crafting_Log_Alchemist_Housing } from "./housing";
import { Crafting_Log_Alchemist_Ornaments } from "./ornaments";
import { Crafting_Log_Alchemist_Story } from "./story";
import { Crafting_Log_Alchemist_Ishgard_Restoration } from "./ishgard-restoration";
import { Crafting_Log_Alchemist_Collectables } from "./collectables";

export const Crafting_Log_Alchemist = function(parent) {
    return new DataGroup("Alchemist", parent).initializeSubGroups([
        Crafting_Log_Alchemist_Level_Based,
        Crafting_Log_Alchemist_Master_Recipes,
        Crafting_Log_Alchemist_Housing,
        Crafting_Log_Alchemist_Ornaments,
        Crafting_Log_Alchemist_Story,
        Crafting_Log_Alchemist_Ishgard_Restoration,
        Crafting_Log_Alchemist_Collectables,
    ]);
};
