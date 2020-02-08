import { DataGroup } from "../../../DataGroup";

import { Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_1 } from "./mr-1";
import { Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_2 } from "./mr-2";
import { Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_3 } from "./mr-3";
import { Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_4 } from "./mr-4";
import { Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_5 } from "./mr-5";
import { Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_6 } from "./mr-6";
import { Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_7 } from "./mr-7";
import { Crafting_Log_Culinarian_Master_Recipes_Other_Master_Recipes } from "./other";

export const Crafting_Log_Culinarian_Master_Recipes = function(parent) {
    return new DataGroup("Master Recipes", parent).initializeSubGroups([
        Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_1,
        Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_2,
        Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_3,
        Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_4,
        Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_5,
        Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_6,
        Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_7,
        Crafting_Log_Culinarian_Master_Recipes_Other_Master_Recipes,
    ]);
};
