import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Culinarian_Collectables_61_70 = function(parent) {
    return new DataGroup("61-70", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "62",
        name: "Rarefied Baklava",
        mat1: "Gyr Abanian Flour ",
        mat2: "Gagana Egg",
        mat3: "Buffalo Milk",
        mat4: "Almonds",
        mat5: "Gridanian Walnut",
        mat6: "Honey",
        catalysts: "3 Fire Crystal, 3 Water Crystal"
    },
    {
        level: "64",
        name: "Rarefied Shorlog",
        mat1: "2 Dzo Chuck",
        mat2: "Paprika",
        mat3: "Cumin Seeds",
        mat4: "Black Pepper",
        mat5: "Algae Salt",
        mat6: "X",
        catalysts: "4 Fire Crystal, 3 Water Crystal"
    },
    {
        level: "66",
        name: "Rarefied Tempura Platter",
        mat1: "Gyr Abanian Flour ",
        mat2: "Gagana Egg",
        mat3: "Cottonseed Oil",
        mat4: "Yanxian Tiger Prawn",
        mat5: "Swordtip",
        mat6: "Lotus Root",
        catalysts: "5 Fire Crystal, 4 Water Crystal"
    },
    {
        level: "68",
        name: "Rarefied Persimmon Pudding",
        mat1: "Persimmon",
        mat2: "Gyr Abanian Flour",
        mat3: "Gagana Egg",
        mat4: "Nutmeg",
        mat5: "Beet Sugar",
        mat6: "Steppe Milk",
        catalysts: "5 Fire Crystal, 5 Water Crystal"
    },
    {
        level: "70",
        name: "Rarefied Chirashi-zushi",
        mat1: "Koshu Sticky Rice",
        mat2: "Rice Vinegar",
        mat3: "Shiitake Mushroom",
        mat4: "Lotus Root",
        mat5: "Yanxian Tiger Prawn",
        mat6: "Gagana Egg",
        catalysts: "6 Fire Crystal, 5 Water Crystal"
    },
];
