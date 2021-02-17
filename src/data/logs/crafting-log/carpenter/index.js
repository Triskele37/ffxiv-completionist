import { DataGroup } from "../../../DataGroup";

import { Logs_Crafting_Log_Carpenter_Level_Based } from "./level-based";
import { Logs_Crafting_Log_Carpenter_Master_Recipes } from "./master-recipes";
import { Logs_Crafting_Log_Carpenter_Housing } from "./housing";
import { Logs_Crafting_Log_Carpenter_Story } from "./story";
import { Logs_Crafting_Log_Carpenter_Ishgard_Restoration } from "./ishgard-restoration";
import { Logs_Crafting_Log_Carpenter_Collectables } from "./collectables";

export const Logs_Crafting_Log_Carpenter = function(parent) {
    const data = new DataGroup("Carpenter", parent);
    data.name_fr = "Menuiserie";

    data.initializeSubGroups([
        Logs_Crafting_Log_Carpenter_Level_Based,
        Logs_Crafting_Log_Carpenter_Master_Recipes,
        Logs_Crafting_Log_Carpenter_Housing,
        Logs_Crafting_Log_Carpenter_Story,
        Logs_Crafting_Log_Carpenter_Ishgard_Restoration,
        Logs_Crafting_Log_Carpenter_Collectables,
    ]);

    return data;
};
