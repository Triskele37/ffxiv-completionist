import { DataGroup } from "../../../DataGroup";

import { Logs_Crafting_Log_Leatherworker_Level_Based } from "./level-based";
import { Logs_Crafting_Log_Leatherworker_Master_Recipes } from "./master-recipes";
import { Logs_Crafting_Log_Leatherworker_Housing } from "./housing";
import { Logs_Crafting_Log_Leatherworker_Story } from "./story";
import { Logs_Crafting_Log_Leatherworker_Ishgard_Restoration } from "./ishgard-restoration";
import { Logs_Crafting_Log_Leatherworker_Collectables } from "./collectables";

export const Logs_Crafting_Log_Leatherworker = function(parent) {
    const data = new DataGroup("Leatherworker", parent);
    data.name_fr = "Tannage";

    data.initializeSubGroups([
        Logs_Crafting_Log_Leatherworker_Level_Based,
        Logs_Crafting_Log_Leatherworker_Master_Recipes,
        Logs_Crafting_Log_Leatherworker_Housing,
        Logs_Crafting_Log_Leatherworker_Story,
        Logs_Crafting_Log_Leatherworker_Ishgard_Restoration,
        Logs_Crafting_Log_Leatherworker_Collectables,
    ]);

    return data;
};
