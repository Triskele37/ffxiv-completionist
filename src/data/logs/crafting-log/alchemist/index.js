import { DataGroup } from "../../../DataGroup";

import { Logs_Crafting_Log_Alchemist_Level_Based } from "./level-based";
import { Logs_Crafting_Log_Alchemist_Master_Recipes } from "./master-recipes";
import { Logs_Crafting_Log_Alchemist_Housing } from "./housing";
import { Logs_Crafting_Log_Alchemist_Ornaments } from "./ornaments";
import { Logs_Crafting_Log_Alchemist_Story } from "./story";
import { Logs_Crafting_Log_Alchemist_Ishgard_Restoration } from "./ishgard-restoration";
import { Logs_Crafting_Log_Alchemist_Collectables } from "./collectables";

export const Logs_Crafting_Log_Alchemist = function(parent) {
    const data = new DataGroup("Alchemist", parent);
    data.name_fr = "Alchimie";

    data.initializeSubGroups([
        Logs_Crafting_Log_Alchemist_Level_Based,
        Logs_Crafting_Log_Alchemist_Master_Recipes,
        Logs_Crafting_Log_Alchemist_Housing,
        Logs_Crafting_Log_Alchemist_Ornaments,
        Logs_Crafting_Log_Alchemist_Story,
        Logs_Crafting_Log_Alchemist_Ishgard_Restoration,
        Logs_Crafting_Log_Alchemist_Collectables,
    ]);

    return data;
};
