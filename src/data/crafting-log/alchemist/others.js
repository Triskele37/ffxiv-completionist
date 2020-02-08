import { DataGroup } from "../../DataGroup";

export const Crafting_Log_Alchemist_Others = function(parent) {
    return new DataGroup("Others", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "50★",
        name: "Wolf Grimoire of Casting",
        mat1: "Enchanted Gold Ink",
        mat2: "2 Electrum Ingot",
        mat3: "Cobalt Ingot",
        mat4: "Rosewood Log",
        mat5: "Woolen Yarn",
        mat6: "X",
        catalysts: "3 Water Crystal, 2 Lightning Crystal",
        special: "X"
    },
    {
        level: "50★",
        name: "Wolf Grimoire of Healing",
        mat1: "Enchanted Gold Ink",
        mat2: "2 Electrum Ingot",
        mat3: "Cobalt Ingot",
        mat4: "Rosewood Log",
        mat5: "Woolen Yarn",
        mat6: "X",
        catalysts: "3 Water Crystal, 2 Lightning Crystal",
        special: "X"
    },
    {
        level: "50★",
        name: "Icarus Wing",
        mat1: "Eagle Feather",
        mat2: "Gold Sand",
        mat3: "Beeswax",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Water Crystal, 2 Lightning Crystal",
        special: "X"
    },
    {
        level: "50★",
        name: "Regain Feather",
        mat1: "Swan Feather",
        mat2: "Growth Formula Delta",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Water Crystal, 2 Lightning Crystal",
        special: "X"
    },
];
