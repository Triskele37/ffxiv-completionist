import { DataGroup } from "../../../DataGroup";

import { Logs_Crafting_Log_Blacksmith_Level_Based } from "./level-based";
import { Logs_Crafting_Log_Blacksmith_Master_Recipes } from "./master-recipes";
import { Logs_Crafting_Log_Blacksmith_Housing } from "./housing";
import { Logs_Crafting_Log_Blacksmith_Story } from "./story";
import { Logs_Crafting_Log_Blacksmith_Ishgard_Restoration } from "./ishgard-restoration";
import { Logs_Crafting_Log_Blacksmith_Collectables } from "./collectables";

export const Logs_Crafting_Log_Blacksmith = function(parent) {
    const data = new DataGroup("Blacksmith", parent);
    data.name_fr = "Métallurgie";

    data.initializeSubGroups([
        Logs_Crafting_Log_Blacksmith_Level_Based,
        Logs_Crafting_Log_Blacksmith_Master_Recipes,
        Logs_Crafting_Log_Blacksmith_Housing,
        Logs_Crafting_Log_Blacksmith_Story,
        Logs_Crafting_Log_Blacksmith_Ishgard_Restoration,
        Logs_Crafting_Log_Blacksmith_Collectables,
    ]);

    return data;
};
