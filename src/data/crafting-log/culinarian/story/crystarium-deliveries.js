import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Culinarian_Story_Crystarium_Deliveries = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
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
        catalysts: "2 Fire Crystal, 2 Water Crystal",
        special: "X"
    },
    {
        level: 73,
        name: "Nutrient-Rich Porridge",
        mat1: "Garden Beet Sugar",
        mat2: "Gyr Abania Flour",
        mat3: "Steppe Milk",
        mat4: "Raisins",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Fire Crystal, 2 Water Crystal",
        special: "X"
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
        catalysts: "2 Fire Crystal, 2 Water Crystal",
        special: "X"
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
        catalysts: "2 Fire Crystal, 2 Water Crystal",
        special: "X"
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
        catalysts: "2 Fire Crystal, 2 Water Crystal",
        special: "X"
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
        catalysts: "2 Fire Crystal, 2 Water Crystal",
        special: "X"
    },
];
