import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Blacksmith_Story_Class_Quests = function(parent) {
    return new DataGroup("Class Quests", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "63",
        name: "Featherlight Shortsword",
        mat1: "Shortsword Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Fire Crystal, Earth Crystal"
    }, {
        level: "65",
        name: "Heavy Uchigatana",
        mat1: "Rusted Iron Scrap",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Fire Crystal, Earth Crystal"
    }, {
        level: "68",
        name: "Custom-made Hammer",
        mat1: "Guild Forged Ingot",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Fire Crystal, Earth Crystal"
    }, {
        level: "70",
        name: "Examination Uchigatana",
        mat1: "Uchigatana Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Fire Crystal, Earth Crystal"
    },
];
