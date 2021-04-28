import { DataGroup } from "../../DataGroup";

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
    const group = DataGroup.fromJSON(parent, "./logs/crafting/index");

    group.subGroups = [
        DataGroup.fromJSON(group, "./logs/crafting/master-crafting-books"),
        Logs_Crafting_Log_Carpenter(group),
        Logs_Crafting_Log_Blacksmith(group),
        Logs_Crafting_Log_Armorer(group),
        Logs_Crafting_Log_Goldsmith(group),
        Logs_Crafting_Log_Leatherworker(group),
        Logs_Crafting_Log_Weaver(group),
        Logs_Crafting_Log_Alchemist(group),
        Logs_Crafting_Log_Culinarian(group),
        Logs_Crafting_Log_Shared(group),
    ];

    return group;
};
