import { DataGroup } from "../../DataGroup";

export const Crafting_Logs_Carpenter_Others = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        "level": "50★",
        name: "Wolf Guisarme",
        "mat-1": "Spruce Lumber",
        "mat-2": "2 Cobalt Ingot",
        "mat-3": "Horn Glue",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "3 Wind Crystal, 2 Ice Crystal",
        "special": "X"
    },
    {
        "level": "50★",
        name: "Wolf Bow",
        "mat-1": "Spruce Lumber",
        "mat-2": "2 Rosewood Lumber",
        "mat-3": "Aldgoat Horn",
        "mat-4": "Green Megalocrab Shell",
        "mat-5": "Red Coral",
        "mat-6": "X",
        "catalysts": "3 Wind Crystal, 2 Ice Crystal",
        "special": "X"
    },
    {
        "level": "50★",
        name: "Wolf Cane",
        "mat-1": "Spruce Lumber",
        "mat-2": "Growth Formula Delta",
        "mat-3": "Brass Ingot",
        "mat-4": "Scaleskin Blood",
        "mat-5": "Cotton Yarn",
        "mat-6": "X",
        "catalysts": "3 Wind Crystal, 2 Ice Crystal",
        "special": "X"
    },
];
