import { DataGroup } from "../../DataGroup";

import { Crafting_Log_Weaver_Level_Based } from "./level-based";
import { Crafting_Log_Weaver_Master_Recipes } from "./master-recipes";
import { Crafting_Log_Weaver_Housing } from "./housing";
import { Crafting_Log_Weaver_Story } from "./story";
import { Crafting_Log_Weaver_Ishgard_Restoration } from "./ishgard-restoration";
import { Crafting_Log_Weaver_Collectables } from "./collectables";

export const Crafting_Log_Weaver = function(parent) {
    const data = new DataGroup("Weaver", parent);
    data.name_fr = "Couture";

    data.initializeSubGroups([
        Crafting_Log_Weaver_Level_Based,
        Crafting_Log_Weaver_Master_Recipes,
        Crafting_Log_Weaver_Housing,
        Crafting_Log_Weaver_Story,
        Crafting_Log_Weaver_Ishgard_Restoration,
        Crafting_Log_Weaver_Collectables,
    ]);

    return data;
};
