import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Culinarian_Level_Based_1_5 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Table Salt",
        mat1: "Rock Salt",
        mat2: "Distilled Water",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard",
        special: "Buyable, Ingredient (CUL), Levequest"
    },
    {
        level: "1",
        name: "Maple Syrup",
        mat1: "Maple Sap",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard",
        special: "Buyable, Ingredient (CUL), Levequest"
    },
    {
        level: "2",
        name: "Maple Sugar",
        mat1: "Maple Syrup",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard",
        special: "Ingredient (CUL)"
    },
    {
        level: "3",
        name: "Raisins",
        mat1: "Lowland Grapes",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard",
        special: "Buyable, Ingredient (CUL), Levequest"
    },
    {
        level: "3",
        name: "Boiled Egg",
        mat1: "Chicken Egg",
        mat2: "Mineral Water",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Water Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "4",
        name: "Rye Flour",
        mat1: "3 Rye",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard",
        special: "Buyable, Ingredient (CUL)"
    },
    {
        level: "4",
        name: "Honey",
        mat1: "3 Beehive Chip",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard",
        special: "Buyable, Ingredient (CUL)"
    },
    {
        level: "4",
        name: "Frumenty",
        mat1: "Sunset Wheat",
        mat2: "Raisins",
        mat3: "Honey",
        mat4: "Aldgoat Milk",
        mat5: "Cinnamon",
        mat6: "X",
        catalysts: "Fire Shard, Water Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "5",
        name: "Fishmeal",
        mat1: "3 Lominsan Anchovy",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard",
        special: "Buyable, Gardening"
    },
    {
        level: "5",
        name: "Crayfish Ball",
        mat1: "3 Crayfish",
        mat2: "Rye Flour",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Water Shard",
        special: "Buyable, Bait"
    },
    {
        level: "5",
        name: "Battered Fish",
        mat1: "Haddock",
        mat2: "Popoto",
        mat3: "Olive Oil",
        mat4: "Table Salt",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Water Shard",
        special: "X"
    },
    {
        level: "5",
        name: "Rolanberry Shaved Ice",
        mat1: "Mineral Water",
        mat2: "Rolanberry",
        mat3: "Maple Syrup",
        mat4: "Buffalo Milk",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Ice Shard",
        special: "Buyable"
    },
    {
        level: "5",
        name: "Marmot Steak",
        mat1: "Marmot Meat",
        mat2: "Wild Onion",
        mat3: "Garlean Garlic",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Water Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "5",
        name: "Grilled Trout",
        mat1: "Princess Trout",
        mat2: "Table Salt",
        mat3: "X",
        mat4: "x",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Water Shard",
        special: "Levequest, Provisioning"
    },
    {
        level: "5",
        name: "Flatbread",
        mat1: "Rye Flour",
        mat2: "Table Salt",
        mat3: "Mineral Water",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Water Shard",
        special: "Buyable, Ingredient (CUL), Provisioning"
    },
];
