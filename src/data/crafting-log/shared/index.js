import { DataGroup } from "../../DataGroup";

import { Crafting_Log_Shared_Beast_Tribe_Quests } from "./beast-tribe-quests";
import { Crafting_Log_Shared_Custom_Deliveries } from "./custom-deliveries";
import { Crafting_Log_Shared_Dyes } from "./dyes";

export const Crafting_Log_Shared = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Log_Shared_Beast_Tribe_Quests,
        Crafting_Log_Shared_Custom_Deliveries,
        Crafting_Log_Shared_Dyes,
    ]).initializeTasks(tasks);
};

const tasks = [
    {
        level: "50★★",
        name: "Magitek Repair Materials",
        mat1: "Dark Matter Cluster",
        mat2: "Grade 6 Dark Matter",
        catalysts: "Variable",
        special: "Requires Master I"
    }
];
