import { DataGroup } from "../../DataGroup";

import { Crafting_Log_Goldsmith_Level_Based } from "./level-based";
import { Crafting_Log_Goldsmith_Master_Recipes } from "./master-recipes";
import { Crafting_Log_Goldsmith_Housing } from "./housing";
import { Crafting_Log_Goldsmith_Story } from "./story";
import { Crafting_Log_Goldsmith_Ishgard_Restoration } from "./ishgard-restoration";
import { Crafting_Log_Goldsmith_Collectables } from "./collectables";

export const Crafting_Log_Goldsmith = function(parent) {
    const data = new DataGroup("Goldsmith", parent);
    data.name_fr = "Orfèvrerie";

    data.initializeSubGroups([
        Crafting_Log_Goldsmith_Level_Based,
        Crafting_Log_Goldsmith_Master_Recipes,
        Crafting_Log_Goldsmith_Housing,
        Crafting_Log_Goldsmith_Story,
        Crafting_Log_Goldsmith_Ishgard_Restoration,
        Crafting_Log_Goldsmith_Collectables,
    ]);

    return data;
};
