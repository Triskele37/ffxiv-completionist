import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Armorer_MasterRecipe_Other = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-other`;

    return {
        name: "Other Master Recipes",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": "15",
                "item": "Glamour Prism",
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
                "item": "Augmented Heavy Wolfram Cuirass",
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
                "item": "Augmented Wolfram Cuirass",
                "mat-1": "Wolfram Cuirass",
                "mat-2": "2 Wolfram Square",
                "mat-3": "Battlecraft Demimateria III",
                "mat-4": "10 Battlecraft Demimateria II",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Ice Cluster, Earth Cluster",
                "special": "Unlocked w/ Master Armorer: Demimateria"
            }
        ]
    };
};
