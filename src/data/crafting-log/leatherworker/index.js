import { DataGroup } from "../../DataGroup";

import { Crafting_Log_Leatherworker_Level_Based } from "./level-based";
import { Crafting_Log_Leatherworker_Master_Recipes } from "./master-recipes";
import { Crafting_Log_Leatherworker_Housing } from "./housing";
import { Crafting_Log_Leatherworker_Story } from "./story";
import { Crafting_Log_Leatherworker_Ishgard_Restoration } from "./ishgard-restoration";
import { Crafting_Log_Leatherworker_Collectables } from "./collectables";

export const Crafting_Log_Leatherworker = function(parent) {
    return new DataGroup("Leatherworker", parent).initializeSubGroups([
        Crafting_Log_Leatherworker_Level_Based,
        Crafting_Log_Leatherworker_Master_Recipes,
        Crafting_Log_Leatherworker_Housing,
        Crafting_Log_Leatherworker_Story,
        Crafting_Log_Leatherworker_Ishgard_Restoration,
        Crafting_Log_Leatherworker_Collectables,
    ]);
};
