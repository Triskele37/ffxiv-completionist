import { DataGroup } from "../../../../DataGroup";

import { Logs_Crafting_Log_Armorer_Collectables_50_60 } from "./50-60";
import { Logs_Crafting_Log_Armorer_Collectables_61_70 } from "./61-70";
import { Logs_Crafting_Log_Armorer_Collectables_71_80 } from "./71-80";

export const Logs_Crafting_Log_Armorer_Collectables = function(parent) {
    return new DataGroup("Collectables", parent).initializeSubGroups([
        Logs_Crafting_Log_Armorer_Collectables_50_60,
        Logs_Crafting_Log_Armorer_Collectables_61_70,
        Logs_Crafting_Log_Armorer_Collectables_71_80,
    ]);
};
