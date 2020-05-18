import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Leatherworker_Ishgard_Restoration_Skysteel_Tools = function(parent) {
    return new DataGroup("Skysteel Tools", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80",
        name: "Oddly Specific Leather",
        mat1: "Oddly Specific Skin",
        mat2: "Atrociraptor Skin",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Earth Crystal, 7 Wind Crystal",
        special: "Skysteel Round Knife Required"
    },
    {
        level: "80★★",
        name: "Oddly Specific Vellum",
        mat1: "Oddly Specific Skin",
        mat2: "Zonure Leather",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Earth Crystal, 7 Wind Crystal",
        special: "Skysteel Round Knife +1 Required"
    },
];
