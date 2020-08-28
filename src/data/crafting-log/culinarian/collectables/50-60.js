import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Culinarian_Collectables_50_60 = function(parent) {
    return new DataGroup("50-60", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "50",
        name: "Rarefied Dhalmel Gratin",
        mat1: "Dhalmel Meat",
        mat2: "Cyclops Onion",
        mat3: "2 Highland Flour",
        mat4: "Popoto",
        mat5: "Sour Cream",
        mat6: "X",
        catalysts: "2 Fire Crystal, Water Crystal"
    },
    {
        level: "52",
        name: "Rarefied Sohm Al Tart",
        mat1: "3 Dark Chestnut",
        mat2: "Sweet Cream",
        mat3: "2 Highland Flour",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Fire Crystal, 3 Water Crystal"
    },
    {
        level: "54",
        name: "Rarefied Sauteed Porcini",
        mat1: "2 Porcini",
        mat2: "Garlean Garlic",
        mat3: "Sagolii Sage",
        mat4: "Fermented Butter",
        mat5: "Volcanic Rock Salt",
        mat6: "X",
        catalysts: "4 Fire Crystal, 3 Water Crystal"
    },
    {
        level: "56",
        name: "Rarefied Royal Eggs",
        mat1: "2 Okeanis Egg",
        mat2: "Hollandaise Sauce",
        mat3: "2 Seema Patrician",
        mat4: "Ishgardian Muffin",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Fire Crystal, 4 Water Crystal"
    },
    {
        level: "58",
        name: "Rarefied Peperoncino",
        mat1: "3 Vermicelli",
        mat2: "Garlean Garlic",
        mat3: "Dragon Pepper",
        mat4: "Olive Oil",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Fire Crystal, 5 Water Crystal"
    },
    {
        level: "60",
        name: "Rarefied Marron Glace",
        mat1: "2 Dark Chestnut",
        mat2: "3 Birch Syrup",
        mat3: "Sour Red",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "6 Fire Crystal, 5 Water Crystal"
    },
];
