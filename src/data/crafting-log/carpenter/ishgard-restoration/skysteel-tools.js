import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Carpenter_Ishgard_Restoration_Skysteel_Tools = function(parent) {
    return new DataGroup("Skysteel Tools", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80",
        name: "Oddly Specific Petrified Orb",
        mat1: "Oddly Specific Petrified Log",
        mat2: "White Ash Log",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Wind Crystal, 7 Ice Crystal",
        special: "Skysteel Saw Required"
    },
    {
        level: "80★★",
        name: "Oddly Specific Shaft",
        mat1: "Oddly Specific Petrified Log",
        mat2: "Sandteak Lumber",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Wind Crystal, 7 Ice Crystal",
        special: "Skysteel Saw +1 Required"
    },
];
