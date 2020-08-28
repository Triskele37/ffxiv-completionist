import { DataGroup } from "../../../DataGroup";

import { Crafting_Log_Blacksmith_Collectables_50_60 } from "./50-60";
import { Crafting_Log_Blacksmith_Collectables_61_70 } from "./61-70";
import { Crafting_Log_Blacksmith_Collectables_71_80 } from "./71-80";

export const Crafting_Log_Blacksmith_Collectables = function(parent) {
    return new DataGroup("Collectables", parent).initializeSubGroups([
        Crafting_Log_Blacksmith_Collectables_50_60,
        Crafting_Log_Blacksmith_Collectables_61_70,
        Crafting_Log_Blacksmith_Collectables_71_80,
    ]);
};
