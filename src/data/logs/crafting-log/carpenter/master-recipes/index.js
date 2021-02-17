import { DataGroup } from "../../../../DataGroup";

import { Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_1 } from "./mr-1";
import { Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_2 } from "./mr-2";
import { Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_3 } from "./mr-3";
import { Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_4 } from "./mr-4";
import { Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_5 } from "./mr-5";
import { Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_6 } from "./mr-6";
import { Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_7 } from "./mr-7";
import { Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_8 } from "./mr-8";
import { Logs_Crafting_Log_Carpenter_Master_Recipes_Other_Master_Recipes } from "./other";

export const Logs_Crafting_Log_Carpenter_Master_Recipes = function(parent) {
    return new DataGroup("Master Recipes", parent).initializeSubGroups([
        Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_1,
        Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_2,
        Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_3,
        Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_4,
        Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_5,
        Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_6,
        Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_7,
        Logs_Crafting_Log_Carpenter_Master_Recipes_Master_Recipes_8,
        Logs_Crafting_Log_Carpenter_Master_Recipes_Other_Master_Recipes,
    ]);
};
