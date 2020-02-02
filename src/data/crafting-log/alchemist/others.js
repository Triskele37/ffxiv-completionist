import { DataGroup } from "../../DataGroup";

export const Crafting_Log_Alchemist_Others = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        "level": "50★",
        name: "Wolf Grimoire of Casting",
        "mat-1": "Enchanted Gold Ink",
        "mat-2": "2 Electrum Ingot",
        "mat-3": "Cobalt Ingot",
        "mat-4": "Rosewood Log",
        "mat-5": "Woolen Yarn",
        "mat-6": "X",
        "catalysts": "3 Water Crystal, 2 Lightning Crystal",
        "special": "X"
    },
    {
        "level": "50★",
        name: "Wolf Grimoire of Healing",
        "mat-1": "Enchanted Gold Ink",
        "mat-2": "2 Electrum Ingot",
        "mat-3": "Cobalt Ingot",
        "mat-4": "Rosewood Log",
        "mat-5": "Woolen Yarn",
        "mat-6": "X",
        "catalysts": "3 Water Crystal, 2 Lightning Crystal",
        "special": "X"
    },
    {
        "level": "50★",
        name: "Icarus Wing",
        "mat-1": "Eagle Feather",
        "mat-2": "Gold Sand",
        "mat-3": "Beeswax",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "3 Water Crystal, 2 Lightning Crystal",
        "special": "X"
    },
    {
        "level": "50★",
        name: "Regain Feather",
        "mat-1": "Swan Feather",
        "mat-2": "Growth Formula Delta",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "3 Water Crystal, 2 Lightning Crystal",
        "special": "X"
    },
];
