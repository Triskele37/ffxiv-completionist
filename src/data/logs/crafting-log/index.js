import { DataGroup } from "../../DataGroup";
import { CraftingLogColumnConfig } from "./columnConfigs";

import { Logs_Crafting_Log_Master_Crafting_Books } from "./master-crafting-books";
import { Logs_Crafting_Log_Carpenter } from "./carpenter";
import { Logs_Crafting_Log_Blacksmith } from "./blacksmith";
import { Logs_Crafting_Log_Armorer } from "./armorer";
import { Logs_Crafting_Log_Goldsmith } from "./goldsmith";
import { Logs_Crafting_Log_Leatherworker } from "./leatherworker";
import { Logs_Crafting_Log_Weaver } from "./weaver";
import { Logs_Crafting_Log_Alchemist } from "./alchemist";
import { Logs_Crafting_Log_Culinarian } from "./culinarian";
import { Logs_Crafting_Log_Shared } from "./shared";

export const Logs_Crafting_Log = function(parent) {
    const data = new DataGroup("Crafting Log", parent);
    data.name_fr = "Carnet d'Artisanat";

    data.columnConfig = CraftingLogColumnConfig;

    data.initializeSubGroups([
        Logs_Crafting_Log_Master_Crafting_Books,
        Logs_Crafting_Log_Carpenter,
        Logs_Crafting_Log_Blacksmith,
        Logs_Crafting_Log_Armorer,
        Logs_Crafting_Log_Goldsmith,
        Logs_Crafting_Log_Leatherworker,
        Logs_Crafting_Log_Weaver,
        Logs_Crafting_Log_Alchemist,
        Logs_Crafting_Log_Culinarian,
        Logs_Crafting_Log_Shared,
    ]);

    return data;
};
