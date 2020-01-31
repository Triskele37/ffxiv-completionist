import { DataGroup } from "../../DataGroup";

import { Crafting_Logs_Alchemist_Level_Based } from "./level-based";
import { Crafting_Logs_Alchemist_Master_Recipes } from "./master-recipes";
import { Crafting_Logs_Alchemist_Story } from "./story";
import { Crafting_Logs_Alchemist_Housing } from "./housing";
import { Crafting_Logs_Alchemist_Ishgard_Restoration } from "./ishgard-restoration";
import { Crafting_Logs_Alchemist_Others } from "./others";

export const Crafting_Logs_Alchemist = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Logs_Alchemist_Level_Based,
        Crafting_Logs_Alchemist_Master_Recipes,
        Crafting_Logs_Alchemist_Story,
        Crafting_Logs_Alchemist_Housing,
        Crafting_Logs_Alchemist_Ishgard_Restoration,
        Crafting_Logs_Alchemist_Others,
    ]);
};
