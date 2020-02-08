import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Carpenter_Story_Class_Quests = function(parent) {
    return new DataGroup("Class Quests", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: 63,
        name: "Lavish Dressing Case",
        mat1: "Dressing Case Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, Ice Crystal",
        special: "Housing (Other)"
    },
    {
        level: 65,
        name: "Stylish Pipe Box",
        mat1: "Pipe Box Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, Ice Crystal",
        special: "X"
    },
    {
        level: 68,
        name: "Ornate Partition",
        mat1: "Partition Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, Ice Crystal",
        special: "X"
    },
    {
        level: 70,
        name: "Teahouse Bench",
        mat1: "Teahouse Bench Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, Ice Crystal",
        special: "X"
    },
];
