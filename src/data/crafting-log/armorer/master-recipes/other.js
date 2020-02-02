import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Armorer_Master_Recipes_Other_Master_Recipes = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        "level": "15",
        name: "Glamour Prism",
        "mat-1": " Clear Prism",
        "mat-2": "2 Steel Rivets",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Ice Crystal, Earth Crystal",
        "special": "Unlocked w/ Master Armorer: Glamours"
    },
    {
        "level": "50★★★",
        name: "Augmented Heavy Wolfram Cuirass",
        "mat-1": "Heavy Wolfram Cuirass",
        "mat-2": "2 Wolfram Square",
        "mat-3": "Battlecraft Demimateria III",
        "mat-4": "10 Battlecraft Demimateria II",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Ice Cluster, Earth Cluster",
        "special": "Unlocked w/ Master Armorer: Demimateria"
    },
    {
        "level": "50★★★",
        name: "Augmented Wolfram Cuirass",
        "mat-1": "Wolfram Cuirass",
        "mat-2": "2 Wolfram Square",
        "mat-3": "Battlecraft Demimateria III",
        "mat-4": "10 Battlecraft Demimateria II",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Ice Cluster, Earth Cluster",
        "special": "Unlocked w/ Master Armorer: Demimateria"
    },
];
