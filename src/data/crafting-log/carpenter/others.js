import { DataGroup } from "../../DataGroup";

export const Crafting_Log_Carpenter_Others = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "50★",
        name: "Wolf Guisarme",
        mat1: "Spruce Lumber",
        mat2: "2 Cobalt Ingot",
        mat3: "Horn Glue",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Wind Crystal, 2 Ice Crystal",
        special: "X"
    },
    {
        level: "50★",
        name: "Wolf Bow",
        mat1: "Spruce Lumber",
        mat2: "2 Rosewood Lumber",
        mat3: "Aldgoat Horn",
        mat4: "Green Megalocrab Shell",
        mat5: "Red Coral",
        mat6: "X",
        catalysts: "3 Wind Crystal, 2 Ice Crystal",
        special: "X"
    },
    {
        level: "50★",
        name: "Wolf Cane",
        mat1: "Spruce Lumber",
        mat2: "Growth Formula Delta",
        mat3: "Brass Ingot",
        mat4: "Scaleskin Blood",
        mat5: "Cotton Yarn",
        mat6: "X",
        catalysts: "3 Wind Crystal, 2 Ice Crystal",
        special: "X"
    },
];
