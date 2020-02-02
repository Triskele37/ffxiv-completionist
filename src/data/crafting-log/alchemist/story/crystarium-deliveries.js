import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Alchemist_Story_Crystarium_Deliveries = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        "level": 70,
        name: "Edible Antidote",
        "mat-1": "Crescent Spring Water",
        "mat-2": "Holy Basil",
        "mat-3": "Persimmon Leaf",
        "mat-4": "Antidote",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Water Crystal, 2 Lightning Crystal",
        "special": "X"
    },
    {
        "level": 73,
        name: "Nutrient-Rich Porridge",
        "mat-1": "Garden Beet Sugar",
        "mat-2": "Gyr Abanian Flour",
        "mat-3": "Steppe Milk",
        "mat-4": "Raisins",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Water Crystal, 2 Lightning Crystal",
        "special": "X"
    },
    {
        "level": 75,
        name: "Fortifying Soup",
        "mat-1": "Creamtop Mushroom",
        "mat-2": "Highland Spring Water",
        "mat-3": "Purple Carrot",
        "mat-4": "Ala Mhigan Salt Crystal",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Water Crystal, 2 Lightning Crystal",
        "special": "X"
    },
    {
        "level": 75,
        name: "Offering of Sweets",
        "mat-1": "Sweets Ingredients",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Water Crystal, 2 Lightning Crystal",
        "special": "X"
    },
    {
        "level": 78,
        name: "Berube Feed",
        "mat-1": "Ovim Meat",
        "mat-2": "Chysahl Greens",
        "mat-3": "Curly Parsley",
        "mat-4": "Hollandaise Sauce",
        "mat-5": "Yak Milk",
        "mat-6": "X",
        "catalysts": "2 Water Crystal, 2 Lightning Crystal",
        "special": "X"
    },
    {
        "level": 80,
        name: "Zun-Style Amaro Feed",
        "mat-1": "Zun Culinary Components",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Water Crystal, 2 Lightning Crystal",
        "special": "X"
    },
];
