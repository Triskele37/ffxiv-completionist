import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Alchemist_Story_Class_Quests = function(parent) {
    return new DataGroup("Class Quests", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: 63,
        name: "Intellectuary",
        mat1: "Electuary Ingredients",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Water Crystal, Lightning Crystal"
    },
    {
        level: 65,
        name: "Twice-fermented Mun-Tuy Juice",
        mat1: "Juice Ingredients",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Water Crystal, Lightning Crystal"
    },
    {
        level: 68,
        name: "Luminol",
        mat1: "Luminol Ingredients",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Water Crystal, Lightning Crystal"
    },
    {
        level: 70,
        name: "Potent Dissolvent",
        mat1: "Dissolvent Ingredients",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Water Crystal, Lightning Crystal"
    },
];
