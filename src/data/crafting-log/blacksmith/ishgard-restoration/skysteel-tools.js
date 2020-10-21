import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Blacksmith_Ishgard_Restoration_Skysteel_Tools = function(parent) {
    return new DataGroup("Skysteel Tools", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80",
        name: "Oddly Specific Rivets",
        mat1: "Oddly Specific Iron Sand",
        mat2: "Manasilver Sand",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Fire Crystal, 7 Earth Crystal"
    },
    {
        level: "80★★",
        name: "Oddly Specific Fitting",
        mat1: "Oddly Specific Iron Sand",
        mat2: "Titanbronze Ingot",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Fire Crystal, 7 Earth Crystal"
    },
];
