import { DataGroup } from "../../../../DataGroup";

export const Logs_Crafting_Log_Alchemist_Story_Crystarium_Deliveries = function(parent) {
    return new DataGroup("Crystarium Deliveries", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: 70,
        name: "Edible Antidote",
        mat1: "Crescent Spring Water",
        mat2: "Holy Basil",
        mat3: "Persimmon Leaf",
        mat4: "Antidote",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Water Crystal, 2 Lightning Crystal"
    },
    {
        level: 73,
        name: "Nutrient-Rich Porridge",
        mat1: "Garden Beet Sugar",
        mat2: "Gyr Abanian Flour",
        mat3: "Steppe Milk",
        mat4: "Raisins",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Water Crystal, 2 Lightning Crystal"
    },
    {
        level: 75,
        name: "Fortifying Soup",
        mat1: "Creamtop Mushroom",
        mat2: "Highland Spring Water",
        mat3: "Purple Carrot",
        mat4: "Ala Mhigan Salt Crystal",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Water Crystal, 2 Lightning Crystal"
    },
    {
        level: 75,
        name: "Offering of Sweets",
        mat1: "Sweets Ingredients",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Water Crystal, 2 Lightning Crystal"
    },
    {
        level: 78,
        name: "Berube Feed",
        mat1: "Ovim Meat",
        mat2: "Chysahl Greens",
        mat3: "Curly Parsley",
        mat4: "Hollandaise Sauce",
        mat5: "Yak Milk",
        mat6: "X",
        catalysts: "2 Water Crystal, 2 Lightning Crystal"
    },
    {
        level: 80,
        name: "Zun-Style Amaro Feed",
        mat1: "Zun Culinary Components",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Water Crystal, 2 Lightning Crystal"
    },
];
