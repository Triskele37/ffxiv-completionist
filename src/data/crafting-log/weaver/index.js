import { DataGroup } from "../../DataGroup";

import { Crafting_Log_Weaver_Level_Based } from "./level-based";
import { Crafting_Log_Weaver_Master_Recipes } from "./master-recipes";
import { Crafting_Log_Weaver_Housing } from "./housing";
import { Crafting_Log_Weaver_Others } from "./others";
import { Crafting_Log_Weaver_Story } from "./story";
import { Crafting_Log_Weaver_Ishgard_Restoration } from "./ishgard-restoration";

export const Crafting_Log_Weaver = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Log_Weaver_Level_Based,
        Crafting_Log_Weaver_Master_Recipes,
        Crafting_Log_Weaver_Housing,
        Crafting_Log_Weaver_Others,
        Crafting_Log_Weaver_Story,
        Crafting_Log_Weaver_Ishgard_Restoration,
    ]);
};
