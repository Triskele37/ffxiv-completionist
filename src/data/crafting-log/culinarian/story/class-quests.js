import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Culinarian_Story_Class_Quests = function(parent) {
    return new DataGroup("Class Quests", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: 63,
        name: "Doman Rice Balls",
        mat1: "Rice Ball Ingredients",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Fire Crystal, Water Crystal",
        special: "X"
    },
    {
        level: 65,
        name: "Doman Udon Broth",
        mat1: "Broth Ingredients",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Fire Crystal, Water Crystal",
        special: "X"
    },
    {
        level: 68,
        name: "Nigiri-zushi",
        mat1: "Sushi Ingredients",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Fire Crystal, Water Crystal",
        special: "X"
    },
    {
        level: 70,
        name: "Doman Sukiyaki",
        mat1: "Sukiyaki Ingredients",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Fire Crystal, Water Crystal",
        special: "X"
    }
];
