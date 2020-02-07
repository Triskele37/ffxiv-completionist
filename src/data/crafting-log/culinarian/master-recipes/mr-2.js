import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Culinarian_Master_Recipes_Master_Recipes_2 = function(name, parent) {
    const data = new DataGroup(name, parent).initializeTasks(tasks);
    data.name = "Master Recipes (2)";
    return data;
};

const tasks = [
    {
        level: "50★★★★",
        name: "Flint Caviar",
        mat1: "Borax",
        mat2: "Emperor Fish",
        mat3: "Filtered Water",
        mat4: "Volcanic Rock Salt",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Fire Cluster, 2 Water Cluster",
        special: "Unlocked w/ Master Culinarian II"
    },
    {
        level: "50★★★★",
        name: "Bacon Bread",
        mat1: "Smoked Bacon",
        mat2: "Sunset Wheat",
        mat3: "Mineral Water",
        mat4: "Night Milk",
        mat5: "2 Volvanic Rock Salt",
        mat6: "X",
        catalysts: "2 Fire Cluster, 2 Water Cluster",
        special: "Unlocked w/ Master Culinarian II"
    },
    {
        level: "50★★★★",
        name: "Bacon Broth",
        mat1: "Smoked Bacon",
        mat2: "Xelphatol Spring",
        mat3: "La Noscean Leek",
        mat4: "Garlean Garlic",
        mat5: "Volcanic Rock Salt",
        mat6: "Black Pepper",
        catalysts: "2 Fire Cluster, 2 Water Cluster",
        special: "Unlocked w/ Master Culinarian II"
    },
    {
        level: "50★★★★",
        name: "Triple Cream Coffee",
        mat1: "Roasted Coffee Beans",
        mat2: "Mineral Water",
        mat3: "Sweet Cream",
        mat4: "Maple Sugar",
        mat5: "Cinnamon",
        mat6: "Water",
        catalysts: "2 Fire Cluster, 2 Water Cluster",
        special: "Unlocked w/ Master Culinarian II"
    },
];
