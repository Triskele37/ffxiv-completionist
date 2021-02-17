import { DataGroup } from "../../../DataGroup";

import { Logs_Crafting_Log_Weaver_Level_Based } from "./level-based";
import { Logs_Crafting_Log_Weaver_Master_Recipes } from "./master-recipes";
import { Logs_Crafting_Log_Weaver_Housing } from "./housing";
import { Logs_Crafting_Log_Weaver_Story } from "./story";
import { Logs_Crafting_Log_Weaver_Ishgard_Restoration } from "./ishgard-restoration";
import { Logs_Crafting_Log_Weaver_Collectables } from "./collectables";

export const Logs_Crafting_Log_Weaver = function(parent) {
    const data = new DataGroup("Weaver", parent);
    data.name_fr = "Couture";

    data.initializeSubGroups([
        Logs_Crafting_Log_Weaver_Level_Based,
        Logs_Crafting_Log_Weaver_Master_Recipes,
        Logs_Crafting_Log_Weaver_Housing,
        Logs_Crafting_Log_Weaver_Story,
        Logs_Crafting_Log_Weaver_Ishgard_Restoration,
        Logs_Crafting_Log_Weaver_Collectables,
    ]);

    return data;
};
