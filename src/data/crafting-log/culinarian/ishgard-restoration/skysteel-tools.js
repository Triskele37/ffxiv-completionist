import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Culinarian_Ishgard_Restoration_Skysteel_Tools = function(parent) {
    return new DataGroup("Skysteel Tools", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80",
        name: "Oddly Specific Seed Extract",
        mat1: "Oddly Specific Seeds",
        mat2: "Highland Spring Water",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Fire Crystal, 7 Water Crystal"
    },
    {
        level: "80★★",
        name: "Oddly Specific Seed Flour",
        mat1: "Oddly Specific Seeds",
        mat2: "Night Vinegar",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Fire Crystal, 7 Water Crystal"
    },
];
