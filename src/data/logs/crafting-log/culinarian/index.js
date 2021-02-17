import { DataGroup } from "../../../DataGroup";

import { Logs_Crafting_Log_Culinarian_Level_Based } from "./level-based";
import { Logs_Crafting_Log_Culinarian_Master_Recipes } from "./master-recipes";
import { Logs_Crafting_Log_Culinarian_Housing } from "./housing";
import { Logs_Crafting_Log_Culinarian_Story } from "./story";
import { Logs_Crafting_Log_Culinarian_Ishgard_Restoration } from "./ishgard-restoration";
import { Logs_Crafting_Log_Culinarian_Collectables } from "./collectables";

export const Logs_Crafting_Log_Culinarian = function(parent) {
    const data = new DataGroup("Culinarian", parent);
    data.name_fr = "Culinaire";

    data.initializeSubGroups([
        Logs_Crafting_Log_Culinarian_Level_Based,
        Logs_Crafting_Log_Culinarian_Master_Recipes,
        Logs_Crafting_Log_Culinarian_Housing,
        Logs_Crafting_Log_Culinarian_Story,
        Logs_Crafting_Log_Culinarian_Ishgard_Restoration,
        Logs_Crafting_Log_Culinarian_Collectables,
    ]);

    return data;
};
