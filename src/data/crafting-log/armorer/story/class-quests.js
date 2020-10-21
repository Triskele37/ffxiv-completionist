import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Armorer_Story_Class_Quests = function(parent) {
    return new DataGroup("Class Quests", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: 63,
        name: "Paladin Mail",
        mat1: "Plate Mail Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Ice Crystal, Earth Crystal"
    },
    {
        level: 65,
        name: "Titanium Kote",
        mat1: "Kote Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Ice Crystal, Earth Crystal"
    },
    {
        level: 68,
        name: "Tournament Somen",
        mat1: "Somen Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Ice Crystal, Earth Crystal"
    },
    {
        level: 70,
        name: "Lominsan Hara-ate",
        mat1: "Hara-ate Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Ice Crystal, Earth Crystal"
    },
];
