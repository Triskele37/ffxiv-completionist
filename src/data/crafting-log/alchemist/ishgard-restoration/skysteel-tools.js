import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Alchemist_Ishgard_Restoration_Skysteel_Tools = function(parent) {
    return new DataGroup("Skysteel Tools", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80",
        name: "Oddly Specific Synthetic Resin",
        mat1: "Oddly Specific Quartz",
        mat2: "Vampire Vine Sap",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Water Crystal, 7 Lightning Crystal"
    },
    {
        level: "80★★",
        name: "Oddly Specific Glass",
        mat1: "Oddly Specific Quartz",
        mat2: "Refined Natron",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Water Crystal, 7 Lightning Crystal"
    },
];
