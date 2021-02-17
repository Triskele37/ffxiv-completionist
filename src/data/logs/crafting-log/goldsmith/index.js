import { DataGroup } from "../../../DataGroup";

import { Logs_Crafting_Log_Goldsmith_Level_Based } from "./level-based";
import { Logs_Crafting_Log_Goldsmith_Master_Recipes } from "./master-recipes";
import { Logs_Crafting_Log_Goldsmith_Housing } from "./housing";
import { Logs_Crafting_Log_Goldsmith_Story } from "./story";
import { Logs_Crafting_Log_Goldsmith_Ishgard_Restoration } from "./ishgard-restoration";
import { Logs_Crafting_Log_Goldsmith_Collectables } from "./collectables";

export const Logs_Crafting_Log_Goldsmith = function(parent) {
    const data = new DataGroup("Goldsmith", parent);
    data.name_fr = "Orfèvrerie";

    data.initializeSubGroups([
        Logs_Crafting_Log_Goldsmith_Level_Based,
        Logs_Crafting_Log_Goldsmith_Master_Recipes,
        Logs_Crafting_Log_Goldsmith_Housing,
        Logs_Crafting_Log_Goldsmith_Story,
        Logs_Crafting_Log_Goldsmith_Ishgard_Restoration,
        Logs_Crafting_Log_Goldsmith_Collectables,
    ]);

    return data;
};
