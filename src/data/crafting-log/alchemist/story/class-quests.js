import { DataGroup } from "../../../DataGroup";

export const Crafting_Logs_Alchemist_Story_Class_Quests = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        "level": 63,
        name: "Intellectuary",
        "mat-1": "Electuary Ingredients",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Water Crystal, Lightning Crystal",
        "special": "X"
    },
    {
        "level": 65,
        name: "Twice-fermented Mun-Tuy Juice",
        "mat-1": "Juice Ingredients",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Water Crystal, Lightning Crystal",
        "special": "X"
    },
    {
        "level": 68,
        name: "Luminol",
        "mat-1": "Luminol Ingredients",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Water Crystal, Lightning Crystal",
        "special": "X"
    },
    {
        "level": 70,
        name: "Potent Dissolvent",
        "mat-1": "Dissolvent Ingredients",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Water Crystal, Lightning Crystal",
        "special": "X"
    },
];
