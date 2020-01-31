import { DataGroup } from "../../DataGroup";

import { Crafting_Logs_Blacksmith_Level_Based } from "./level-based";
import { Crafting_Logs_Blacksmith_Master_Recipes } from "./master-recipes";
import { Crafting_Logs_Blacksmith_Story } from "./story";
import { Crafting_Logs_Blacksmith_Housing } from "./housing";
import { Crafting_Logs_Blacksmith_Ishgard_Restoration } from "./ishgard-restoration";
import { Crafting_Logs_Blacksmith_Others } from "./others";

export const Crafting_Logs_Blacksmith = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Logs_Blacksmith_Level_Based,
        Crafting_Logs_Blacksmith_Master_Recipes,
        Crafting_Logs_Blacksmith_Story,
        Crafting_Logs_Blacksmith_Housing,
        Crafting_Logs_Blacksmith_Ishgard_Restoration,
        Crafting_Logs_Blacksmith_Others,
    ]);
};
