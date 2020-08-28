import { DataGroup } from "../../DataGroup";

import { Crafting_Log_Carpenter_Level_Based } from "./level-based";
import { Crafting_Log_Carpenter_Master_Recipes } from "./master-recipes";
import { Crafting_Log_Carpenter_Housing } from "./housing";
import { Crafting_Log_Carpenter_Story } from "./story";
import { Crafting_Log_Carpenter_Ishgard_Restoration } from "./ishgard-restoration";
import { Crafting_Log_Carpenter_Collectables } from "./collectables";

export const Crafting_Log_Carpenter = function(parent) {
    return new DataGroup("Carpenter", parent).initializeSubGroups([
        Crafting_Log_Carpenter_Level_Based,
        Crafting_Log_Carpenter_Master_Recipes,
        Crafting_Log_Carpenter_Housing,
        Crafting_Log_Carpenter_Story,
        Crafting_Log_Carpenter_Ishgard_Restoration,
        Crafting_Log_Carpenter_Collectables,
    ]);
};
