import { DataGroup } from "../../../DataGroup";

import { Logs_Crafting_Log_Shared_Beast_Tribe_Quests } from "./beast-tribe-quests";
import { Logs_Crafting_Log_Shared_Custom_Deliveries } from "./custom-deliveries";
import { Logs_Crafting_Log_Shared_Dyes } from "./dyes";

export const Logs_Crafting_Log_Shared = function(parent) {
    const data = new DataGroup("Shared", parent);
    data.name_fr = "Partagé";

    data.initializeSubGroups([
        Logs_Crafting_Log_Shared_Beast_Tribe_Quests,
        Logs_Crafting_Log_Shared_Custom_Deliveries,
        Logs_Crafting_Log_Shared_Dyes,
    ]);

    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        level: "50★★",
        name: "Magitek Repair Materials",
        mat1: "Dark Matter Cluster",
        mat2: "Grade 6 Dark Matter",
        catalysts: "Variable"
    }
];
