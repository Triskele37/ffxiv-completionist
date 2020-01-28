import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Culinarian_MasterRecipe_2 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-2`;

    return {
        name: "Master Recipe II",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": "50★★★★",
                name: "Flint Caviar",
                "mat-1": "Borax",
                "mat-2": "Emperor Fish",
                "mat-3": "Filtered Water",
                "mat-4": "Volcanic Rock Salt",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Fire Cluster, 2 Water Cluster",
                "special": "Unlocked w/ Master Culinarian II"
            },
            {
                "level": "50★★★★",
                name: "Bacon Bread",
                "mat-1": "Smoked Bacon",
                "mat-2": "Sunset Wheat",
                "mat-3": "Mineral Water",
                "mat-4": "Night Milk",
                "mat-5": "2 Volvanic Rock Salt",
                "mat-6": "X",
                "catalysts": "2 Fire Cluster, 2 Water Cluster",
                "special": "Unlocked w/ Master Culinarian II"
            },
            {
                "level": "50★★★★",
                name: "Bacon Broth",
                "mat-1": "Smoked Bacon",
                "mat-2": "Xelphatol Spring",
                "mat-3": "La Noscean Leek",
                "mat-4": "Garlean Garlic",
                "mat-5": "Volcanic Rock Salt",
                "mat-6": "Black Pepper",
                "catalysts": "2 Fire Cluster, 2 Water Cluster",
                "special": "Unlocked w/ Master Culinarian II"
            },
            {
                "level": "50★★★★",
                name: "Triple Cream Coffee",
                "mat-1": "Roasted Coffee Beans",
                "mat-2": "Mineral Water",
                "mat-3": "Sweet Cream",
                "mat-4": "Maple Sugar",
                "mat-5": "Cinnamon",
                "mat-6": "Water",
                "catalysts": "2 Fire Cluster, 2 Water Cluster",
                "special": "Unlocked w/ Master Culinarian II"
            }
        ]
    };
};
