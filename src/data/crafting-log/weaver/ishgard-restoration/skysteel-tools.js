import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Weaver_Ishgard_Restoration_Skysteel_Tools = function(parent) {
    return new DataGroup("Skysteel Tools", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80",
        name: "Oddly Specific Moonbeam Silk",
        mat1: "Oddly Specific Cotton",
        mat2: "Pixie Floss Boll",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Lightning Crystal, 7 Wind Crystal"
    },
    {
        level: "80★★",
        name: "Oddly Specific Velvet",
        mat1: "Oddly Specific Cotton",
        mat2: "Ovim Wool",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "7 Lightning Crystal, 7 Wind Crystal"
    },
];
