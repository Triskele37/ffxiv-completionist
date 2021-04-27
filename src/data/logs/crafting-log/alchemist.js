import { Logs_Crafting_Log_Alchemist_Ornaments } from "./other/ornaments";
import { buildCrafter } from "./buildCrafter";

export const Logs_Crafting_Log_Alchemist = function(parent) {
    const group = buildCrafter(parent, "./logs/crafting/alchemist");
    group.subGroups.splice(3, 0,
        Logs_Crafting_Log_Alchemist_Ornaments(group)
    );

    return group;
};
