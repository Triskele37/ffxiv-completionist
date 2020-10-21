import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Goldsmith_Ishgard_Restoration_Skysteel_Tools = function(parent) {
    return new DataGroup("Skysteel Tools", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80",
        name: "Oddly Specific Whetstone",
        mat1: "Oddly Specific Uncut Gemstone",
        mat2: "Manasilver Sand",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Wind Crystal, 7 Fire Crystal"
    },
    {
        level: "80★★",
        name: "Oddly Specific Gemstone",
        mat1: "Oddly Specific Uncut Gemstone",
        mat2: "Tuff Whetstone",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Wind Crystal, 7 Fire Crystal"
    },
];
