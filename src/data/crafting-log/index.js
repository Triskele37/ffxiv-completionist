import { DataGroup } from "../DataGroup";
import { CraftingLogColumnConfig } from "./columnConfigs";

import { Crafting_Logs_Carpenter } from "./carpenter";
import { Crafting_Logs_Blacksmith } from "./blacksmith";
import { Crafting_Logs_Armorer } from "./armorer";
import { Crafting_Logs_Goldsmith } from "./goldsmith";
import { Crafting_Logs_Leatherworker } from "./leatherworker";
import { Crafting_Logs_Weaver } from "./weaver";
import { Crafting_Logs_Alchemist } from "./alchemist";
import { Crafting_Logs_Culinarian } from "./culinarian";

export const Crafting_Logs = function(name, parent) {
    const data = new DataGroup(name, parent)
    data.columnConfig = CraftingLogColumnConfig;

    data.initializeSubGroups([
        Crafting_Logs_Carpenter,
        Crafting_Logs_Blacksmith,
        Crafting_Logs_Armorer,
        Crafting_Logs_Goldsmith,
        Crafting_Logs_Leatherworker,
        Crafting_Logs_Weaver,
        Crafting_Logs_Alchemist,
        Crafting_Logs_Culinarian,
    ]);

    return data;
};
