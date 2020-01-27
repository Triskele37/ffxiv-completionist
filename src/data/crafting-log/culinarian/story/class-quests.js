import { CraftingLogColumnConfig } from "../../columnConfigs";


export const Culinarian_Story_ClassQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.class-quests`;

    return {
        name: "Class Quests",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": 63,
                "item": "Doman Rice Balls",
                "mat-1": "Rice Ball Ingredients",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Fire Crystal, Water Crystal",
                "special": "X"
            },
            {
                "level": 65,
                "item": "Doman Udon Broth",
                "mat-1": "Broth Ingredients",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Fire Crystal, Water Crystal",
                "special": "X"
            },
            {
                "level": 68,
                "item": "Nigiri-zushi",
                "mat-1": "Sushi Ingredients",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Fire Crystal, Water Crystal",
                "special": "X"
            },
            {
                "level": 70,
                "item": "Doman Sukiyaki",
                "mat-1": "Sukiyaki Ingredients",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Fire Crystal, Water Crystal",
                "special": "X"
            }
        ]
    };
};
