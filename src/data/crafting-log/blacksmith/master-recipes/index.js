import { DataGroup } from "../../../DataGroup";

import { Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_I } from "./mr-1";
import { Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_II } from "./mr-2";
import { Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_III } from "./mr-3";
import { Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_IV } from "./mr-4";
import { Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_V } from "./mr-5";
import { Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_VI } from "./mr-6";
import { Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_VII } from "./mr-7";
import { Crafting_Logs_Blacksmith_Master_Recipes_Other_Master_Recipes } from "./other";

export const Crafting_Logs_Blacksmith_Master_Recipes = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_I,
        Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_II,
        Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_III,
        Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_IV,
        Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_V,
        Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_VI,
        Crafting_Logs_Blacksmith_Master_Recipes_Master_Recipe_VII,
        Crafting_Logs_Blacksmith_Master_Recipes_Other_Master_Recipes,
    ]);
};
