import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Alchemist_Ishgard_Restoration_Other = function(parent) {
    return new DataGroup("Other", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80★★★",
        name: "Grade 2 Expert Skybuilders' Practice Materials",
        mat1: "Apprentice's Practice Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, 2 Ice Crystal",
        special: "Crafted from Master 8 Books"
    },
];
