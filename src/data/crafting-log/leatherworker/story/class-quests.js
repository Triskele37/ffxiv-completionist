import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Leatherworker_Story_ClassQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.class-quests`;

    return {
        name: "Class Quests",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": 63,
                name: "Large Dhalmel Cape",
                "mat-1": "Hengr Dhalmel Hide",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Earth Crystal, Wind Crystal",
                "special": "X"
            },
            {
                "level": 65,
                name: "Grizzly Bear Gloves",
                "mat-1": "Velodyna Grizzly Bear Hide",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "x",
                "mat-6": "X",
                "catalysts": "2 Earth Crystal, Wind Crystal",
                "special": "X"
            },
            {
                "level": 68,
                name: "Dashing Dhalmelskin Jacket",
                "mat-1": "Jacket Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Earth Crystal, Wind Crystal",
                "special": "X"
            },
            {
                "level": 70,
                name: "Large Gagana Cape",
                "mat-1": "Large Gagana Skin",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Earth Crystal, Wind Crystal",
                "special": "X"
            }
        ]
    };
};
