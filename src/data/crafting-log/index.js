import { DataGroup } from "../DataGroup";
import { CraftingLogColumnConfig } from "./columnConfigs";

import { Crafting_Log_Carpenter } from "./carpenter";
import { Crafting_Log_Blacksmith } from "./blacksmith";
import { Crafting_Log_Armorer } from "./armorer";
import { Crafting_Log_Goldsmith } from "./goldsmith";
import { Crafting_Log_Leatherworker } from "./leatherworker";
import { Crafting_Log_Weaver } from "./weaver";
import { Crafting_Log_Alchemist } from "./alchemist";
import { Crafting_Log_Culinarian } from "./culinarian";
import { Crafting_Log_Shared } from "./shared";

export const Crafting_Log = function(name, parent) {
    const data = new DataGroup(name, parent)
    data.columnConfig = CraftingLogColumnConfig;

    data.initializeSubGroups([
        Crafting_Log_Carpenter,
        Crafting_Log_Blacksmith,
        Crafting_Log_Armorer,
        Crafting_Log_Goldsmith,
        Crafting_Log_Leatherworker,
        Crafting_Log_Weaver,
        Crafting_Log_Alchemist,
        Crafting_Log_Culinarian,
        Crafting_Log_Shared,
    ]);

    return data;
};
