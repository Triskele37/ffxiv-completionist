import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Armorer_Master_Recipes_Other_Master_Recipes = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "Glamour Prism",
        mat1: "Clear Prism",
        mat2: "2 Steel Rivets",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Crystal, Earth Crystal",
        special: "Unlocked w/ Master Armorer: Glamours"
    },
    {
        level: "50★★★",
        name: "Augmented Heavy Wolfram Cuirass",
        mat1: "Heavy Wolfram Cuirass",
        mat2: "2 Wolfram Square",
        mat3: "Battlecraft Demimateria III",
        mat4: "10 Battlecraft Demimateria II",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Ice Cluster, Earth Cluster",
        special: "Unlocked w/ Master Armorer: Demimateria"
    },
    {
        level: "50★★★",
        name: "Augmented Wolfram Cuirass",
        mat1: "Wolfram Cuirass",
        mat2: "2 Wolfram Square",
        mat3: "Battlecraft Demimateria III",
        mat4: "10 Battlecraft Demimateria II",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Ice Cluster, Earth Cluster",
        special: "Unlocked w/ Master Armorer: Demimateria"
    },
];
