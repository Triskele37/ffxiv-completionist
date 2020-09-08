import { DataGroup } from "../../DataGroup";

import { Crafting_Log_Armorer_Level_Based } from "./level-based";
import { Crafting_Log_Armorer_Master_Recipes } from "./master-recipes";
import { Crafting_Log_Armorer_Housing } from "./housing";
import { Crafting_Log_Armorer_Story } from "./story";
import { Crafting_Log_Armorer_Ishgard_Restoration } from "./ishgard-restoration";
import { Crafting_Log_Armorer_Collectables } from "./collectables";

export const Crafting_Log_Armorer = function(parent) {
    const data = new DataGroup("Armorer", parent);
    data.name_fr = "Armurerie";

    data.initializeSubGroups([
        Crafting_Log_Armorer_Level_Based,
        Crafting_Log_Armorer_Master_Recipes,
        Crafting_Log_Armorer_Housing,
        Crafting_Log_Armorer_Story,
        Crafting_Log_Armorer_Ishgard_Restoration,
        Crafting_Log_Armorer_Collectables,
    ]);

    return data;
};
