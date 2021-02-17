import { DataGroup } from "../../../DataGroup";

import { Logs_Crafting_Log_Armorer_Level_Based } from "./level-based";
import { Logs_Crafting_Log_Armorer_Master_Recipes } from "./master-recipes";
import { Logs_Crafting_Log_Armorer_Housing } from "./housing";
import { Logs_Crafting_Log_Armorer_Story } from "./story";
import { Logs_Crafting_Log_Armorer_Ishgard_Restoration } from "./ishgard-restoration";
import { Logs_Crafting_Log_Armorer_Collectables } from "./collectables";

export const Logs_Crafting_Log_Armorer = function(parent) {
    const data = new DataGroup("Armorer", parent);
    data.name_fr = "Armurerie";

    data.initializeSubGroups([
        Logs_Crafting_Log_Armorer_Level_Based,
        Logs_Crafting_Log_Armorer_Master_Recipes,
        Logs_Crafting_Log_Armorer_Housing,
        Logs_Crafting_Log_Armorer_Story,
        Logs_Crafting_Log_Armorer_Ishgard_Restoration,
        Logs_Crafting_Log_Armorer_Collectables,
    ]);

    return data;
};
