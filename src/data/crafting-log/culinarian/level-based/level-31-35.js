import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Culinarian_Level_Based_31_35 = function(parent) {
    return new DataGroup("31-35", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "31",
        name: "Dark Vinegar",
        mat1: "4 Noble Grapes",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Fire Shard",
        special: "Ingredient (CUL), Levequest"
    },
    {
        level: "31",
        name: "Alligator Salad",
        mat1: "Alligator Pear",
        mat2: "Paprika",
        mat3: "Table Salt",
        mat4: "Dark Vinegar",
        mat5: "Olive Oil",
        mat6: "Blue Cheese",
        catalysts: "3 Fire Shard, 3 Water Shard",
        special: "Provisioning"
    },
    {
        level: "31",
        name: "Cornbread",
        mat1: "Cornmeal",
        mat2: "Sunset Wheat Flour",
        mat3: "Olive Oil",
        mat4: "Buffalo Milk",
        mat5: "Chicken Egg",
        mat6: "Mineral Water",
        catalysts: "3 Fire Shard, 3 Water Shard",
        special: "Levequest, Provisioning"
    },
    {
        level: "32",
        name: "Smoked Raptor",
        mat1: "Raptor Shank",
        mat2: "Olive Oil",
        mat3: "Sun Lemon",
        mat4: "Table Salt",
        mat5: "Black Pepper",
        mat6: "X",
        catalysts: "3 Fire Shard, 3 Water Shard",
        special: "Ingredient (CUL), Provisioning"
    },
    {
        level: "32",
        name: "Forest Miq'abob",
        mat1: "Button Mushroom",
        mat2: "Ruby Tomato",
        mat3: "Aloe",
        mat4: "Lavender Oil",
        mat5: "Table Salt",
        mat6: "Black Pepper",
        catalysts: "3 Fire Shard, 3 Water Shard",
        special: "Provisioning"
    },
    {
        level: "33",
        name: "Tuna Miq'abob",
        mat1: "Ash Tuna",
        mat2: "Midland Basil",
        mat3: "Olive Oil",
        mat4: "Sun Lemon",
        mat5: "Table Salt",
        mat6: "Finger Shrimp",
        catalysts: "4 Fire Shard, 3 Water Shard",
        special: "Levequest, Provisioning"
    },
    {
        level: "33",
        name: "Blood Currant Tart",
        mat1: "Pie Dough",
        mat2: "Blood Currants",
        mat3: "Smooth Butter",
        mat4: "Maple Sugar",
        mat5: "Natron",
        mat6: "Gelatin",
        catalysts: "4 Fire Shard, 3 Water Shard",
        special: "Levequest, Provisioning"
    },
    {
        level: "34",
        name: "Scrambled Eggs",
        mat1: "White Truffle",
        mat2: "Puk Egg",
        mat3: "Cottage Cheese",
        mat4: "Table Salt",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Shard, 3 Water Shard",
        special: "Ingredient (CUL), Provisioning"
    },
    {
        level: "34",
        name: "Acorn Cookie",
        mat1: "Rye Flour",
        mat2: "Table Salt",
        mat3: "Iron Acorn",
        mat4: "Mineral Water",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Shard, 3 Water Shard",
        special: "Ingredient (CUL), Levequest, Provisioning"
    },
    {
        level: "35",
        name: "Herring Ball",
        mat1: "3 Indigo Herring",
        mat2: "Sunset Wheat Flour",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Shard, 3 Water Shard",
        special: "Buyable, Bait"
    },
    {
        level: "35",
        name: "Cawl Cennin",
        mat1: "Salt Leek",
        mat2: "Chicken Stock",
        mat3: "Smooth Butter",
        mat4: "Sweet Cream",
        mat5: "Wild Onion",
        mat6: "Mineral Water",
        catalysts: "4 Fire Shard, 3 Water Shard",
        special: "Levequest, Provisioning"
    },
];
